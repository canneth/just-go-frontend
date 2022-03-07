
import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import WeatherTimeSeries from '@/models/WeatherTimeSeries';
import ForecastAPIResponse, { Town } from '@/models/WeatherForecast';
import haversineDistance from '@/utils/haversineDistance';

type LatLon = [number, number];

function parseApiResponse(pastWeather: ForecastAPIResponse, currWeather: ForecastAPIResponse, nextWeather: ForecastAPIResponse) {
  const weatherData: Map<LatLon, WeatherTimeSeries> = new Map;

  const areaNameLatLon: Map<Town, LatLon> = new Map;
  pastWeather.area_metadata.forEach(areaData => {
    const latLon = [areaData.label_location.latitude, areaData.label_location.longitude] as LatLon;
    const town = areaData.name;
    areaNameLatLon.set(town, latLon);
  });

  areaNameLatLon.forEach((latLon, town) => {
    const nowDate = new Date;
    const pastDate = (new Date(nowDate));
    pastDate.setHours(nowDate.getHours() - 2);
    const nextDate = (new Date(nowDate));
    nextDate.setHours(nowDate.getHours() + 2);

    const weatherTimeSeries: WeatherTimeSeries = [];
    weatherTimeSeries.push({
      date: pastDate,
      weather: pastWeather.items[0].forecasts.find(x => x.area === town)?.forecast
    });
    weatherTimeSeries.push({
      date: nowDate,
      weather: currWeather.items[0].forecasts.find(x => x.area === town)?.forecast
    });
    weatherTimeSeries.push({
      date: nextDate,
      weather: nextWeather.items[0].forecasts.find(x => x.area === town)?.forecast
    });
    weatherData.set(latLon, weatherTimeSeries);
  });

  return weatherData;
}

export default class WeatherStore {

  weatherData: Map<LatLon, WeatherTimeSeries> = new Map;

  constructor() {
    makeAutoObservable(this);
    this.updateWeatherData();
  }

  getNearestStationLatLon(lat: number, lon: number) {
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
    if (this.weatherData.has([lat, lon])) return this.weatherData.get([lat, lon])!;
    return this.weatherData.get(this.getNearestStationLatLon(lat, lon))!;
  }
  async updateWeatherData() {
    // Grab and format current date-times for querying weather API.
    function dateToQueryString(date: Date) {
      return encodeURIComponent(`
        ${date.getFullYear()}
        -${`${date.getMonth() + 1}`.padStart(2, '0')}
        -${`${date.getDate()}`.padStart(2, '0')}
        T${`${date.getHours()}`.padStart(2, '0')}
        :${`${date.getMinutes()}`.padStart(2, '0')}
        :00
      `.replaceAll(/\s/g, ''));
    }
    const now = new Date;
    const nowDateQueryString = dateToQueryString(now);
    now.setHours(now.getHours() - 2);
    const pastDateQueryString = dateToQueryString(now);
    now.setHours(now.getHours() - 2);
    const furtherPastDateQueryString = dateToQueryString(now);
    // Make the API call to fetch weather forecast for 2 hours from now.
    const nextWeather = (await axios.get<ForecastAPIResponse>(
      `https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?
        date_time=${nowDateQueryString}
      `.replaceAll(/\s/g, '')
    )).data;
    // Make the API call to fetch current weather.
    const currWeather = (await axios.get<ForecastAPIResponse>(
      `https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?
        date_time=${pastDateQueryString}
      `.replaceAll(/\s/g, '')
    )).data;
    // Make the API call to fetch weather for 2 hours ago.
    const pastWeather = (await axios.get<ForecastAPIResponse>(
      `https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?
        date_time=${furtherPastDateQueryString}
      `.replaceAll(/\s/g, '')
    )).data;
    // Parse responses and update weatherData.
    this.weatherData = parseApiResponse(pastWeather, currWeather, nextWeather);
  }
}