
import PlaceData from '@/models/PlaceData';
import { render, screen } from '@testing-library/react';
import ScrollableList from './ScrollableList';

jest.mock('./place-card/PlaceCard', () => (
  function PlaceCardMock() {
    return <li>PlaceCard</li>
  }
));

describe('ScrollableList', () => {
  describe('on render', () => {
    it('renders a single (ordered) list element', () => {
      render(<ScrollableList placeList={[]} pastWeather={undefined} currWeather={undefined} nextWeather={undefined} />);
      screen.getByRole('list');
    });
    it('renders as many children as there are entries in the placeList prop', () => {
      function placeDataFactory(osmId: PlaceData['osm_id']): PlaceData {
        return {
          "place_id": 71344412,
          "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
          "osm_type": "node",
          "osm_id": osmId,
          "boundingbox": [
            "1.2757011",
            "1.2758011",
            "103.8472183",
            "103.8473183"
          ],
          "lat": "1.2757511",
          "lon": "103.8472683",
          "display_name": "Starbucks, 8, Drop Off - Anson Rd Entrance, Downtown Core, Singapore, Central, 0668811, Singapore",
          "class": "amenity",
          "type": "cafe",
          "importance": 0.11100000000000002,
          "icon": "https://nominatim.openstreetmap.org/ui/mapicons//food_cafe.p.20.png",
          "address": {
            "amenity": "Starbucks",
            "house_number": "8",
            "road": "Drop Off - Anson Rd Entrance",
            "suburb": "Downtown Core",
            "city": "Singapore",
            "county": "Central",
            "postcode": "0668811",
            "country": "Singapore",
            "country_code": "sg"
          },
          "extratags": {
            "cuisine": "coffee_shop",
            "takeaway": "yes",
            "brand:wikidata": "Q37158",
            "brand:wikipedia": "en:Starbucks"
          }
        }
      }
      const numOfPlaces = 10;
      const placeDataList = Array<PlaceData>();
      for (let i = 0; i < numOfPlaces; i++) placeDataList.push(placeDataFactory(i));
      render(<ScrollableList placeList={placeDataList} pastWeather={undefined} currWeather={undefined} nextWeather={undefined} />);
      const listEl = screen.getByRole('list');
      expect(listEl.childNodes).toHaveLength(placeDataList.length);
    });
  });
});