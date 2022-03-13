
import axios from 'axios';
import { placeholderResults } from './placeAPIHandlersX';
import PlaceData from '@/models/PlaceData';

describe('placeAPIHandlers', () => {
  describe('https://nominatim.openstreetmap.org/search?', () => {
    describe('query param q', () => {
      it(`if q='Starbucks', responds with status 200 and an array of PlaceData`, async () => {
        const q = 'Starbucks';
        const apiResponse = await axios.get<PlaceData[]>(
          `https://nominatim.openstreetmap.org/search?
            format=json
            &countrycodes=sg
            &addressdetails=1
            &extratags=1
            &q=${q}
          `.replaceAll(/\s/g, '')
        );
        expect(apiResponse.status).toBe(200);
        expect(apiResponse.data).toBeInstanceOf(Array);
      });
      it(`if q='ERROR', responds with status 400`, async () => {
        const q = 'ERROR';
        try {
          const apiResponse = await axios.get<PlaceData[]>(
            `https://nominatim.openstreetmap.org/search?
              format=json
              &countrycodes=sg
              &addressdetails=1
              &extratags=1
              &q=${q}
            `.replaceAll(/\s/g, '')
          );
        } catch (error) {
          if (!axios.isAxiosError(error)) throw error;
          expect(error.response!.status).toBe(400);
        }
      });
      it(`else, reponds with status 200 and an empty array`, async () => {
        const q = 'Some Random Stuff';
        const apiResponse = await axios.get<PlaceData[]>(
          `https://nominatim.openstreetmap.org/search?
            format=json
            &countrycodes=sg
            &addressdetails=1
            &extratags=1
            &q=${q}
          `.replaceAll(/\s/g, '')
        );
        expect(apiResponse.status).toBe(200);
        expect(apiResponse.data).toStrictEqual([]);
      });
    });
    describe('query param limit', () => {
      it('if unspecified, returns all results', async () => {
        const q = 'Starbucks';
        const apiResponse = await axios.get<PlaceData[]>(
          `https://nominatim.openstreetmap.org/search?
            format=json
            &countrycodes=sg
            &addressdetails=1
            &extratags=1
            &q=${q}
          `.replaceAll(/\s/g, '')
        );
        expect(apiResponse.data).toHaveLength(placeholderResults.length);
      });
      it(`if limit='X', returns an array of PlaceData of length X (up to the number of available results)`, async () => {
        const q = 'Starbucks';
        const limit = 3;
        const apiResponse = await axios.get<PlaceData[]>(
          `https://nominatim.openstreetmap.org/search?
            format=json
            &countrycodes=sg
            &addressdetails=1
            &extratags=1
            &limit=${limit}
            &q=${q}
          `.replaceAll(/\s/g, '')
        );
        expect(apiResponse.data).toHaveLength(limit);
      });
    });
    describe('query param exclude_place_ids', () => {
      it('excludes exactly the PlaceIds specified', async () => {
        const q = 'Starbucks';
        const placeIdsToExclude = placeholderResults.slice(0, 3).map(x => x.place_id);
        const apiResponse = await axios.get<PlaceData[]>(
          `https://nominatim.openstreetmap.org/search?
            format=json
            &countrycodes=sg
            &addressdetails=1
            &extratags=1
            &exclude_place_ids=${placeIdsToExclude}
            &q=${q}
          `.replaceAll(/\s/g, '')
        );
        expect(apiResponse.data).toStrictEqual(placeholderResults.slice(3));
      });
      it('does not affect the number of returned PlaceData if limit does not exceed available results', async () => {
        const q = 'Starbucks';
        const limit = 3;
        const placeIdsToExclude = placeholderResults.slice(0, 3).map(x => x.place_id);
        const apiResponse = await axios.get<PlaceData[]>(
          `https://nominatim.openstreetmap.org/search?
            format=json
            &countrycodes=sg
            &addressdetails=1
            &extratags=1
            &exclude_place_ids=${placeIdsToExclude}
            &limit=${3}
            &q=${q}
          `.replaceAll(/\s/g, '')
        );
        expect(apiResponse.data).toHaveLength(limit);
        placeIdsToExclude.forEach(excludedPlaceId => expect(apiResponse.data).not.toContain(excludedPlaceId));
      });
    });
  });
});