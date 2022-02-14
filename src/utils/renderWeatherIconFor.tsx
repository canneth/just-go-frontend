
import { Forecast } from '@/models/WeatherForecast';

export default function renderWeatherIconFor(weatherString: Forecast) {

  switch (weatherString) {
    case 'Fair (Day)':
      return <span className='iconify' data-icon='wi:day-sunny' data-width='100%' data-height='100%' />
    case 'Fair (Night)':
      return <span className='iconify' data-icon='wi:night-clear' data-width='100%' data-height='100%' />
    case 'Fair &amp; Warm':
      return <span className='iconify' data-icon='wi:hot' data-width='100%' data-height='100%' />
    case 'Partly Cloudy (Day)':
      return <span className='iconify' data-icon='wi:day-cloudy' data-width='100%' data-height='100%' />
    case 'Partly Cloudy (Night)':
      return <span className='iconify' data-icon='wi:night-alt-cloudy' data-width='100%' data-height='100%' />
    case 'Cloudy':
      return <span className='iconify' data-icon='wi:cloud' data-width='100%' data-height='100%' />
    case 'Hazy':
      return <span className='iconify' data-icon='wi:dust' data-width='100%' data-height='100%' />
    case 'Slightly Hazy':
      return <span className='iconify' data-icon='wi:fog' data-width='100%' data-height='100%' />
    case 'Windy':
      return <span className='iconify' data-icon='wi:strong-wind' data-width='100%' data-height='100%' />
    case 'Light Rain':
      return <span className='iconify' data-icon='wi:showers' data-width='100%' data-height='100%' />
    case 'Moderate Rain':
      return <span className='iconify' data-icon='wi:rain-mix' data-width='100%' data-height='100%' />
    case 'Heavy Rain':
      return <span className='iconify' data-icon='wi:rain' data-width='100%' data-height='100%' />
    case 'Passing Showers':
      return <span className='iconify' data-icon='wi:showers' data-width='100%' data-height='100%' />
    case 'Light Showers':
      return <span className='iconify' data-icon='wi:showers' data-width='100%' data-height='100%' />
    case 'Showers':
      return <span className='iconify' data-icon='wi:rain-mix' data-width='100%' data-height='100%' />
    case 'Heavy Showers':
      return <span className='iconify' data-icon='wi:rain' data-width='100%' data-height='100%' />
    case 'Thundery Showers':
      return <span className='iconify' data-icon='wi:storm-showers' data-width='100%' data-height='100%' />
    case 'Heavy Thundery Showers':
      return <span className='iconify' data-icon='wi:thunderstorm' data-width='100%' data-height='100%' />
    case 'Heavy Thundery Showers with Gusty Winds':
      return <span className='iconify' data-icon='wi:thunderstorm' data-width='100%' data-height='100%' />
    case 'Mist':
      return <span className='iconify' data-icon='wi:windy' data-width='100%' data-height='100%' />
    case 'Fog':
      return <span className='iconify' data-icon='wi:windy' data-width='100%' data-height='100%' />
    case 'Snow':
      return <span className='iconify' data-icon='wi:snowflake-cold' data-width='100%' data-height='100%' />
    case 'Snow Showers':
      return <span className='iconify' data-icon='wi:snowflake-cold' data-width='100%' data-height='100%' />
    case 'Drizzle':
      return <span className='iconify' data-icon='wi:snow-wind' data-width='100%' data-height='100%' />
    case 'Overcast':
      return <span className='iconify' data-icon='wi:cloudy' data-width='100%' data-height='100%' />
    case 'Sunny':
      return <span className='iconify' data-icon='wi:hot' data-width='100%' data-height='100%' />
    case 'Windy, Rain':
      return <span className='iconify' data-icon='wi:rain-wind' data-width='100%' data-height='100%' />
    case 'Windy, Fair':
      return <span className='iconify' data-icon='wi:strong-wind' data-width='100%' data-height='100%' />
    case 'Windy, Showers':
      return <span className='iconify' data-icon='wi:rain-wind' data-width='100%' data-height='100%' />
    case 'Windy, Cloudy':
      return <span className='iconify' data-icon='wi:cloudy-windy' data-width='100%' data-height='100%' />
    case 'Strong Winds':
      return <span className='iconify' data-icon='wi:strong-wind' data-width='100%' data-height='100%' />
    case 'Strong Winds, Rain':
      return <span className='iconify' data-icon='wi:rain-wind' data-width='100%' data-height='100%' />
    case 'Strong Winds, Showers':
      return <span className='iconify' data-icon='wi:rain-wind' data-width='100%' data-height='100%' />
    default: return null;
  }
}