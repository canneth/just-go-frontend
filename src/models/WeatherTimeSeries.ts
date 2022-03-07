
import { Forecast } from '@/models/WeatherForecast';

type WeatherTimeSeries = Array<{ date: Date; weather: Forecast | undefined; }>;

export default WeatherTimeSeries;