
import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import WeatherTimeSeries from '@/models/WeatherTimeSeries';
import ForecastAPIResponse, { Town } from '@/models/WeatherForecast';
import haversineDistance from '@/utils/haversineDistance';

export type LatLon = [number, number];

export function parseAPIResponse(
  pastWeather: ForecastAPIResponse | undefined,
  currWeather: ForecastAPIResponse | undefined,
  nextWeather: ForecastAPIResponse | undefined
) {

  if (!pastWeather && !currWeather && !nextWeather) return undefined;

  const weatherData: Map<LatLon, WeatherTimeSeries> = new Map;

  const nowDate = new Date;
  const pastDate = (new Date(nowDate));
  pastDate.setHours(nowDate.getHours() - 2);
  const nextDate = (new Date(nowDate));
  nextDate.setHours(nowDate.getHours() + 2);

  let areaNameLatLonPopulated = false;
  const areaNameLatLon: Map<Town, LatLon> = new Map;
  !areaNameLatLonPopulated && pastWeather?.area_metadata.forEach(areaData => {
    const latLon = [areaData.label_location.latitude, areaData.label_location.longitude] as LatLon;
    const town = areaData.name;
    areaNameLatLon.set(town, latLon);
  });
  !areaNameLatLonPopulated && currWeather?.area_metadata.forEach(areaData => {
    const latLon = [areaData.label_location.latitude, areaData.label_location.longitude] as LatLon;
    const town = areaData.name;
    areaNameLatLon.set(town, latLon);
  });
  !areaNameLatLonPopulated && nextWeather?.area_metadata.forEach(areaData => {
    const latLon = [areaData.label_location.latitude, areaData.label_location.longitude] as LatLon;
    const town = areaData.name;
    areaNameLatLon.set(town, latLon);
  });

  areaNameLatLon.forEach((latLon, town) => {
    const weatherTimeSeries: WeatherTimeSeries = [];
    weatherTimeSeries.push({
      date: pastDate,
      weather: pastWeather?.items[0].forecasts.find(x => x.area === town)?.forecast
    });
    weatherTimeSeries.push({
      date: nowDate,
      weather: currWeather?.items[0].forecasts.find(x => x.area === town)?.forecast
    });
    weatherTimeSeries.push({
      date: nextDate,
      weather: nextWeather?.items[0].forecasts.find(x => x.area === town)?.forecast
    });
    weatherData.set(latLon, weatherTimeSeries);
  });

  return weatherData;
}

export default class WeatherStore {

  weatherData: Map<LatLon, WeatherTimeSeries> | undefined = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  static dateToQueryString(date: Date) {
    return encodeURIComponent(`
      ${date.getFullYear()}
      -${`${date.getMonth() + 1}`.padStart(2, '0')}
      -${`${date.getDate()}`.padStart(2, '0')}
      T${`${date.getHours()}`.padStart(2, '0')}
      :${`${date.getMinutes()}`.padStart(2, '0')}
      :00
    `.replaceAll(/\s/g, ''));
  }
  getNearestStationLatLon(lat: number, lon: number) {
    if (!this.weatherData) return undefined;
    const { latLon: nearestLatLon, ..._ } = Array.from(this.weatherData.keys()).reduce(({ latLon, distance }, currLatLon) => {
      const currDistance = haversineDistance(currLatLon, [lat, lon]);
      if (currDistance < distance) {
        return { latLon: currLatLon, distance: currDistance };
      } else {
        return { latLon, distance };
      }
    }, { latLon: [Infinity, Infinity] as LatLon, distance: Infinity as number });
    return nearestLatLon;
  }
  getWeatherTimeSeriesNearLatLon(lat: number, lon: number) {
    if (!this.weatherData) return undefined;
    if (this.weatherData.has([lat, lon])) return this.weatherData.get([lat, lon])!;
    return this.weatherData.get(this.getNearestStationLatLon(lat, lon)!);
  }
  async updateWeatherData() {
    // Grab and format current date-times for querying weather API.
    const now = new Date;
    const nowDateQueryString = WeatherStore.dateToQueryString(now);
    now.setHours(now.getHours() - 2);
    const pastDateQueryString = WeatherStore.dateToQueryString(now);
    now.setHours(now.getHours() - 2);
    const furtherPastDateQueryString = WeatherStore.dateToQueryString(now);
    let nextWeather = undefined;
    let currWeather = undefined;
    let pastWeather = undefined;
    // Make the API call to fetch weather forecast for 2 hours from now.
    try {
      nextWeather = (await axios.get<ForecastAPIResponse>(
        `https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?
          date_time=${nowDateQueryString}
        `.replaceAll(/\s/g, '')
      )).data;
    } catch (error) {
      if (!axios.isAxiosError(error)) throw error;
    }
    // Make the API call to fetch current weather.
    try {
      currWeather = (await axios.get<ForecastAPIResponse>(
        `https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?
        date_time=${pastDateQueryString}
      `.replaceAll(/\s/g, '')
      )).data;
    } catch (error) {
      if (!axios.isAxiosError(error)) throw error;
    }
    // Make the API call to fetch weather for 2 hours ago.
    try {
      pastWeather = (await axios.get<ForecastAPIResponse>(
        `https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?
        date_time=${furtherPastDateQueryString}
      `.replaceAll(/\s/g, '')
      )).data;
    } catch (error) {
      if (!axios.isAxiosError(error)) throw error;
    }
    // Parse responses and update weatherData.
    this.weatherData = parseAPIResponse(pastWeather, currWeather, nextWeather);
  }
}