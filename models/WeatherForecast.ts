
/*
  Models the JSON returned from a call to the API:
  https://api.data.gov.sg/v1/environment/2-hour-WeatherForecast?date_time=YYYY-MM-DD[T]HH:MM:SS
*/

export default interface ForecastAPIResponse {
  area_metadata: Array<
    {
      name: Town;
      label_location: {
        latitude: number;
        longitude: number
      };
    }
  >;
  items: [
    {
      update_timestamp: string;
      timestamp: string;
      valid_period: {
        start: string;
        end: string;
      };
      forecasts: Array<
        {
          area: Town;
          forecast: Forecast;
        }
      >;
    }
  ];
  api_info: {
    status: string;
  };
}

export type Forecast = (
  | 'Fair (Day)'
  | 'Fair'
  | 'Fair &amp; Warm'
  | 'Partly Cloudy (Day)'
  | 'Partly Cloudy'
  | 'Cloudy'
  | 'Hazy'
  | 'Slightly Hazy'
  | 'Windy'
  | 'Light Rain'
  | 'Moderate Rain'
  | 'Heavy Rain'
  | 'Passing Showers'
  | 'Light Showers'
  | 'Showers'
  | 'Heavy Showers'
  | 'Thundery Showers'
  | 'Heavy Thundery Showers'
  | 'Heavy Thundery Showers with Gusty Winds'
  | 'Mist'
  | 'Fog'
  | 'Snow'
  | 'Showers'
  | 'Snow Showers'
  | 'Drizzle'
  | 'Overcast'
  | 'Sunny'
  | 'Windy, Rain'
  | 'Windy, Fair'
  | 'Windy, Showers'
  | 'Windy, Cloudy'
  | 'Strong Winds'
  | 'Strong Winds, Rain'
  | 'Strong Winds, Showers'
);

export type Town = WestTown | NorthTown | CentralTown | SouthTown | EastTown;
export type WestTown = (
  'Tengah'
  | 'Western Islands'
  | 'Boon Lay'
  | 'Pioneer'
  | 'Jurong West'
  | 'Western Water Catchment'
  | 'Jurong East'
  | 'Choa Chu Kang'
  | 'Clementi'
  | 'Bukit Batok'
  | 'Tuas'
  | 'Jurong Island'
  | 'Jalan Bahar'
);
export type NorthTown = (
  'Lim Chu Kang'
  | 'Sembawang'
  | 'Sengkang'
  | 'Mandai'
  | 'Seletar'
  | 'Sungei Kadut'
  | 'Punggol'
  | 'Woodlands'
  | 'Yishun'
);
export type CentralTown = (
  'Novena'
  | 'Serangoon'
  | 'Central Water Catchment'
  | 'Bishan'
  | 'Ang Mo Kio'
  | 'Toa Payoh'
  | 'Bukit Panjang'
  | 'Bukit Timah'
);
export type SouthTown = (
  'City'
  | 'Southern Islands'
  | 'Kallang'
  | 'Queenstown'
  | 'Tanglin'
  | 'Sentosa'
  | 'Bukit Merah'
);
export type EastTown = (
  'Changi'
  | 'Tampines'
  | 'Marine Parade'
  | 'Hougang'
  | 'Geylang'
  | 'Bedok'
  | 'Paya Lebar'
  | 'Pasir Ris'
  | 'Pulau Ubin'
  | 'Pulau Tekong'
);

