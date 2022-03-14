
import PlaceData from '@/models/PlaceData';
import { DefaultRequestBody, PathParams, rest } from 'msw';

// 25 placeholder results for search term "Starbucks"
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
    "place_id": 72570810,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 6771013196,
    "boundingbox": [
      "1.2744984",
      "1.2745984",
      "103.8434743",
      "103.8435743"
    ],
    "lat": "1.2745484",
    "lon": "103.8435243",
    "display_name": "Starbucks, 100, Tras Street, Downtown Core, Singapore, Central, 079027, Singapore",
    "class": "amenity",
    "type": "cafe",
    "importance": 0.11100000000000002,
    "icon": "https://nominatim.openstreetmap.org/ui/mapicons//food_cafe.p.20.png",
    "address": {
      "amenity": "Starbucks",
      "house_number": "100",
      "road": "Tras Street",
      "suburb": "Downtown Core",
      "city": "Singapore",
      "county": "Central",
      "postcode": "079027",
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
    "place_id": 69412566,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 6385322085,
    "boundingbox": [
      "1.2855699",
      "1.2856699",
      "103.8539683",
      "103.8540683"
    ],
    "lat": "1.2856199",
    "lon": "103.8540183",
    "display_name": "Starbucks, 1, Fullerton Promenade, Downtown Core, Singapore, Central, 049213, Singapore",
    "class": "amenity",
    "type": "cafe",
    "importance": 0.11100000000000002,
    "icon": "https://nominatim.openstreetmap.org/ui/mapicons//food_cafe.p.20.png",
    "address": {
      "amenity": "Starbucks",
      "house_number": "1",
      "road": "Fullerton Promenade",
      "suburb": "Downtown Core",
      "city": "Singapore",
      "county": "Central",
      "postcode": "049213",
      "country": "Singapore",
      "country_code": "sg"
    },
    "extratags": {
      "cuisine": "coffee_shop",
      "takeaway": "yes",
      "brand:wikidata": "Q37158",
      "brand:wikipedia": "en:Starbucks",
      "outdoor_seating": "yes"
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
    "place_id": 72711249,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 6773684632,
    "boundingbox": [
      "1.2828983",
      "1.2829983",
      "103.851858",
      "103.851958"
    ],
    "lat": "1.2829483",
    "lon": "103.851908",
    "display_name": "Starbucks, 10, Collyer Quay, Golden Shoe, Downtown Core, Singapore, Central, 049315, Singapore",
    "class": "amenity",
    "type": "cafe",
    "importance": 0.11100000000000002,
    "icon": "https://nominatim.openstreetmap.org/ui/mapicons//food_cafe.p.20.png",
    "address": {
      "amenity": "Starbucks",
      "house_number": "10",
      "road": "Collyer Quay",
      "commercial": "Golden Shoe",
      "suburb": "Downtown Core",
      "city": "Singapore",
      "county": "Central",
      "postcode": "049315",
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
  },
  {
    "place_id": 53051637,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 4577003790,
    "boundingbox": [
      "1.3048783",
      "1.3049783",
      "103.8232979",
      "103.8233979"
    ],
    "lat": "1.3049283",
    "lon": "103.8233479",
    "display_name": "Starbucks, 163, Tanglin Road, Tanglin, Singapore, Central, 247933, Singapore",
    "class": "amenity",
    "type": "cafe",
    "importance": 0.11100000000000002,
    "icon": "https://nominatim.openstreetmap.org/ui/mapicons//food_cafe.p.20.png",
    "address": {
      "amenity": "Starbucks",
      "house_number": "163",
      "road": "Tanglin Road",
      "suburb": "Tanglin",
      "city": "Singapore",
      "county": "Central",
      "postcode": "247933",
      "country": "Singapore",
      "country_code": "sg"
    },
    "extratags": {
      "level": "1",
      "cuisine": "coffee_shop",
      "website": "https://www.starbucks.com.sg/",
      "takeaway": "yes",
      "opening_hours": "Mo-Su 07:00-22:00",
      "brand:wikidata": "Q37158",
      "brand:wikipedia": "en:Starbucks",
      "internet_access": "yes",
      "outdoor_seating": "yes",
      "internet_access:fee": "no"
    }
  },
  {
    "place_id": 61798990,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 5661727627,
    "boundingbox": [
      "1.2834083",
      "1.2835083",
      "103.8485075",
      "103.8486075"
    ],
    "lat": "1.2834583",
    "lon": "103.8485575",
    "display_name": "Starbucks, Amoy Street, Far East Square, Outram, Singapore, Central, 049959, Singapore",
    "class": "amenity",
    "type": "cafe",
    "importance": 0.11100000000000002,
    "icon": "https://nominatim.openstreetmap.org/ui/mapicons//food_cafe.p.20.png",
    "address": {
      "amenity": "Starbucks",
      "road": "Amoy Street",
      "commercial": "Far East Square",
      "suburb": "Outram",
      "city": "Singapore",
      "county": "Central",
      "postcode": "049959",
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
    "place_id": 54082561,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 4723219337,
    "boundingbox": [
      "1.2850487",
      "1.2851487",
      "103.8497755",
      "103.8498755"
    ],
    "lat": "1.2850987",
    "lon": "103.8498255",
    "display_name": "Starbucks, 63, Phillip Street, Golden Shoe, Downtown Core, Singapore, Central, 049514, Singapore",
    "class": "amenity",
    "type": "cafe",
    "importance": 0.11100000000000002,
    "icon": "https://nominatim.openstreetmap.org/ui/mapicons//food_cafe.p.20.png",
    "address": {
      "amenity": "Starbucks",
      "house_number": "63",
      "road": "Phillip Street",
      "commercial": "Golden Shoe",
      "suburb": "Downtown Core",
      "city": "Singapore",
      "county": "Central",
      "postcode": "049514",
      "country": "Singapore",
      "country_code": "sg"
    },
    "extratags": {
      "cuisine": "coffee_shop",
      "takeaway": "yes",
      "brand:wikidata": "Q37158",
      "brand:wikipedia": "en:Starbucks",
      "outdoor_seating": "no"
    }
  },
  {
    "place_id": 69593627,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 6549175938,
    "boundingbox": [
      "1.2645964",
      "1.2646964",
      "103.8201283",
      "103.8202283"
    ],
    "lat": "1.2646464",
    "lon": "103.8201783",
    "display_name": "Starbucks, 1, Maritime Square, Bukit Merah, Singapore, Central, 099253, Singapore",
    "class": "amenity",
    "type": "cafe",
    "importance": 0.11100000000000002,
    "icon": "https://nominatim.openstreetmap.org/ui/mapicons//food_cafe.p.20.png",
    "address": {
      "amenity": "Starbucks",
      "house_number": "1",
      "road": "Maritime Square",
      "suburb": "Bukit Merah",
      "city": "Singapore",
      "county": "Central",
      "postcode": "099253",
      "country": "Singapore",
      "country_code": "sg"
    },
    "extratags": {
      "level": "0",
      "phone": "+65 6910 0958",
      "cuisine": "coffee_shop",
      "website": "https://www.starbucks.com.sg/",
      "takeaway": "yes",
      "payment:cash": "yes",
      "opening_hours": "Mo-Th,Su,PH 07:30-20:00; Fr-Sa 07:30-20:00",
      "payment:coins": "yes",
      "brand:wikidata": "Q37158",
      "brand:wikipedia": "en:Starbucks",
      "internet_access": "wlan",
      "outdoor_seating": "no",
      "air_conditioning": "yes",
      "internet_access:fee": "no",
      "payment:credit_cards": "yes"
    }
  },
  {
    "place_id": 71325021,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 6771020689,
    "boundingbox": [
      "1.2731994",
      "1.2732994",
      "103.8447461",
      "103.8448461"
    ],
    "lat": "1.2732494",
    "lon": "103.8447961",
    "display_name": "Starbucks, 78, Anson Road, Downtown Core, Singapore, Central, 079120, Singapore",
    "class": "amenity",
    "type": "cafe",
    "importance": 0.11100000000000002,
    "icon": "https://nominatim.openstreetmap.org/ui/mapicons//food_cafe.p.20.png",
    "address": {
      "amenity": "Starbucks",
      "house_number": "78",
      "road": "Anson Road",
      "suburb": "Downtown Core",
      "city": "Singapore",
      "county": "Central",
      "postcode": "079120",
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
    "place_id": 71324630,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 6773806192,
    "boundingbox": [
      "1.2832193",
      "1.2833193",
      "103.8506796",
      "103.8507796"
    ],
    "lat": "1.2832693",
    "lon": "103.8507296",
    "display_name": "Starbucks, 9, Market Street, Golden Shoe, Downtown Core, Singapore, Central, 048619, Singapore",
    "class": "amenity",
    "type": "cafe",
    "importance": 0.11100000000000002,
    "icon": "https://nominatim.openstreetmap.org/ui/mapicons//food_cafe.p.20.png",
    "address": {
      "amenity": "Starbucks",
      "house_number": "9",
      "road": "Market Street",
      "commercial": "Golden Shoe",
      "suburb": "Downtown Core",
      "city": "Singapore",
      "county": "Central",
      "postcode": "048619",
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
    "place_id": 42207858,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 3307075245,
    "boundingbox": [
      "1.2887054",
      "1.2888054",
      "103.8467844",
      "103.8468844"
    ],
    "lat": "1.2887554",
    "lon": "103.8468344",
    "display_name": "Starbucks, Eu Tong Sen Street, Clarke Quay, Singapore River, Singapore, Central, 059815, Singapore",
    "class": "amenity",
    "type": "cafe",
    "importance": 0.11100000000000002,
    "icon": "https://nominatim.openstreetmap.org/ui/mapicons//food_cafe.p.20.png",
    "address": {
      "amenity": "Starbucks",
      "road": "Eu Tong Sen Street",
      "neighbourhood": "Clarke Quay",
      "suburb": "Singapore River",
      "city": "Singapore",
      "county": "Central",
      "postcode": "059815",
      "country": "Singapore",
      "country_code": "sg"
    },
    "extratags": {
      "level": "0",
      "cuisine": "coffee_shop",
      "min_age": "0",
      "takeaway": "yes",
      "wheelchair": "yes",
      "payment:cash": "yes",
      "opening_hours": "Su-Th 07:30-24:00, Fr-Sa open",
      "payment:coins": "yes",
      "brand:wikidata": "Q37158",
      "brand:wikipedia": "en:Starbucks",
      "outdoor_seating": "no",
      "air_conditioning": "yes",
      "toilets:wheelchair": "no",
      "payment:credit_cards": "yes"
    }
  },
  {
    "place_id": 72512917,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 6771490537,
    "boundingbox": [
      "1.277167",
      "1.277267",
      "103.8522642",
      "103.8523642"
    ],
    "lat": "1.277217",
    "lon": "103.8523142",
    "display_name": "Starbucks, #B2-08, Straits View, Downtown Central, Downtown Core, Singapore, Central, 018935, Singapore",
    "class": "amenity",
    "type": "cafe",
    "importance": 0.11100000000000002,
    "icon": "https://nominatim.openstreetmap.org/ui/mapicons//food_cafe.p.20.png",
    "address": {
      "amenity": "Starbucks",
      "house_number": "#B2-08",
      "road": "Straits View",
      "neighbourhood": "Downtown Central",
      "suburb": "Downtown Core",
      "city": "Singapore",
      "county": "Central",
      "postcode": "018935",
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
    "place_id": 64068403,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 5924056451,
    "boundingbox": [
      "1.2860928",
      "1.2861928",
      "103.8273142",
      "103.8274142"
    ],
    "lat": "1.2861428",
    "lon": "103.8273642",
    "display_name": "Starbucks, Tiong Bahru Road, Bukit Merah, Singapore, Central, 168731, Singapore",
    "class": "amenity",
    "type": "cafe",
    "importance": 0.11100000000000002,
    "icon": "https://nominatim.openstreetmap.org/ui/mapicons//food_cafe.p.20.png",
    "address": {
      "amenity": "Starbucks",
      "road": "Tiong Bahru Road",
      "suburb": "Bukit Merah",
      "city": "Singapore",
      "county": "Central",
      "postcode": "168731",
      "country": "Singapore",
      "country_code": "sg"
    },
    "extratags": {
      "level": "0",
      "cuisine": "coffee_shop",
      "takeaway": "yes",
      "brand:wikidata": "Q37158",
      "brand:wikipedia": "en:Starbucks"
    }
  },
  {
    "place_id": 72909393,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 6774012716,
    "boundingbox": [
      "1.2923714",
      "1.2924714",
      "103.8425488",
      "103.8426488"
    ],
    "lat": "1.2924214",
    "lon": "103.8425988",
    "display_name": "Starbucks, 83, Merbau Road, Robertson Quay, Singapore River, Singapore, Central, 239918, Singapore",
    "class": "amenity",
    "type": "cafe",
    "importance": 0.11100000000000002,
    "icon": "https://nominatim.openstreetmap.org/ui/mapicons//food_cafe.p.20.png",
    "address": {
      "amenity": "Starbucks",
      "house_number": "83",
      "road": "Merbau Road",
      "neighbourhood": "Robertson Quay",
      "suburb": "Singapore River",
      "city": "Singapore",
      "county": "Central",
      "postcode": "239918",
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
    "place_id": 72836104,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 6773792109,
    "boundingbox": [
      "1.2796709",
      "1.2797709",
      "103.8351344",
      "103.8352344"
    ],
    "lat": "1.2797209",
    "lon": "103.8351844",
    "display_name": "Starbucks, Bkock 4, Hospital Drive, Bukit Merah, Singapore, Central, 169608, Singapore",
    "class": "amenity",
    "type": "cafe",
    "importance": 0.11100000000000002,
    "icon": "https://nominatim.openstreetmap.org/ui/mapicons//food_cafe.p.20.png",
    "address": {
      "amenity": "Starbucks",
      "house_number": "Bkock 4",
      "road": "Hospital Drive",
      "suburb": "Bukit Merah",
      "city": "Singapore",
      "county": "Central",
      "postcode": "169608",
      "country": "Singapore",
      "country_code": "sg"
    },
    "extratags": {
      "cuisine": "coffee_shop"
    }
  },
  {
    "place_id": 62962525,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 5816877595,
    "boundingbox": [
      "1.4065615",
      "1.4066615",
      "103.901808",
      "103.901908"
    ],
    "lat": "1.4066115",
    "lon": "103.901858",
    "display_name": "Starbucks, #01-67, Punggol Park Connector, Punggol, Singapore, Northeast, 828761, Singapore",
    "class": "amenity",
    "type": "cafe",
    "importance": 0.11100000000000002,
    "icon": "https://nominatim.openstreetmap.org/ui/mapicons//food_cafe.p.20.png",
    "address": {
      "amenity": "Starbucks",
      "house_number": "#01-67",
      "road": "Punggol Park Connector",
      "suburb": "Punggol",
      "city": "Singapore",
      "county": "Northeast",
      "postcode": "828761",
      "country": "Singapore",
      "country_code": "sg"
    },
    "extratags": {
      "cuisine": "coffee_shop",
      "takeaway": "yes",
      "brand:wikidata": "Q37158",
      "brand:wikipedia": "en:Starbucks",
      "outdoor_seating": "yes"
    }
  },
  {
    "place_id": 72639141,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 6773692796,
    "boundingbox": [
      "1.4026676",
      "1.4027676",
      "103.9132001",
      "103.9133001"
    ],
    "lat": "1.4027176",
    "lon": "103.9132501",
    "display_name": "Starbucks, 681, Punggol Drive, Punggol, Singapore, Northeast, 820681, Singapore",
    "class": "amenity",
    "type": "cafe",
    "importance": 0.11100000000000002,
    "icon": "https://nominatim.openstreetmap.org/ui/mapicons//food_cafe.p.20.png",
    "address": {
      "amenity": "Starbucks",
      "house_number": "681",
      "road": "Punggol Drive",
      "suburb": "Punggol",
      "city": "Singapore",
      "county": "Northeast",
      "postcode": "820681",
      "country": "Singapore",
      "country_code": "sg"
    },
    "extratags": {
      "level": "1",
      "cuisine": "coffee_shop",
      "takeaway": "yes",
      "wheelchair": "yes"
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