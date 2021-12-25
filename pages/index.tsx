
import Logo from '@/components/svgs/Logo';
import Button from '@/components/common/Button';
import usePageFadeInOut from '@/hooks/usePageFadeInOut';
import styles from './index.module.css';

export default function Home() {

  const selfRef = usePageFadeInOut();

  return (
    <div ref={selfRef} className={`${styles.overallContainer}`}>
      <div className={styles.heroContainer}>
        <div className={styles.heroLeftBlock}>
          <div className={styles.heroTextBlock}>
            <h2 className={styles.pretitle}>
              Wanna&nbsp;
              <span className={styles.textCarousel}>chill</span>
              &nbsp;?
            </h2>
            <h1 className={styles.title}>JustGo!</h1>
          </div>
          <ol className={styles.buttonList}>
            <li><Button text='JustGo!' pageEl={selfRef.current!} destinationURL='/select' /></li>
            <li><Button text={`About`} pageEl={selfRef.current!} destinationURL='/about' noBackground /></li>
          </ol>
        </div>
        <Logo extClasses={styles.logoSvg} />
      </div>
    </div>
  );
}
