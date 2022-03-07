
import styles from './about.module.css';

export default function About() {
  return (
    <div className={styles.overallContainer}>
      <section className={styles.section}>
        <h1 className={styles.sectionTitle}>{`What's this all about?`}</h1>
        <div className={styles.sectionContent}>
          <section className={styles.subSection}>
            <div className={styles.subSectionContent}>
              <p className={styles.subSectionParagraph}>
                {`Feel the sudden urge to be out and about, but just can't think of the
                place to go? This humble app helps you decide on that special somewhere!`}
              </p>
              <p className={styles.subSectionParagraph}>
                This project is still under development. You may follow its progress&nbsp;
                <a href='https://github.com/canneth/just-go-frontend#readme' rel='noreferrer' target='_blank'>
                  here
                </a>.
              </p>
            </div>
          </section>
        </div>
      </section>
      <section className={styles.section}>
        <h1 className={styles.sectionTitle}>Attributions</h1>
        <div className={styles.sectionContent}>
          <section className={styles.subSection}>
            <h2 className={styles.subSectionTitle}>Weather Data</h2>
            <div className={styles.subSectionContent}>
              <p className={styles.subSectionParagraph}>
                All weather data is pulled from the&nbsp;
                <a href='https://data.gov.sg/dataset/weather-forecast?resource_id=571ef5fb-ed31-48b2-85c9-61677de42ca9' rel='noreferrer' target='_blank'>
                  2-hour Weather Forecast API&nbsp;
                </a>
                made available under the&nbsp;
                <a href='https://data.gov.sg/open-data-licence' rel='noreferrer' target='_blank'>
                  Singapore Open Data Licence version 1.0
                </a>.
              </p>
            </div>
          </section>
          <section className={styles.subSection}>
            <h2 className={styles.subSectionTitle}>Place Data</h2>
            <div className={styles.subSectionContent}>
              <p className={styles.subSectionParagraph}>
                Place data and search is powered by the&nbsp;
                <a href='https://nominatim.org/release-docs/develop/api/Overview/' rel='noreferrer' target='_blank'>
                  Nominatim API
                </a>.
                Maps and map tiles used are provided by&nbsp;
                <a href='https://www.openstreetmap.org/' rel='noreferrer' target='_blank'>
                  OpenStreetMap (OSM)
                </a>.
                Both draw on the OSM data made available under the&nbsp;
                <a href='https://www.openstreetmap.org/copyright' rel='noreferrer' target='_blank'>
                  Open Database License
                </a>.
              </p>
            </div>
          </section>
        </div>
      </section >
    </div >
  )
}