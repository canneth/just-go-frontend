
import axios from 'axios';
import ForecastAPIResponse from '@/models/WeatherForecast';
import WeatherStore from '@/stores/domain-stores/WeatherStore';
import { placeholderCurrWeather, placeholderNextWeather, placeholderPrevWeather } from './weatherAPIHandlersX';

describe('weatherAPIHandlers', () => {
  describe('https://api.data.gov.sg/v1/environment/2-hour-weather-forecast', () => {
    describe('query param date_time', () => {
      it('if current date-time is stringified to the same string as date_time, return placeholderCurrWeather', async () => {
        const dateQueryString = WeatherStore.dateToQueryString(new Date);
        const apiResponse = await axios.get<ForecastAPIResponse>(
          `https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?
            date_time=${dateQueryString}
          `.replaceAll(/\s/g, '')
        );
        expect(apiResponse.status).toBe(200);
        expect(apiResponse.data).toStrictEqual(placeholderCurrWeather);
      });
      it('if (current date-time - 2-hours) is stringified to the same string as date_time, return placeholderPrevWeather', async () => {
        const nowDate = new Date;
        const prevDate = new Date(nowDate);
        prevDate.setHours(nowDate.getHours() - 2);
        const dateQueryString = WeatherStore.dateToQueryString(prevDate);
        const apiResponse = await axios.get<ForecastAPIResponse>(
          `https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?
            date_time=${dateQueryString}
          `.replaceAll(/\s/g, '')
        );
        expect(apiResponse.status).toBe(200);
        expect(apiResponse.data).toStrictEqual(placeholderPrevWeather);
      });
      it('if (current date-time + 2-hours) is stringified to the same string as date_time, return placeholderNextWeather', async () => {
        const nowDate = new Date;
        const nextDate = new Date(nowDate);
        nextDate.setHours(nowDate.getHours() + 2);
        const dateQueryString = WeatherStore.dateToQueryString(nextDate);
        const apiResponse = await axios.get<ForecastAPIResponse>(
          `https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?
            date_time=${dateQueryString}
          `.replaceAll(/\s/g, '')
        );
        expect(apiResponse.status).toBe(200);
        expect(apiResponse.data).toStrictEqual(placeholderNextWeather);
      });
      it('else, returns with status 400', async () => {
        const nowDate = new Date;
        const unhandledDate = new Date(nowDate);
        unhandledDate.setHours(nowDate.getHours() - 1);
        const dateQueryString = WeatherStore.dateToQueryString(unhandledDate);
        try {
          const apiResponse = await axios.get<ForecastAPIResponse>(
            `https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?
              date_time=${dateQueryString}
            `.replaceAll(/\s/g, '')
          );
        } catch (error) {
          if (!axios.isAxiosError(error)) throw error;
          expect(error.response!.status).toBe(400);
        }
      });
    });
  });
});