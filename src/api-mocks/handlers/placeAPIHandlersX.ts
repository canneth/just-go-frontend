
import PlaceData from '@/models/PlaceData';
import { DefaultRequestBody, PathParams, rest } from 'msw';

// 10 placeholder results for search term "Starbucks"
export const placeholderResults: Array<PlaceData> = [
  {
    "place_id": 43765680,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 3666196448,
    "boundingbox": [
      "1.2887607",
      "1.2888607",
      "103.8051995",
      "103.8052995"
    ],
    "lat": "1.2888107",
    "lon": "103.8052495",
    "display_name": "Starbucks, #01-05/06, Alexandra Road, Queenstown, Singapore, Central, 159953, Singapore",
    "class": "amenity",
    "type": "cafe",
    "importance": 0.11100000000000002,
    "icon": "https://nominatim.openstreetmap.org/ui/mapicons//food_cafe.p.20.png",
    "address": {
      "amenity": "Starbucks",
      "house_number": "#01-05/06",
      "road": "Alexandra Road",
      "suburb": "Queenstown",
      "city": "Singapore",
      "county": "Central",
      "postcode": "159953",
      "country": "Singapore",
      "country_code": "sg"
    },
    "extratags": {
      "cuisine": "coffee_shop",
      "takeaway": "yes",
      "brand:wikidata": "Q37158",
      "brand:wikipedia": "en:Starbucks"
    }
  },
  {
    "place_id": 52741478,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 4685788474,
    "boundingbox": [
      "1.2870606",
      "1.2871606",
      "103.8533979",
      "103.8534979"
    ],
    "lat": "1.2871106",
    "lon": "103.8534479",
    "display_name": "Starbucks, Fullerton Road, Downtown Core, Singapore, Central, 049215, Singapore",
    "class": "amenity",
    "type": "cafe",
    "importance": 0.11100000000000002,
    "icon": "https://nominatim.openstreetmap.org/ui/mapicons//food_cafe.p.20.png",
    "address": {
      "amenity": "Starbucks",
      "road": "Fullerton Road",
      "suburb": "Downtown Core",
      "city": "Singapore",
      "county": "Central",
      "postcode": "049215",
      "country": "Singapore",
      "country_code": "sg"
    },
    "extratags": {
      "cuisine": "coffee_shop",
      "takeaway": "yes",
      "brand:wikidata": "Q37158",
      "brand:wikipedia": "en:Starbucks"
    }
  },
  {
    "place_id": 71309990,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 6771458342,
    "boundingbox": [
      "1.2932409",
      "1.2933409",
      "103.832135",
      "103.832235"
    ],
    "lat": "1.2932909",
    "lon": "103.832185",
    "display_name": "Starbucks, #02-21A/B/C & 02-20 B/E, Kim Seng Road, Singapore River, Singapore, Central, 237994, Singapore",
    "class": "amenity",
    "type": "cafe",
    "importance": 0.11100000000000002,
    "icon": "https://nominatim.openstreetmap.org/ui/mapicons//food_cafe.p.20.png",
    "address": {
      "amenity": "Starbucks",
      "house_number": "#02-21A/B/C & 02-20 B/E",
      "road": "Kim Seng Road",
      "suburb": "Singapore River",
      "city": "Singapore",
      "county": "Central",
      "postcode": "237994",
      "country": "Singapore",
      "country_code": "sg"
    },
    "extratags": {
      "cuisine": "coffee_shop"
    }
  },
  {
    "place_id": 71745081,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 6770980018,
    "boundingbox": [
      "1.2752187",
      "1.2753187",
      "103.8455735",
      "103.8456735"
    ],
    "lat": "1.2752687",
    "lon": "103.8456235",
    "display_name": "Starbucks, 20, Gopeng Street, Downtown Core, Singapore, Central, 077912, Singapore",
    "class": "amenity",
    "type": "cafe",
    "importance": 0.11100000000000002,
    "icon": "https://nominatim.openstreetmap.org/ui/mapicons//food_cafe.p.20.png",
    "address": {
      "amenity": "Starbucks",
      "house_number": "20",
      "road": "Gopeng Street",
      "suburb": "Downtown Core",
      "city": "Singapore",
      "county": "Central",
      "postcode": "077912",
      "country": "Singapore",
      "country_code": "sg"
    },
    "extratags": {
      "cuisine": "coffee_shop",
      "takeaway": "yes",
      "brand:wikidata": "Q37158",
      "brand:wikipedia": "en:Starbucks"
    }
  },
  {
    "place_id": 72286143,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 6743582987,
    "boundingbox": [
      "1.2847943",
      "1.2848943",
      "103.8444281",
      "103.8445281"
    ],
    "lat": "1.2848443",
    "lon": "103.8444781",
    "display_name": "Starbucks, New Bridge Road, Chinatown, Outram, Singapore, Central, 059413, Singapore",
    "class": "amenity",
    "type": "cafe",
    "importance": 0.11100000000000002,
    "icon": "https://nominatim.openstreetmap.org/ui/mapicons//food_cafe.p.20.png",
    "address": {
      "amenity": "Starbucks",
      "road": "New Bridge Road",
      "neighbourhood": "Chinatown",
      "suburb": "Outram",
      "city": "Singapore",
      "county": "Central",
      "postcode": "059413",
      "country": "Singapore",
      "country_code": "sg"
    },
    "extratags": {
      "internet_access": "wlan"
    }
  },
  {
    "place_id": 56274006,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 5069434403,
    "boundingbox": [
      "1.2929973",
      "1.2930973",
      "103.8265422",
      "103.8266422"
    ],
    "lat": "1.2930473",
    "lon": "103.8265922",
    "display_name": "Starbucks, River Valley Road, Tanglin, Singapore, Central, 248371, Singapore",
    "class": "amenity",
    "type": "cafe",
    "importance": 0.11100000000000002,
    "icon": "https://nominatim.openstreetmap.org/ui/mapicons//food_cafe.p.20.png",
    "address": {
      "amenity": "Starbucks",
      "road": "River Valley Road",
      "suburb": "Tanglin",
      "city": "Singapore",
      "county": "Central",
      "postcode": "248371",
      "country": "Singapore",
      "country_code": "sg"
    },
    "extratags": {
      "cuisine": "coffee_shop",
      "internet_access": "yes"
    }
  },
  {
    "place_id": 71704656,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 6773692412,
    "boundingbox": [
      "1.2860175",
      "1.2861175",
      "103.8477185",
      "103.8478185"
    ],
    "lat": "1.2860675",
    "lon": "103.8477685",
    "display_name": "Starbucks, 1, South Bridge Road, Downtown Core, Singapore, Central, 049145, Singapore",
    "class": "amenity",
    "type": "cafe",
    "importance": 0.11100000000000002,
    "icon": "https://nominatim.openstreetmap.org/ui/mapicons//food_cafe.p.20.png",
    "address": {
      "amenity": "Starbucks",
      "house_number": "1",
      "road": "South Bridge Road",
      "suburb": "Downtown Core",
      "city": "Singapore",
      "county": "Central",
      "postcode": "049145",
      "country": "Singapore",
      "country_code": "sg"
    },
    "extratags": {
      "cuisine": "coffee_shop",
      "takeaway": "yes",
      "brand:wikidata": "Q37158",
      "brand:wikipedia": "en:Starbucks"
    }
  },
  {
    "place_id": 60438069,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 5593572021,
    "boundingbox": [
      "1.2993127",
      "1.2994127",
      "103.8473068",
      "103.8474068"
    ],
    "lat": "1.2993627",
    "lon": "103.8473568",
    "display_name": "Starbucks, 2, Handy Road, Museum, Singapore, Central, 229233, Singapore",
    "class": "amenity",
    "type": "cafe",
    "importance": 0.11100000000000002,
    "icon": "https://nominatim.openstreetmap.org/ui/mapicons//food_cafe.p.20.png",
    "address": {
      "amenity": "Starbucks",
      "house_number": "2",
      "road": "Handy Road",
      "suburb": "Museum",
      "city": "Singapore",
      "county": "Central",
      "postcode": "229233",
      "country": "Singapore",
      "country_code": "sg"
    },
    "extratags": {
      "level": "0",
      "cuisine": "coffee_shop",
      "takeaway": "yes",
      "wheelchair": "limited",
      "opening_hours": "24/7",
      "brand:wikidata": "Q37158",
      "brand:wikipedia": "en:Starbucks",
      "internet_access": "wlan",
      "outdoor_seating": "yes"
    }
  },
  {
    "place_id": 55657069,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 4978777421,
    "boundingbox": [
      "1.3550414",
      "1.3551414",
      "103.8308303",
      "103.8309303"
    ],
    "lat": "1.3550914",
    "lon": "103.8308803",
    "display_name": "Starbucks, 301, Upper Thomson Road, Bishan, Singapore, Central, 574408, Singapore",
    "class": "amenity",
    "type": "cafe",
    "importance": 0.11100000000000002,
    "icon": "https://nominatim.openstreetmap.org/ui/mapicons//food_cafe.p.20.png",
    "address": {
      "amenity": "Starbucks",
      "house_number": "301",
      "road": "Upper Thomson Road",
      "suburb": "Bishan",
      "city": "Singapore",
      "county": "Central",
      "postcode": "574408",
      "country": "Singapore",
      "country_code": "sg"
    },
    "extratags": {
      "level": "0",
      "cuisine": "coffee_shop",
      "takeaway": "yes",
      "brand:wikidata": "Q37158",
      "brand:wikipedia": "en:Starbucks",
      "outdoor_seating": "yes"
    }
  },
  {
    "place_id": 67303326,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 6271033460,
    "boundingbox": [
      "1.264073",
      "1.264173",
      "103.8221274",
      "103.8222274"
    ],
    "lat": "1.264123",
    "lon": "103.8221774",
    "display_name": "Starbucks, Harbourfront Walk, Bukit Merah, Singapore, Central, 98585, Singapore",
    "class": "amenity",
    "type": "cafe",
    "importance": 0.11100000000000002,
    "icon": "https://nominatim.openstreetmap.org/ui/mapicons//food_cafe.p.20.png",
    "address": {
      "amenity": "Starbucks",
      "road": "Harbourfront Walk",
      "suburb": "Bukit Merah",
      "city": "Singapore",
      "county": "Central",
      "postcode": "98585",
      "country": "Singapore",
      "country_code": "sg"
    },
    "extratags": {
      "level": "1",
      "cuisine": "coffee_shop",
      "takeaway": "yes",
      "brand:wikidata": "Q37158",
      "brand:wikipedia": "en:Starbucks"
    }
  }
];

const placeAPIHandlers = [
  rest.get<DefaultRequestBody, PathParams, PlaceData[]>(`https://nominatim.openstreetmap.org/search`, (req, res, ctx) => {
    const searchString = req.url.searchParams.get('q');
    const limit = req.url.searchParams.get('limit');
    const placeIdsToExclude = req.url.searchParams.get('exclude_place_ids')?.split(',');
    if (searchString === 'ERROR') return res(ctx.status(400));
    if (searchString !== 'Starbucks') return res(ctx.status(200), ctx.json([]));
    const filteredResults = placeholderResults.filter(placeData => {
      return placeIdsToExclude ? !placeIdsToExclude.includes(`${placeData.place_id}`) : true
    });
    return res(
      ctx.status(200),
      ctx.json(limit ? filteredResults.slice(0, parseInt(limit)) : filteredResults)
    );
  }),
];

export default placeAPIHandlers;