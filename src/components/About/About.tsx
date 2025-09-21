import React from 'react';
import Image from 'next/image';
import styles from './About.module.scss';
import AnimatedComponent from '@/components/AnimatedComponent/AnimatedComponent';

const About: React.FC = () => {
  return (
    <>
        <div className={styles.section}>
            <AnimatedComponent direction='top'>
              <h1 className={styles.heading}>ABOUT THE COLLECTIVE STORY TELLING GROUP</h1>
            </AnimatedComponent>

            <AnimatedComponent direction='top' className={styles.animatedDivider}>
              <hr className={styles.divider} />
            </AnimatedComponent>

            <AnimatedComponent direction='left'>
              <div className={styles.slide}>
                <div className={styles.image_container}>
                  <Image 
                    className={styles.image} 
                    src="/assets/img/EventPhoto9.jpg" 
                    alt="Our Mission" 
                    width={400}
                    height={300}
                  />
                </div>
                <div className={styles.slide_split}></div>
                <div className={styles.slide_description}>
                  <span className={styles.description_label}>Our Mission</span>
                  <span className={styles.description}>Our mission is to help those who are underserved. We have identified several non-profit groups to support and we hope to inspire others to support causes that are personal to them.</span>
                </div>
              </div>
            </AnimatedComponent>

            <AnimatedComponent direction='right'>
              <div className={styles.slide}>
                <div className={styles.slide_description}>
                  <span className={styles.description_label}>Our Expertise</span>
                  <span className={styles.description}>With over 10 years of experience in the fundraising industry, The Collective Story Telling Group has a proven track record of success. Our team has hosted events of all sizes and types raised over a million dollars supporting those who need it most.</span>
                </div>
                <div className={styles.slide_split}></div>
                <div className={styles.image_container}>
                  <Image 
                    className={styles.image} 
                    src="/assets/img/EventPhoto3.jpg" 
                    alt="Our Expertise" 
                    width={400}
                    height={300}
                  />
                </div>
              </div>
            </AnimatedComponent>

            <AnimatedComponent direction='left'>
              <div className={styles.slide}>
                <div className={styles.image_container}>
                  <Image 
                    className={styles.image} 
                    src="/assets/img/EventPhoto8.jpg" 
                    alt="Our Approach" 
                    width={400}
                    height={300}
                  />
                </div>
                <div className={styles.slide_split}></div>
                <div className={styles.slide_description}>
                  <span className={styles.description_label}>Our Approach</span>
                  <span className={styles.description}>We believe that fundraising should be a collaborative effort. Our process is to use storytelling to help raise awareness, network between industries, and to use our stories to help make a difference.</span>
                </div>
              </div>
            </AnimatedComponent>
        </div>
    </>
  );
};

export default About;
