
import { Forecast } from '@/models/WeatherForecast';

type WeatherTimeSeries = Array<{ timestamp: string; status: Forecast; }>;

export default WeatherTimeSeries;