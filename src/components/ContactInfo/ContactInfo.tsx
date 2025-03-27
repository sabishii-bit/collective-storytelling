import React from 'react';
import styles from './ContactInfo.module.scss';
import AnimatedComponent from '../AnimatedComponent/AnimatedComponent';

const ContactInfo: React.FC = () => {
  return (
    <div className={styles.contactWrapper}>
      <AnimatedComponent direction='bottom'>
        <div className={styles.contactInfo}>
          <h2 className={styles.contactTitle}>For More Information, Contact Kathy Pinol - Chief Operations Officer</h2>
          
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <h3 className={styles.contactLabel}>Contact:</h3>
              <a href="mailto:Kathy@collectivestorytelling.com" className={styles.contactValue}>
                Kathy@collectivestorytelling.com
              </a>
            </div>
            
            <div className={styles.contactItem}>
              <h3 className={styles.contactLabel}>Phone:</h3>
              <a href="tel:9253328721" className={styles.contactValue}>
                (925) 332-8721
              </a>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  );
};

export default ContactInfo; 