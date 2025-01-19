import React from 'react';
import styles from './Banner.module.scss';

const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}>
        <h3 className={styles.logo}>THE COLLECTIVE STORY TELLING GROUP</h3>
        <h1 className={styles.title}>MAKE A CHANGE WITH US</h1>
        <div className={styles.line}></div>
        <span className={styles.subtitle}>
          We bring people together to make a positive impact.
        </span>
        <button className={styles.button}>Join the Movement</button>
      </div>
    </div>
  );
};

export default Banner;
