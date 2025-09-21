import React from 'react';
import styles from './Banner.module.scss';
import AnimatedComponent from '../AnimatedComponent/AnimatedComponent';

const Banner: React.FC = () => {
  return (
    <div className={styles.background}>
      <AnimatedComponent direction='none'>
        <div className={styles.banner}>
        </div>
      </AnimatedComponent>
    </div>
  );
};

export default Banner;
