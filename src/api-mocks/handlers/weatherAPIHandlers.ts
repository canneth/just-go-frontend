
import ForecastAPIResponse from '@/models/WeatherForecast';
import WeatherStore from '@/stores/domain-stores/WeatherStore';
import { DefaultRequestBody, PathParams, rest } from 'msw';

export const placeholderNextWeather: ForecastAPIResponse = {
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
    },
    {
      "name": "Bishan",
      "label_location": {
        "latitude": 1.350772,
        "longitude": 103.839
      }
    },
    {
      "name": "Boon Lay",
      "label_location": {
        "latitude": 1.304,
        "longitude": 103.701
      }
    },
    {
      "name": "Bukit Batok",
      "label_location": {
        "latitude": 1.353,
        "longitude": 103.754
      }
    },
    {
      "name": "Bukit Merah",
      "label_location": {
        "latitude": 1.277,
        "longitude": 103.819
      }
    },
    {
      "name": "Bukit Panjang",
      "label_location": {
        "latitude": 1.362,
        "longitude": 103.77195
      }
    },
    {
      "name": "Bukit Timah",
      "label_location": {
        "latitude": 1.325,
        "longitude": 103.791
      }
    },
    {
      "name": "Central Water Catchment",
      "label_location": {
        "latitude": 1.38,
        "longitude": 103.805
      }
    },
    {
      "name": "Changi",
      "label_location": {
        "latitude": 1.357,
        "longitude": 103.987
      }
    },
    {
      "name": "Choa Chu Kang",
      "label_location": {
        "latitude": 1.377,
        "longitude": 103.745
      }
    },
    {
      "name": "Clementi",
      "label_location": {
        "latitude": 1.315,
        "longitude": 103.76
      }
    },
    {
      "name": "City",
      "label_location": {
        "latitude": 1.292,
        "longitude": 103.844
      }
    },
    {
      "name": "Geylang",
      "label_location": {
        "latitude": 1.318,
        "longitude": 103.884
      }
    },
    {
      "name": "Hougang",
      "label_location": {
        "latitude": 1.361218,
        "longitude": 103.886
      }
    },
    {
      "name": "Jalan Bahar",
      "label_location": {
        "latitude": 1.347,
        "longitude": 103.67
      }
    },
    {
      "name": "Jurong East",
      "label_location": {
        "latitude": 1.326,
        "longitude": 103.737
      }
    },
    {
      "name": "Jurong Island",
      "label_location": {
        "latitude": 1.266,
        "longitude": 103.699
      }
    },
    {
      "name": "Jurong West",
      "label_location": {
        "latitude": 1.34039,
        "longitude": 103.705
      }
    },
    {
      "name": "Kallang",
      "label_location": {
        "latitude": 1.312,
        "longitude": 103.862
      }
    },
    {
      "name": "Lim Chu Kang",
      "label_location": {
        "latitude": 1.423,
        "longitude": 103.717332
      }
    },
    {
      "name": "Mandai",
      "label_location": {
        "latitude": 1.419,
        "longitude": 103.812
      }
    },
    {
      "name": "Marine Parade",
      "label_location": {
        "latitude": 1.297,
        "longitude": 103.891
      }
    },
    {
      "name": "Novena",
      "label_location": {
        "latitude": 1.327,
        "longitude": 103.826
      }
    },
    {
      "name": "Pasir Ris",
      "label_location": {
        "latitude": 1.37,
        "longitude": 103.948
      }
    },
    {
      "name": "Paya Lebar",
      "label_location": {
        "latitude": 1.358,
        "longitude": 103.914
      }
    },
    {
      "name": "Pioneer",
      "label_location": {
        "latitude": 1.315,
        "longitude": 103.675
      }
    },
    {
      "name": "Pulau Tekong",
      "label_location": {
        "latitude": 1.403,
        "longitude": 104.053
      }
    },
    {
      "name": "Pulau Ubin",
      "label_location": {
        "latitude": 1.404,
        "longitude": 103.96
      }
    },
    {
      "name": "Punggol",
      "label_location": {
        "latitude": 1.401,
        "longitude": 103.904
      }
    },
    {
      "name": "Queenstown",
      "label_location": {
        "latitude": 1.291,
        "longitude": 103.78576
      }
    },
    {
      "name": "Seletar",
      "label_location": {
        "latitude": 1.404,
        "longitude": 103.869
      }
    },
    {
      "name": "Sembawang",
      "label_location": {
        "latitude": 1.445,
        "longitude": 103.818495
      }
    },
    {
      "name": "Sengkang",
      "label_location": {
        "latitude": 1.384,
        "longitude": 103.891443
      }
    },
    {
      "name": "Sentosa",
      "label_location": {
        "latitude": 1.243,
        "longitude": 103.832
      }
    },
    {
      "name": "Serangoon",
      "label_location": {
        "latitude": 1.357,
        "longitude": 103.865
      }
    },
    {
      "name": "Southern Islands",
      "label_location": {
        "latitude": 1.208,
        "longitude": 103.842
      }
    },
    {
      "name": "Sungei Kadut",
      "label_location": {
        "latitude": 1.413,
        "longitude": 103.756
      }
    },
    {
      "name": "Tampines",
      "label_location": {
        "latitude": 1.345,
        "longitude": 103.944
      }
    },
    {
      "name": "Tanglin",
      "label_location": {
        "latitude": 1.308,
        "longitude": 103.813
      }
    },
    {
      "name": "Tengah",
      "label_location": {
        "latitude": 1.374,
        "longitude": 103.715
      }
    },
    {
      "name": "Toa Payoh",
      "label_location": {
        "latitude": 1.334304,
        "longitude": 103.856327
      }
    },
    {
      "name": "Tuas",
      "label_location": {
        "latitude": 1.294947,
        "longitude": 103.635
      }
    },
    {
      "name": "Western Islands",
      "label_location": {
        "latitude": 1.205926,
        "longitude": 103.746
      }
    },
    {
      "name": "Western Water Catchment",
      "label_location": {
        "latitude": 1.405,
        "longitude": 103.689
      }
    },
    {
      "name": "Woodlands",
      "label_location": {
        "latitude": 1.432,
        "longitude": 103.786528
      }
    },
    {
      "name": "Yishun",
      "label_location": {
        "latitude": 1.418,
        "longitude": 103.839
      }
    }
  ],
  "items": [
    {
      "update_timestamp": "2022-03-13T14:08:52+08:00",
      "timestamp": "2022-03-13T14:00:00+08:00",
      "valid_period": {
        "start": "2022-03-13T14:00:00+08:00",
        "end": "2022-03-13T16:00:00+08:00"
      },
      "forecasts": [
        {
          "area": "Ang Mo Kio",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Bedok",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Bishan",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Boon Lay",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Bukit Batok",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Bukit Merah",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Bukit Panjang",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Bukit Timah",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Central Water Catchment",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Changi",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Choa Chu Kang",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Clementi",
          "forecast": "Fair (Day)"
        },
        {
          "area": "City",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Geylang",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Hougang",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Jalan Bahar",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Jurong East",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Jurong Island",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Jurong West",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Kallang",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Lim Chu Kang",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Mandai",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Marine Parade",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Novena",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Pasir Ris",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Paya Lebar",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Pioneer",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Pulau Tekong",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Pulau Ubin",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Punggol",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Queenstown",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Seletar",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Sembawang",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Sengkang",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Sentosa",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Serangoon",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Southern Islands",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Sungei Kadut",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Tampines",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Tanglin",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Tengah",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Toa Payoh",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Tuas",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Western Islands",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Western Water Catchment",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Woodlands",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Yishun",
          "forecast": "Fair (Day)"
        }
      ]
    }
  ],
  "api_info": {
    "status": "healthy"
  }
};
export const placeholderCurrWeather: ForecastAPIResponse = {
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
    },
    {
      "name": "Bishan",
      "label_location": {
        "latitude": 1.350772,
        "longitude": 103.839
      }
    },
    {
      "name": "Boon Lay",
      "label_location": {
        "latitude": 1.304,
        "longitude": 103.701
      }
    },
    {
      "name": "Bukit Batok",
      "label_location": {
        "latitude": 1.353,
        "longitude": 103.754
      }
    },
    {
      "name": "Bukit Merah",
      "label_location": {
        "latitude": 1.277,
        "longitude": 103.819
      }
    },
    {
      "name": "Bukit Panjang",
      "label_location": {
        "latitude": 1.362,
        "longitude": 103.77195
      }
    },
    {
      "name": "Bukit Timah",
      "label_location": {
        "latitude": 1.325,
        "longitude": 103.791
      }
    },
    {
      "name": "Central Water Catchment",
      "label_location": {
        "latitude": 1.38,
        "longitude": 103.805
      }
    },
    {
      "name": "Changi",
      "label_location": {
        "latitude": 1.357,
        "longitude": 103.987
      }
    },
    {
      "name": "Choa Chu Kang",
      "label_location": {
        "latitude": 1.377,
        "longitude": 103.745
      }
    },
    {
      "name": "Clementi",
      "label_location": {
        "latitude": 1.315,
        "longitude": 103.76
      }
    },
    {
      "name": "City",
      "label_location": {
        "latitude": 1.292,
        "longitude": 103.844
      }
    },
    {
      "name": "Geylang",
      "label_location": {
        "latitude": 1.318,
        "longitude": 103.884
      }
    },
    {
      "name": "Hougang",
      "label_location": {
        "latitude": 1.361218,
        "longitude": 103.886
      }
    },
    {
      "name": "Jalan Bahar",
      "label_location": {
        "latitude": 1.347,
        "longitude": 103.67
      }
    },
    {
      "name": "Jurong East",
      "label_location": {
        "latitude": 1.326,
        "longitude": 103.737
      }
    },
    {
      "name": "Jurong Island",
      "label_location": {
        "latitude": 1.266,
        "longitude": 103.699
      }
    },
    {
      "name": "Jurong West",
      "label_location": {
        "latitude": 1.34039,
        "longitude": 103.705
      }
    },
    {
      "name": "Kallang",
      "label_location": {
        "latitude": 1.312,
        "longitude": 103.862
      }
    },
    {
      "name": "Lim Chu Kang",
      "label_location": {
        "latitude": 1.423,
        "longitude": 103.717332
      }
    },
    {
      "name": "Mandai",
      "label_location": {
        "latitude": 1.419,
        "longitude": 103.812
      }
    },
    {
      "name": "Marine Parade",
      "label_location": {
        "latitude": 1.297,
        "longitude": 103.891
      }
    },
    {
      "name": "Novena",
      "label_location": {
        "latitude": 1.327,
        "longitude": 103.826
      }
    },
    {
      "name": "Pasir Ris",
      "label_location": {
        "latitude": 1.37,
        "longitude": 103.948
      }
    },
    {
      "name": "Paya Lebar",
      "label_location": {
        "latitude": 1.358,
        "longitude": 103.914
      }
    },
    {
      "name": "Pioneer",
      "label_location": {
        "latitude": 1.315,
        "longitude": 103.675
      }
    },
    {
      "name": "Pulau Tekong",
      "label_location": {
        "latitude": 1.403,
        "longitude": 104.053
      }
    },
    {
      "name": "Pulau Ubin",
      "label_location": {
        "latitude": 1.404,
        "longitude": 103.96
      }
    },
    {
      "name": "Punggol",
      "label_location": {
        "latitude": 1.401,
        "longitude": 103.904
      }
    },
    {
      "name": "Queenstown",
      "label_location": {
        "latitude": 1.291,
        "longitude": 103.78576
      }
    },
    {
      "name": "Seletar",
      "label_location": {
        "latitude": 1.404,
        "longitude": 103.869
      }
    },
    {
      "name": "Sembawang",
      "label_location": {
        "latitude": 1.445,
        "longitude": 103.818495
      }
    },
    {
      "name": "Sengkang",
      "label_location": {
        "latitude": 1.384,
        "longitude": 103.891443
      }
    },
    {
      "name": "Sentosa",
      "label_location": {
        "latitude": 1.243,
        "longitude": 103.832
      }
    },
    {
      "name": "Serangoon",
      "label_location": {
        "latitude": 1.357,
        "longitude": 103.865
      }
    },
    {
      "name": "Southern Islands",
      "label_location": {
        "latitude": 1.208,
        "longitude": 103.842
      }
    },
    {
      "name": "Sungei Kadut",
      "label_location": {
        "latitude": 1.413,
        "longitude": 103.756
      }
    },
    {
      "name": "Tampines",
      "label_location": {
        "latitude": 1.345,
        "longitude": 103.944
      }
    },
    {
      "name": "Tanglin",
      "label_location": {
        "latitude": 1.308,
        "longitude": 103.813
      }
    },
    {
      "name": "Tengah",
      "label_location": {
        "latitude": 1.374,
        "longitude": 103.715
      }
    },
    {
      "name": "Toa Payoh",
      "label_location": {
        "latitude": 1.334304,
        "longitude": 103.856327
      }
    },
    {
      "name": "Tuas",
      "label_location": {
        "latitude": 1.294947,
        "longitude": 103.635
      }
    },
    {
      "name": "Western Islands",
      "label_location": {
        "latitude": 1.205926,
        "longitude": 103.746
      }
    },
    {
      "name": "Western Water Catchment",
      "label_location": {
        "latitude": 1.405,
        "longitude": 103.689
      }
    },
    {
      "name": "Woodlands",
      "label_location": {
        "latitude": 1.432,
        "longitude": 103.786528
      }
    },
    {
      "name": "Yishun",
      "label_location": {
        "latitude": 1.418,
        "longitude": 103.839
      }
    }
  ],
  "items": [
    {
      "update_timestamp": "2022-03-13T12:38:52+08:00",
      "timestamp": "2022-03-13T12:30:00+08:00",
      "valid_period": {
        "start": "2022-03-13T12:30:00+08:00",
        "end": "2022-03-13T14:30:00+08:00"
      },
      "forecasts": [
        {
          "area": "Ang Mo Kio",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Bedok",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Bishan",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Boon Lay",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Bukit Batok",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Bukit Merah",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Bukit Panjang",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Bukit Timah",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Central Water Catchment",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Changi",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Choa Chu Kang",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Clementi",
          "forecast": "Fair (Day)"
        },
        {
          "area": "City",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Geylang",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Hougang",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Jalan Bahar",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Jurong East",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Jurong Island",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Jurong West",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Kallang",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Lim Chu Kang",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Mandai",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Marine Parade",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Novena",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Pasir Ris",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Paya Lebar",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Pioneer",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Pulau Tekong",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Pulau Ubin",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Punggol",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Queenstown",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Seletar",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Sembawang",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Sengkang",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Sentosa",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Serangoon",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Southern Islands",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Sungei Kadut",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Tampines",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Tanglin",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Tengah",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Toa Payoh",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Tuas",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Western Islands",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Western Water Catchment",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Woodlands",
          "forecast": "Fair (Day)"
        },
        {
          "area": "Yishun",
          "forecast": "Fair (Day)"
        }
      ]
    }
  ],
  "api_info": {
    "status": "healthy"
  }
};
export const placeholderPrevWeather: ForecastAPIResponse = {
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
    },
    {
      "name": "Bishan",
      "label_location": {
        "latitude": 1.350772,
        "longitude": 103.839
      }
    },
    {
      "name": "Boon Lay",
      "label_location": {
        "latitude": 1.304,
        "longitude": 103.701
      }
    },
    {
      "name": "Bukit Batok",
      "label_location": {
        "latitude": 1.353,
        "longitude": 103.754
      }
    },
    {
      "name": "Bukit Merah",
      "label_location": {
        "latitude": 1.277,
        "longitude": 103.819
      }
    },
    {
      "name": "Bukit Panjang",
      "label_location": {
        "latitude": 1.362,
        "longitude": 103.77195
      }
    },
    {
      "name": "Bukit Timah",
      "label_location": {
        "latitude": 1.325,
        "longitude": 103.791
      }
    },
    {
      "name": "Central Water Catchment",
      "label_location": {
        "latitude": 1.38,
        "longitude": 103.805
      }
    },
    {
      "name": "Changi",
      "label_location": {
        "latitude": 1.357,
        "longitude": 103.987
      }
    },
    {
      "name": "Choa Chu Kang",
      "label_location": {
        "latitude": 1.377,
        "longitude": 103.745
      }
    },
    {
      "name": "Clementi",
      "label_location": {
        "latitude": 1.315,
        "longitude": 103.76
      }
    },
    {
      "name": "City",
      "label_location": {
        "latitude": 1.292,
        "longitude": 103.844
      }
    },
    {
      "name": "Geylang",
      "label_location": {
        "latitude": 1.318,
        "longitude": 103.884
      }
    },
    {
      "name": "Hougang",
      "label_location": {
        "latitude": 1.361218,
        "longitude": 103.886
      }
    },
    {
      "name": "Jalan Bahar",
      "label_location": {
        "latitude": 1.347,
        "longitude": 103.67
      }
    },
    {
      "name": "Jurong East",
      "label_location": {
        "latitude": 1.326,
        "longitude": 103.737
      }
    },
    {
      "name": "Jurong Island",
      "label_location": {
        "latitude": 1.266,
        "longitude": 103.699
      }
    },
    {
      "name": "Jurong West",
      "label_location": {
        "latitude": 1.34039,
        "longitude": 103.705
      }
    },
    {
      "name": "Kallang",
      "label_location": {
        "latitude": 1.312,
        "longitude": 103.862
      }
    },
    {
      "name": "Lim Chu Kang",
      "label_location": {
        "latitude": 1.423,
        "longitude": 103.717332
      }
    },
    {
      "name": "Mandai",
      "label_location": {
        "latitude": 1.419,
        "longitude": 103.812
      }
    },
    {
      "name": "Marine Parade",
      "label_location": {
        "latitude": 1.297,
        "longitude": 103.891
      }
    },
    {
      "name": "Novena",
      "label_location": {
        "latitude": 1.327,
        "longitude": 103.826
      }
    },
    {
      "name": "Pasir Ris",
      "label_location": {
        "latitude": 1.37,
        "longitude": 103.948
      }
    },
    {
      "name": "Paya Lebar",
      "label_location": {
        "latitude": 1.358,
        "longitude": 103.914
      }
    },
    {
      "name": "Pioneer",
      "label_location": {
        "latitude": 1.315,
        "longitude": 103.675
      }
    },
    {
      "name": "Pulau Tekong",
      "label_location": {
        "latitude": 1.403,
        "longitude": 104.053
      }
    },
    {
      "name": "Pulau Ubin",
      "label_location": {
        "latitude": 1.404,
        "longitude": 103.96
      }
    },
    {
      "name": "Punggol",
      "label_location": {
        "latitude": 1.401,
        "longitude": 103.904
      }
    },
    {
      "name": "Queenstown",
      "label_location": {
        "latitude": 1.291,
        "longitude": 103.78576
      }
    },
    {
      "name": "Seletar",
      "label_location": {
        "latitude": 1.404,
        "longitude": 103.869
      }
    },
    {
      "name": "Sembawang",
      "label_location": {
        "latitude": 1.445,
        "longitude": 103.818495
      }
    },
    {
      "name": "Sengkang",
      "label_location": {
        "latitude": 1.384,
        "longitude": 103.891443
      }
    },
    {
      "name": "Sentosa",
      "label_location": {
        "latitude": 1.243,
        "longitude": 103.832
      }
    },
    {
      "name": "Serangoon",
      "label_location": {
        "latitude": 1.357,
        "longitude": 103.865
      }
    },
    {
      "name": "Southern Islands",
      "label_location": {
        "latitude": 1.208,
        "longitude": 103.842
      }
    },
    {
      "name": "Sungei Kadut",
      "label_location": {
        "latitude": 1.413,
        "longitude": 103.756
      }
    },
    {
      "name": "Tampines",
      "label_location": {
        "latitude": 1.345,
        "longitude": 103.944
      }
    },
    {
      "name": "Tanglin",
      "label_location": {
        "latitude": 1.308,
        "longitude": 103.813
      }
    },
    {
      "name": "Tengah",
      "label_location": {
        "latitude": 1.374,
        "longitude": 103.715
      }
    },
    {
      "name": "Toa Payoh",
      "label_location": {
        "latitude": 1.334304,
        "longitude": 103.856327
      }
    },
    {
      "name": "Tuas",
      "label_location": {
        "latitude": 1.294947,
        "longitude": 103.635
      }
    },
    {
      "name": "Western Islands",
      "label_location": {
        "latitude": 1.205926,
        "longitude": 103.746
      }
    },
    {
      "name": "Western Water Catchment",
      "label_location": {
        "latitude": 1.405,
        "longitude": 103.689
      }
    },
    {
      "name": "Woodlands",
      "label_location": {
        "latitude": 1.432,
        "longitude": 103.786528
      }
    },
    {
      "name": "Yishun",
      "label_location": {
        "latitude": 1.418,
        "longitude": 103.839
      }
    }
  ],
  "items": [
    {
      "update_timestamp": "2022-03-13T10:38:52+08:00",
      "timestamp": "2022-03-13T10:30:00+08:00",
      "valid_period": {
        "start": "2022-03-13T10:30:00+08:00",
        "end": "2022-03-13T12:30:00+08:00"
      },
      "forecasts": [
        {
          "area": "Ang Mo Kio",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Bedok",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Bishan",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Boon Lay",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Bukit Batok",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Bukit Merah",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Bukit Panjang",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Bukit Timah",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Central Water Catchment",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Changi",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Choa Chu Kang",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Clementi",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "City",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Geylang",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Hougang",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Jalan Bahar",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Jurong East",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Jurong Island",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Jurong West",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Kallang",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Lim Chu Kang",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Mandai",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Marine Parade",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Novena",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Pasir Ris",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Paya Lebar",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Pioneer",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Pulau Tekong",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Pulau Ubin",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Punggol",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Queenstown",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Seletar",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Sembawang",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Sengkang",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Sentosa",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Serangoon",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Southern Islands",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Sungei Kadut",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Tampines",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Tanglin",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Tengah",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Toa Payoh",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Tuas",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Western Islands",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Western Water Catchment",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Woodlands",
          "forecast": "Partly Cloudy (Day)"
        },
        {
          "area": "Yishun",
          "forecast": "Partly Cloudy (Day)"
        }
      ]
    }
  ],
  "api_info": {
    "status": "healthy"
  }
};

