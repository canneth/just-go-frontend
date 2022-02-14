
import styles from './about.module.css';

export default function About() {
  return (
    <div className={styles.overallContainer}>
      <h1>Attributions</h1>
      <h2>Weather Data</h2>
      <p>
        All weather data is pulled from the Weather Forecast dataset&apos;s&nbsp;
        <a href='https://data.gov.sg/dataset/WeatherForecast?view_id=9bfd2345-62ed-491d-ba2c-940b3eaee39c&resource_id=571ef5fb-ed31-48b2-85c9-61677de42ca9' rel='noreferrer'>
          2-hour Weather Forecast API&nbsp;
        </a>
        which is made available under the terms of the&nbsp;
        <a href='https://data.gov.sg/open-data-licence' rel='noreferrer'>
          Singapore Open Data Licence version 1.0
        </a>.
      </p>
      <h2>Place Data</h2>
      <p>
        Place search and place data is powered by the&nbsp;
        <a href='https://nominatim.org/release-docs/develop/api/Overview/' rel='noreferrer'>
          Nominatim API
        </a>,
        and the maps and map tiles used are provided by&nbsp;
        <a href='https://www.openstreetmap.org/' rel='noreferrer'>
          OpenStreetMap (OSM)
        </a>.
        <br />
        Both the Nominatim API and OSM maps draw on the OpenStreetMap (OSM) data made available under the terms of the&nbsp;
        <a href='https://www.openstreetmap.org/copyright' rel='noreferrer'>
          Open Database License
        </a>.
      </p>
    </div>
  )
}