
import { useEffect, useRef, RefObject } from 'react';
import Logo from '@/components/svgs/Logo';
import Button from '@/components/common/Button';
import usePageFadeInOut from '@/hooks/usePageFadeInOut';
import usePageChangeClickHandler from '@/hooks/usePageChangeClickHandler';
import { ACTIVITIES } from '@/globals/constants';
import styles from './index.module.css';

interface HomePageProps {
  testVar: any;
}

export default function HomePage(props: HomePageProps) {

  const selfRef = usePageFadeInOut();
  const textCarouselRef = useRef<HTMLSpanElement>(null);
  const clickHandlerJustGo = usePageChangeClickHandler('/select');
  const clickHandlerAbout = usePageChangeClickHandler('/about');

  console.log(props.testVar);

  useEffect(() => {
    textCarouselRef.current!.classList.remove(styles.closeCurtain)
    textCarouselRef.current!.classList.add(styles.openCurtain);
    let i = 0;
    const textCarouselInterval = setInterval(() => {
      if (i >= ACTIVITIES.length) i = 0;
      textCarouselRef.current!.classList.remove(styles.openCurtain)
      textCarouselRef.current!.classList.add(styles.closeCurtain)
      setTimeout(() => {
        textCarouselRef.current!.classList.remove(styles.closeCurtain)
        textCarouselRef.current!.innerHTML = ACTIVITIES[i++];
        textCarouselRef.current!.classList.add(styles.openCurtain);
      }, 600);
    }, 4000);
    return () => clearInterval(textCarouselInterval);
  }, []);

  return (
    <div ref={selfRef} className={`${styles.overallContainer}`}>
      <div className={styles.heroContainer}>
        <div className={styles.heroLeftBlock}>
          <div className={styles.heroTextBlock}>
            <div className={styles.pretitle}>
              <span>Wanna&nbsp;</span>
              <span ref={textCarouselRef} className={styles.textCarousel}>chill</span>
              <span>&nbsp;?</span>
            </div>
            <h1 className={styles.title}>JustGo!</h1>
          </div>
          <ol className={styles.buttonList}>
            <li><Button text='JustGo!' clickHandler={clickHandlerJustGo} /></li>
            <li><Button text={`About`} clickHandler={clickHandlerAbout} noBackground /></li>
          </ol>
        </div>
        <Logo extClasses={styles.logoSvg} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      testVar: process.env.SOME_VAR
    }
  };
}
