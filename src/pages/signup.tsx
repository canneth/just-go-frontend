
import Marker from '@/components/svgs/Marker';
import usePageFadeInOut from '@/hooks/usePageFadeInOut';
import styles from './signup.module.css';

export default function SignupPage() {

  const selfRef = usePageFadeInOut();

  return (
    <div ref={selfRef} className={styles.overallContainer}>
      <div className={styles.formContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.imageContainer}>
            <Marker />
          </div>
          <h1 className={styles.headerText}>Header</h1>
        </div>
        <form className={styles.form}>
          <ol className={styles.formFieldList}>
            <li className={styles.emailFieldContainer}>
              <label htmlFor='email'>Email</label>
              <input type='text' id='email' name='email' />
            </li>
            <li className={styles.passwordFieldContainer}>
              <label htmlFor='password'>Password</label>
              <input type='text' id='password' name='password' />
            </li>
          </ol>
        </form>
      </div>
      <div className={styles.divider}>or</div>
      <ol className={styles.fedAuthList}>
        <li className={styles.googleLoginButtonContainer}>

        </li>
        <li className={styles.facebookLoginButtonContainer}>

        </li>
      </ol>
    </div>
  );
}