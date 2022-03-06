
import { makeAutoObservable } from 'mobx';
import WeatherTimeSeries from '@/models/WeatherTimeSeries';

export default class WeatherStore {

  weatherData: Map<[number, number], WeatherTimeSeries> = new Map;

  constructor() {
    makeAutoObservable(this);
  }

  getWeatherTimeSeriesAtLatLon(lat: number, lon: number) {
    return this.weatherData.get([lat, lon]);
  }
  updateWeatherData() {
    // TODO:
    // Make API call here
    // Arrange received JSON into weatherData
  }

  // TODO: YOU LEFT OFF HERE! This is incomplete!

}