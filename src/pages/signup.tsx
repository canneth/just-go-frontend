
import usePageFadeInOut from '@/hooks/usePageFadeInOut';
import styles from './signup.module.css';

export default function SignupPage() {

  const selfRef = usePageFadeInOut();

  return (
    <div ref={selfRef} className={styles.overallContainer}>
      HELLO AM SIGNUP PAGE
    </div>
  );
}