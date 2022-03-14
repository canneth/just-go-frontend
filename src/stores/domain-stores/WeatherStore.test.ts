
import WeatherTimeSeries from '@/models/WeatherTimeSeries';
import WeatherStore, { LatLon } from './WeatherStore';

describe('WeatherStore', () => {
  beforeEach(() => {
    // Cleanups
    jest.restoreAllMocks();
  });
  describe('each instance', () => {
    it('has weatherData initialised as undefined', () => {
      jest.spyOn(WeatherStore.prototype, 'updateWeatherData').mockImplementation();
      const weatherStore = new WeatherStore;
      expect(weatherStore.weatherData).toBeUndefined();
    });
  });
  describe('static dateToQueryString(date: Date)', () => {
    it('formats a Date object into the required API param format correctly', () => {
      const year = 2022;
      const month = 0;
      const date = 1;
      const hour = 12;
      const minute = 30;
      const dateTime = new Date(year, month, date, hour, minute);
      const expectedResult = encodeURIComponent('2022-01-01T12:30:00');
      expect(WeatherStore.dateToQueryString(dateTime)).toBe(expectedResult);
    });
  });
  describe('hasLatLon(lat: number, lon: number)', () => {
    describe('if weatherData is undefined', () => {
      it('returns undefined', () => {
        jest.spyOn(WeatherStore.prototype, 'updateWeatherData').mockImplementation();
        const weatherStore = new WeatherStore;
        expect(weatherStore.weatherData).toBeUndefined();
        expect(weatherStore.hasLatLon(12, 23)).toBeUndefined();
      });
    });
    describe('if weatherData is defined', () => {
      it('returns false if [lat, lon] does not exist in weatherData', async () => {
        const weatherStore = new WeatherStore;
      });
      it('returns true if plat, lon] exists in weatherData', () => {

      });
    });
  });
  describe('getNearestStationLatLon(lat: number, lon: number)', () => {
    describe('if weatherData is undefined', () => {
      it('returns undefined', () => {

      });
    });
    describe('if weatherData is defined', () => {
      it('if [lat, lon] exists in weatherData, returns exactly that', () => {

      });
      it('if [lat, lon] does not exist in weatherData, calculates and returns the closest', () => {

      });
    });
  });
  describe('getWeatherTimeSeriesNearLatLon(lat: number, lon: number)', () => {
    describe('if weatherData is undefined', () => {
      it('returns undefined', () => {

      });
    });
    describe('if weatherData is defined', () => {
      it('if [lat, lon] exists in weatherData, returns the WeatherTimeSeries there', () => {

      });
      it('if [lat, lon] does not exist in weatherData, returns the WeatherTimeSeries closest to it', () => {

      });
    });
  });
  describe('async updateWeatherData()', () => {
    it('makes GET request(s) to the weather API', () => {

    });
    describe('if all GET requests are rejected with an error', () => {
      it('throws no errors', () => {

      });
      it('sets weatherData to undefined', () => {

      });
    });
    describe('if the GET request resolves successfully with data', () => {
      it('parses response and populates weatherData', () => {

      });
    });
  });
});

describe('parseApiResponse(pastWeather: ForecastAPIResponse | undefined, currWeather: ForecastAPIResponse | undefined, nextWeather: ForecastAPIResponse | undefined)', () => {
  describe('if all arguments are undefined', () => {
    it('returns undefined', () => {

    });
  });
  describe('if at least one argument is defined', () => {
    it('returns a map', () => {

    });
    it('in all map entries, the weather is undefined for the date(s) corresponding to the undefined argument(s)', () => {

    });
    it('in all map entries, the weather is defined for the date(s) corresponding to the defined argument(s)', () => {

    });
  });
});