
import { placeholderCurrWeather, placeholderNextWeather, placeholderPrevWeather } from '@/api-mocks/handlers/weatherAPIHandlers';
import mockAPIServer from '@/api-mocks/mockAPIServer';
import { rest } from 'msw';
import WeatherStore, { parseAPIResponse } from './WeatherStore';

describe('WeatherStore', () => {
  beforeEach(() => {
    // Cleanups
    jest.restoreAllMocks();
  });
  describe('each instance', () => {
    it('has weatherData initialised as undefined', () => {
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
  describe('getNearestStationLatLon(lat: number, lon: number)', () => {
    describe('if weatherData is undefined', () => {
      it('returns undefined', () => {
        const weatherStore = new WeatherStore;
        expect(weatherStore.getNearestStationLatLon(0, 0)).toBeUndefined();
      });
    });
    describe('if weatherData is defined', () => {
      it('if [lat, lon] exists in weatherData, returns exactly that', async () => {
        const weatherStore = new WeatherStore;
        await weatherStore.updateWeatherData();
        const includedLatLon = Array.from(weatherStore.weatherData!.keys())[0];
        expect(weatherStore.getNearestStationLatLon(...includedLatLon)).toStrictEqual(includedLatLon);
      });
      it('if [lat, lon] does not exist in weatherData, calculates and returns the closest', async () => {
        const weatherStore = new WeatherStore;
        await weatherStore.updateWeatherData();
        const nearestLatLon = Array.from(weatherStore.weatherData!.keys())[0];
        const latLon = [nearestLatLon[0] + 0.001, nearestLatLon[1]] as const;
        expect(weatherStore.getNearestStationLatLon(...latLon)).toStrictEqual(nearestLatLon);
      });
    });
  });
  describe('getWeatherTimeSeriesNearLatLon(lat: number, lon: number)', () => {
    describe('if weatherData is undefined', () => {
      it('returns undefined', () => {
        const weatherStore = new WeatherStore;
        expect(weatherStore.getWeatherTimeSeriesNearLatLon(0, 0)).toBeUndefined();
      });
    });
    describe('if weatherData is defined', () => {
      it('if [lat, lon] exists in weatherData, returns the WeatherTimeSeries there', async () => {
        const weatherStore = new WeatherStore;
        await weatherStore.updateWeatherData();
        const [includedLatLon, includedWeatherTimeSeries] = Array.from(weatherStore.weatherData!.entries())[0];
        expect(weatherStore.getWeatherTimeSeriesNearLatLon(...includedLatLon)).toStrictEqual(includedWeatherTimeSeries);
      });
      it('if [lat, lon] does not exist in weatherData, returns the WeatherTimeSeries closest to it', async () => {
        const weatherStore = new WeatherStore;
        await weatherStore.updateWeatherData();
        const [closestLatLon, closestWeatherTimeSeries] = Array.from(weatherStore.weatherData!.entries())[0];
        const latLon = [closestLatLon[0] + 0.001, closestLatLon[1]] as const;
        expect(weatherStore.getWeatherTimeSeriesNearLatLon(...latLon)).toStrictEqual(closestWeatherTimeSeries);
      });
    });
  });
  describe('async updateWeatherData()', () => {
    describe('if all GET request(s) resolve(s) successfully with data', () => {
      it('weatherData is populated (is no longer undefined)', async () => {
        const weatherStore = new WeatherStore;
        await weatherStore.updateWeatherData();
        expect(weatherStore.weatherData).toBeDefined();
      });
    });
    describe('if all GET requests are rejected with an error', () => {
      it('throws no errors', async () => {
        mockAPIServer.use(
          rest.get('https://api.data.gov.sg/v1/environment/2-hour-weather-forecast', (req, res, ctx) => res(ctx.status(400)))
        );
        const weatherStore = new WeatherStore;
        await weatherStore.updateWeatherData();
        expect(true).toBe(true); // Pass if no error is thrown
      });
      it('sets weatherData to undefined', async () => {
        const weatherStore = new WeatherStore;
        await weatherStore.updateWeatherData();
        mockAPIServer.use(
          rest.get('https://api.data.gov.sg/v1/environment/2-hour-weather-forecast', (req, res, ctx) => res(ctx.status(400)))
        );
        await weatherStore.updateWeatherData();
        expect(weatherStore.weatherData).toBeUndefined();
      });
    });
  });
});

describe('parseAPIResponse(pastWeather: ForecastAPIResponse | undefined, currWeather: ForecastAPIResponse | undefined, nextWeather: ForecastAPIResponse | undefined)', () => {
  describe('if all arguments are undefined', () => {
    it('returns undefined', () => {
      expect(parseAPIResponse(undefined, undefined, undefined)).toBeUndefined();
    });
  });
  describe('if at least one argument is defined', () => {
    it('returns a map', () => {
      expect(parseAPIResponse(placeholderPrevWeather, undefined, undefined)).toBeInstanceOf(Map);
      expect(parseAPIResponse(undefined, placeholderCurrWeather, undefined)).toBeInstanceOf(Map);
      expect(parseAPIResponse(undefined, undefined, placeholderNextWeather)).toBeInstanceOf(Map);
    });
    it('in all map entries, the weather is undefined only for the date(s) corresponding to the undefined argument(s)', () => {
      const map = parseAPIResponse(undefined, placeholderCurrWeather, undefined);
      const expectedValue = [
        {
          date: expect.anything(),
          weather: undefined
        },
        {
          date: expect.anything(),
          weather: expect.anything()
        },
        {
          date: expect.anything(),
          weather: undefined
        }
      ];
      for (const value of map!.values()) expect(value).toStrictEqual(expectedValue);
    });
  });
});