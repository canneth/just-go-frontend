
import WeatherTimeSeries from '@/models/WeatherTimeSeries';
import WeatherStore, { LatLon } from './WeatherStore';

// TODO: Use MSW to mock API calls!

// NOTE: This is incomplete!

describe('WeatherStore', () => {
  describe('each instance', () => {
    it('has weatherData initialised as undefined', () => {

    });
    it('calls updateWeatherData() exactly once on instantiation', () => {

    });
  });
  describe('hasLatLon(lat: number, lon: number)', () => {
    describe('if weatherData is undefined', () => {
      it('returns undefined', () => {

      });
    });
    describe('if weatherData is defined', () => {
      it('returns false if [lat, lon] does not exist as a key in weatherData', () => {

      });
      it('returns true if plat, lon] exists as a key in weatherData', () => {

      });
    });
  });
  describe('addWeatherData(key: LatLon, data: WeatherTimeSeries)', () => {

  });
  describe('getNearestStationLatLon(lat: number, lon: number)', () => {
    describe('if weatherData is undefined', () => {
      it('returns undefined', () => {

      });
    });
    describe('if weatherData is defined', () => {
      it('if [lat, lon] exists in weatherData, returns exactly that', () => {

      });
      it('if [lat, lon] does not exist in weatherData, calculates and returns the closest from weatherData', () => {

      });
    });
  });
  describe('getWeatherTimeSeriesNearLatLon(lat: number, lon: number)', () => {

  });
  describe('async updateWeatherData()', () => {
    it('makes a GET request to the weather API', () => {

    });
    describe('if the GET request is rejected with an error', () => {
      // TODO: Think of how the app should respond in this scenario, and how this should be designed accordingly!
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