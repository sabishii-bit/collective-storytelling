import React from 'react';
import Image from 'next/image';
import AnimatedComponent from '@/components/AnimatedComponent/AnimatedComponent';
import CopyrightDisclaimer from '@/components/CopyrightDisclaimer/CopyrightDisclaimer';
import styles from './styles.module.scss';

export const metadata = {
  title: 'Who We Are | Collective Storytelling',
  description: 'Learn about the board members of Collective Storytelling Group.'
};

export default function WhoWeArePage() {
  const boardMembers = [
    {
      name: 'Robert Rowe',
      role: 'President',
      email: 'rob@collectivestorytelling.com',
      image: '/assets/img/RobertPortrait.jpg'
    },
    {
      name: 'Rebecca Rowe',
      role: 'Vice President',
      email: 'Beckrowe@gmail.com',
      image: '/assets/img/RebeccaPortrait.jpg'
    },
    {
      name: 'Kathy Pinol',
      role: 'Chief Operations Officer',
      email: 'kathy@collectivestorytelling.com',
      image: '/assets/img/KathyPortrait.jpg'
    }
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <AnimatedComponent direction='top'>
            <h1 className={styles.pageTitle}>Who We Are</h1>
          </AnimatedComponent>
          <AnimatedComponent direction='top' className={styles.animatedDivider}>
            <hr className={styles.divider} />
          </AnimatedComponent>
        </div>

        <section className={styles.teamSection}>
          <AnimatedComponent direction='right'>
            <h2 className={styles.sectionTitle}>Our Board</h2>
            <p className={styles.sectionText}>
              Our dedicated board members bring diverse expertise and a shared passion for community storytelling.
              They provide strategic direction and leadership to advance our mission.
            </p>
          </AnimatedComponent>

          <div className={styles.teamGrid}>
            {boardMembers.map((member, index) => (
              <AnimatedComponent 
                key={member.name} 
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={0.2 * index}
              >
                <div className={styles.teamMember}>
                  <div className={styles.memberImageContainer}>
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      className={styles.memberImage}
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className={styles.memberInfo}>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <p className={styles.memberRole}>{member.role}</p>
                    <p className={styles.memberContact}>
                      <a href={`mailto:${member.email}`} className={styles.memberEmail}>
                        {member.email}
                      </a>
                    </p>
                  </div>
                </div>
              </AnimatedComponent>
            ))}
          </div>
        </section>
      </div>
      <CopyrightDisclaimer />
    </>
  );
} 