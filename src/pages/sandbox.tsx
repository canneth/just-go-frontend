
import { MouseEvent } from 'react';
import Button from '@/components/common/button/Button';
import usePageFadeInOut from '@/hooks/usePageFadeInOut';
import WeatherStore from '@/stores/domain-stores/WeatherStore';
import styles from './sandbox.module.css';

const weatherStore = new WeatherStore;

export default function Sandbox() {

  const selfRef = usePageFadeInOut();

  function clickHandler(e: MouseEvent) {
    weatherStore.updateWeatherData();
  }

  return (
    <>
      <div ref={selfRef} className={styles.overallContainer}>
        <Button text={`Do stuff`} clickHandler={clickHandler} />
      </div>
    </>
  );
}