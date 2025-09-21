import React from 'react';
import styles from './CopyrightDisclaimer.module.scss';

const CopyrightDisclaimer: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className={styles.Copyright}>
          Copyright © 2025 The Collective Story Telling Group - All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default CopyrightDisclaimer;
