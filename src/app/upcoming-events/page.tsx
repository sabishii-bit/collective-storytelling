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
      title: 'Bourbon Barrel Raffle',
      date: 'April 25-30, 2025',
      location: 'Online Event',
      image: '/assets/img/BourbonBarrel.jpg',
      description: 'Join us for our annual Bourbon Barrel Raffle fundraiser. Win exceptional bourbon while supporting fundraising initiatives.',
      registrationLink: '#',
      category: 'Fundraiser'
    },
    {
      id: 2,
      title: 'Napa Storytelling Fundraiser',
      date: 'May 17-18, 2025',
      location: 'Napa Valley, California',
      image: '/assets/img/Napa.jpg',
      description: 'Experience the magic of storytelling in the beautiful Napa Valley. This two-day event features a storytelling panel, performances, wine, bourbon, scotch, cheese and chocolate tastings.',
      registrationLink: '#',
      pdfLink: '/assets/pdf/Napa_2025_Fundraiser.pdf',
      category: 'Event'
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
                    {event.pdfLink && (
                      <div className={styles.eventActions}>
                        <a 
                          href={event.pdfLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={styles.eventButton}
                        >
                          <FaFilePdf className={styles.buttonIcon} /> Event Details
                        </a>
                      </div>
                    )}
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