const weatherAPIHandlers = [
  rest.get<DefaultRequestBody, PathParams, ForecastAPIResponse>('https://api.data.gov.sg/v1/environment/2-hour-weather-forecast', (req, res, ctx) => {

    const dateTimeParam = req.url.searchParams.get('date_time');
    const nowDate = new Date;
    const prevDate = new Date(nowDate);
    prevDate.setHours(nowDate.getHours() - 2);
    const prevPrevDate = new Date(nowDate);
    prevPrevDate.setHours(nowDate.getHours() - 4);
    const nowDateStringified = decodeURIComponent(WeatherStore.dateToQueryString(nowDate));
    const prevDateStringified = decodeURIComponent(WeatherStore.dateToQueryString(prevDate));
    const prevPrevDateStringified = decodeURIComponent(WeatherStore.dateToQueryString(prevPrevDate));

    switch (dateTimeParam) {
      case nowDateStringified:
        return res(ctx.status(200), ctx.json(placeholderNextWeather));
      case prevDateStringified:
        return res(ctx.status(200), ctx.json(placeholderCurrWeather));
      case prevPrevDateStringified:
        return res(ctx.status(200), ctx.json(placeholderPrevWeather));
      default:
        return res(ctx.status(400));
    }
  })
];

export default weatherAPIHandlers;