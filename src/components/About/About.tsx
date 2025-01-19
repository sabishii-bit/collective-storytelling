import React from 'react';
import styles from './About.module.scss';

const About: React.FC = () => {
  return (
    <>
        <div className={styles.section}>
            <h1 className={styles.heading}>ABOUT THE COLLECTIVE STORY TELLING GROUP</h1>
            
            <hr className={styles.divider} />

            <div className={styles.slide}>
              <div className={styles.image_container}>
                <img className={styles.image} src="/assets/img/stock2.webp"></img>
              </div>
              <div className={styles.slide_split}></div>
              <div className={styles.slide_description}>
                <span className={styles.description_label}>Our Mission</span>
                <span className={styles.description}>At The Collective Story Telling Group, we are dedicated to helping non-profit organizations achieve their fundraising goals by providing innovative and effective fundraising solutions. Our mission is to make fundraising easy, efficient, and enjoyable for everyone involved.</span>
              </div>
            </div>

            <div className={styles.slide}>
              <div className={styles.slide_description}>
                <span className={styles.description_label}>Our Expertise</span>
                <span className={styles.description}>With over 10 years of experience in the fundraising industry, The Collective Story Telling Group has a proven track record of success. Our team of experts has helped organizations of all sizes and types raise millions of dollars through our customized fundraising strategies.</span>
              </div>
              <div className={styles.slide_split}></div>
              <div className={styles.image_container}>
                <img className={styles.image} src="/assets/img/stock1.webp"></img>
              </div>
            </div>

            <div className={styles.slide}>
              <div className={styles.image_container}>
                <img className={styles.image} src="/assets/img/banner.webp"></img>
              </div>
              <div className={styles.slide_split}></div>
              <div className={styles.slide_description}>
                <span className={styles.description_label}>Our Approach</span>
                <span className={styles.description}>At The Collective Story Telling Group, we believe that fundraising should be a collaborative effort between our team and our clients. We work closely with each organization to understand their unique needs and goals, and develop personalized fundraising plans that deliver results.</span>
              </div>
            </div>
        </div>
    </>
  );
};

export default About;
