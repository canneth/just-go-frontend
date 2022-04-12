
import { MouseEvent } from 'react';
import Button from '@/components/common/button/Button';
import AnimatedMarker from '@/components/svgs/AnimatedMarker';
import { toast } from '@/components/common/toast-manager/ToastManager';
import usePageFadeInOut from '@/hooks/usePageFadeInOut';
import usePageChangeClickHandler from '@/hooks/usePageChangeClickHandler';
import { FEATURE_UNAVAILABLE_TEXT } from '@/globals/constants';
import styles from './signup.module.css';

export default function SignupPage() {

  const selfRef = usePageFadeInOut();
  const clickHandlerLogInRedirect = usePageChangeClickHandler('/login');

  function clickHandlerSignUpButton(e: MouseEvent) {
    e.preventDefault();
    toast(FEATURE_UNAVAILABLE_TEXT);
  }

  return (
    <div ref={selfRef} className={styles.overallContainer}>
      <div className={styles.dialogueContainer}>
        <div className={styles.headerContainer}>
          <AnimatedMarker className={styles.badge} />
          <h1 className={styles.headerText}>Welcome!</h1>
        </div>
        <form className={styles.form}>
          <ol className={styles.formFieldList}>
            <li className={styles.fieldContainer}>
              <label htmlFor='email'>Email</label>
              <div className={styles.inputContainer}>
                <input type='text' id='email' name='email' />
              </div>
            </li>
            <li className={styles.fieldContainer}>
              <label htmlFor='password'>Password</label>
              <div className={styles.inputContainer}>
                <input type='text' id='password' name='password' />
              </div>
            </li>
          </ol>
          <Button className={styles.signUpButton} clickHandler={clickHandlerSignUpButton} text={'Sign up'} />
        </form>
        <div className={styles.alreadyHaveAccountContainer}>
          <p>Already have an account?</p>
          <a onClick={clickHandlerLogInRedirect}>Just log in!</a>
        </div>
        <div className={styles.dividerContainer}>
          <div className={styles.line} />
          <p>or</p>
          <div className={styles.line} />
        </div>
        <ol className={styles.fedAuthList}>
          <li className={styles.fedAuthListItem}>

          </li>
          <li className={styles.fedAuthListItem}>

          </li>
          <li className={styles.fedAuthListItem}>

          </li>
          <li className={styles.fedAuthListItem}>

          </li>
        </ol>
      </div>
    </div>
  );
}