
/*
  Models the JSON returned from a call to the API:
  https://nominatim.openstreetmap.org/search?q=<query-string><additional-options>
*/

export default interface PlaceData {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  boundingbox: string[];
  lat: string;
  lon: string;
  display_name: string;
  class: string;
  type: string;
  importance: 0;
  icon?: string;
  address?: {
    shop?: string;
    amenity?: string;
    house_number?: string;
    road?: string;
    suburb?: string;
    city?: string;
    county?: string;
    postcode?: string;
    country?: string;
    country_code?: string;
  };
  extratags?: {}
};

/* For example:

{
  "place_id": 71344412,
  "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
  "osm_type": "node",
  "osm_id": 6774011327,
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

*/