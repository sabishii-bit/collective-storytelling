import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <>
        <div className={styles.section}>
            <h1 className={styles.heading}>ABOUT THE COLLECTIVE STORY TELLING GROUP</h1>
            <hr className={styles.divider} />
        </div>
    </>
  );
};

export default About;