/* Sniffed from https://www.nea.gov.sg/weather

...

//13 towns
var westTowns = ['Tengah', 'Western Islands', 'Boon Lay', 'Pioneer', 'Jurong West', 'Western Water Catchment', 'Jurong East', 'Choa Chu Kang', 'Clementi', 'Bukit Batok', 'Tuas', 'Jurong Island', 'Jalan Bahar'];
// 9 towns
var northTowns = ['Lim Chu Kang', 'Sembawang', 'Sengkang', 'Mandai', 'Seletar', 'Sungei Kadut', 'Punggol', 'Woodlands', 'Yishun'];
// 8 towns
var centralTowns = ['Novena', 'Serangoon', 'Central Water Catchment', 'Bishan', 'Ang Mo Kio', 'Toa Payoh', 'Bukit Panjang', 'Bukit Timah'];
// 7 towns
var southTowns = ['City', 'Southern Islands', 'Kallang', 'Queenstown', 'Tanglin', 'Sentosa', 'Bukit Merah'];
// 10 towns
var eastTowns = ['Changi', 'Tampines', 'Marine Parade', 'Hougang', 'Geylang', 'Bedok', 'Paya Lebar', 'Pasir Ris', 'Pulau Ubin', 'Pulau Tekong'];

...

availableLegendList.push({ forecast: 'fa', description: 'Fair' });
availableLegendList.push({ forecast: 'fn', description: 'Fair' });
availableLegendList.push({ forecast: 'fw', description: 'Fair &amp; Warm' });
availableLegendList.push({ forecast: 'pc', description: 'Partly Cloudy' });
availableLegendList.push({ forecast: 'pn', description: 'Partly Cloudy' });
availableLegendList.push({ forecast: 'cl', description: 'Cloudy' });
availableLegendList.push({ forecast: 'hz', description: 'Hazy' });
availableLegendList.push({ forecast: 'lh', description: 'Slightly Hazy' });
availableLegendList.push({ forecast: 'wd', description: 'Windy' });
availableLegendList.push({ forecast: 'lr', description: 'Light Rain' });
availableLegendList.push({ forecast: 'ra', description: 'Moderate Rain' });
availableLegendList.push({ forecast: 'hr', description: 'Heavy Rain' });
availableLegendList.push({ forecast: 'ps', description: 'Passing Showers' });
availableLegendList.push({ forecast: 'ls', description: 'Light Showers' });
availableLegendList.push({ forecast: 'sh', description: 'Showers' });
availableLegendList.push({ forecast: 'hs', description: 'Heavy Showers' });
availableLegendList.push({ forecast: 'tl', description: 'Thundery Showers' });
availableLegendList.push({ forecast: 'ht', description: 'Heavy Thundery Showers' });
availableLegendList.push({ forecast: 'hg', description: 'Heavy Thundery Showers with Gusty Winds' });
availableLegendList.push({ forecast: 'br', description: 'Mist' });
availableLegendList.push({ forecast: 'fg', description: 'Fog' });
availableLegendList.push({ forecast: 'sn', description: 'Snow' });
availableLegendList.push({ forecast: 'sh', description: 'Showers' });
availableLegendList.push({ forecast: 'ss', description: 'Snow Showers' });
availableLegendList.push({ forecast: 'dr', description: 'Drizzle' });
availableLegendList.push({ forecast: 'oc', description: 'Overcast' });
availableLegendList.push({ forecast: 'su', description: 'Sunny' });
availableLegendList.push({ forecast: 'wr', description: 'Windy, Rain' });
availableLegendList.push({ forecast: 'wf', description: 'Windy, Fair' });
availableLegendList.push({ forecast: 'ws', description: 'Windy, Showers' });
availableLegendList.push({ forecast: 'wc', description: 'Windy, Cloudy' });
availableLegendList.push({ forecast: 'sw', description: 'Strong Winds' });
availableLegendList.push({ forecast: 'sr', description: 'Strong Winds, Rain' });
availableLegendList.push({ forecast: 'sk', description: 'Strong Winds, Showers' });

...

*/

/* Example ForecastAPIResponse:

{
  "area_metadata": [
    {
      "name": "Ang Mo Kio",
      "label_location": {
        "latitude": 1.375,
        "longitude": 103.839
      }
    },
    {
      "name": "Bedok",
      "label_location": {
        "latitude": 1.321,
        "longitude": 103.924
      }
    }
    ...
  ],
  "items": [
    {
      "update_timestamp": "2022-01-04T22:08:52+08:00",
      "timestamp": "2022-01-04T22:00:00+08:00",
      "valid_period": {
        "start": "2022-01-04T22:00:00+08:00",
        "end": "2022-01-05T00:00:00+08:00"
      },
      "forecasts": [
        {
          "area": "Ang Mo Kio",
          "forecast": "Cloudy"
        },
        {
          "area": "Bedok",
          "forecast": "Cloudy"
        },
        ...
      ]
    }
  ],
  "api_info": {
    "status": "healthy"
  }
}

*/