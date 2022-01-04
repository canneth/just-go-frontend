
/*
  Models the JSON returned from a call to the API:
  https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time=YYYY-MM-DD[T]HH:MM:SS
*/

export default interface WeatherForecast {
  area_metadata: Array<
    {
      name: string;
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
          area: string;
          forecast: string;
        }
      >;
    }
  ];
  api_info: {
    status: string;
  };
}

/* For example:

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