import React from 'react';
import Image from 'next/image';
import { FaFilePdf } from 'react-icons/fa';
import AnimatedComponent from '@/components/AnimatedComponent/AnimatedComponent';
import CopyrightDisclaimer from '@/components/CopyrightDisclaimer/CopyrightDisclaimer';
import styles from './styles.module.scss';

export const metadata = {
  title: 'Upcoming Events | Collective Storytelling',
  description: 'Join us at our upcoming storytelling events and fundraisers.'
};

export default function UpcomingEventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: '2nd Annual Collective Storytelling Golf & Fundraiser',
      date: 'October 24th, 2025',
      location: '',
      image: '/assets/img/Golf.jpg',
      description: 'Please join us on October 24 for an afternoon of golf and an evening of storytelling. We start with an 8 hole golf scramble tournament and finish with our main storytelling event. You will hear some great stories from our panel, taste amazing wine and bourbon which will be paired with wonderful cheese and chocolates. The event will host a silent auction and raffle to raise money for Children’s Hospital and supporting mental health.',
      registrationLink: '#',
      category: 'Fundraiser'
    }
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <AnimatedComponent direction='top'>
            <h1 className={styles.pageTitle}>Upcoming Events</h1>
          </AnimatedComponent>
          <AnimatedComponent direction='top' className={styles.animatedDivider}>
            <hr className={styles.divider} />
          </AnimatedComponent>
          <AnimatedComponent direction='bottom'>
            <p className={styles.heroText}>
              Join us at our upcoming events and fundraisers. 
              We host gatherings throughout the year to bring communities together, 
              share powerful stories, and raise funds for our storytelling initiatives.
            </p>
          </AnimatedComponent>
        </div>

        <section className={styles.featuredSection}>
          <AnimatedComponent direction='left'>
            <h2 className={styles.sectionTitle}>Featured Events</h2>
          </AnimatedComponent>
          
          <div className={styles.featuredGrid}>
            {upcomingEvents.map((event, index) => (
              <AnimatedComponent key={event.id} direction={index % 2 === 0 ? 'left' : 'right'}>
                <div className={styles.featuredEvent}>
                  <div className={styles.featuredImageContainer}>
                    <Image 
                      src={event.image} 
                      alt={event.title} 
                      className={styles.featuredImage}
                      width={500}
                      height={300} 
                    />
                  </div>
                  <div className={styles.featuredContent}>
                    <h3 className={styles.eventTitle}>{event.title}</h3>
                    <div className={styles.eventMeta}>
                      <p className={styles.eventDate}>{event.date}</p>
                      <p className={styles.eventLocation}>{event.location}</p>
                    </div>
                    <p className={styles.eventDescription}>{event.description}</p>
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