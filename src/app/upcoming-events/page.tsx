import React from 'react';
import Image from 'next/image';
import AnimatedComponent from '@/components/AnimatedComponent/AnimatedComponent';
import CopyrightDisclaimer from '@/components/CopyrightDisclaimer/CopyrightDisclaimer';
import styles from './styles.module.scss';

export const metadata = {
  title: 'Upcoming Events | Collective Storytelling',
  description: 'Join us at our upcoming storytelling events and fundraisers.'
};

const schedule = [
  { time: '11:00 AM', detail: 'VIP Early Access & Van Winkle Experience (VIP only)' },
  { time: '12:00 PM', detail: 'General Admission Entry' },
  { time: '12:30 PM', detail: '"The Art of the Journey" panel with Floyd Norman & Ted Mathot' },
  { time: '2:00 PM', detail: 'Women of Precision panel featuring Heidi Barrett & Amy Fiedler' },
  { time: '5:00–6:30 PM', detail: 'Ultimate Tasting with luxury spirits experts (VIP only)' },
];

const tickets = [
  { name: 'General Admission', price: '$125' },
  { name: 'VIP Van Winkle Talk & Tasting', price: '$500' },
  { name: 'VIP Ultimate Whiskey Tasting', price: '$500' },
  { name: '"All In" Package', price: '$750' },
  { name: 'VIP Lounge Add-on', price: '$100' },
];

export default function UpcomingEventsPage() {
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
            <AnimatedComponent direction='left'>
              <div className={styles.featuredEvent}>
                <div className={styles.featuredImageContainer}>
                  <Image
                    src='/assets/img/EventPhoto1.jpg'
                    alt='Napa Storytelling Event 2026'
                    className={styles.featuredImage}
                    width={500}
                    height={300}
                  />
                </div>
                <div className={styles.featuredContent}>
                  <h3 className={styles.eventTitle}>Napa Storytelling Event 2026</h3>
                  <div className={styles.eventMeta}>
                    <p className={styles.eventDate}>Saturday, June 13th, 2026 &nbsp;|&nbsp; 11:00 AM PDT</p>
                    <p className={styles.eventLocation}>Freemark Abbey Winery &mdash; 3022 Saint Helena Highway, St. Helena, CA 94574</p>
                  </div>
                  <p className={styles.eventDescription}>
                    A celebration honoring Adam Burke featuring storytelling, craft demonstrations, and community
                    engagement. The day includes panel discussions with renowned speakers &mdash; including animator
                    Floyd Norman and Pixar&apos;s Ted Mathot, and winemaker Heidi Barrett &mdash; plus musical
                    performances, wine and spirits tastings, live auctions, and raffle experiences. Proceeds support
                    Oakland Children&apos;s Hospital, Louisville Norton Children&apos;s Hospitals, and additional nonprofits.
                  </p>

                  {/* Schedule */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ fontFamily: 'Lato, Arial, sans-serif', fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#1B1B1B' }}>
                      Schedule
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'Lusitana, Georgia, serif', fontSize: '0.95rem', color: '#444' }}>
                      {schedule.map((item) => (
                        <li key={item.time} style={{ marginBottom: '0.35rem' }}>
                          <strong>{item.time}</strong> &mdash; {item.detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tickets */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ fontFamily: 'Lato, Arial, sans-serif', fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#1B1B1B' }}>
                      Ticket Pricing
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'Lusitana, Georgia, serif', fontSize: '0.95rem', color: '#444' }}>
                      {tickets.map((t) => (
                        <li key={t.name} style={{ marginBottom: '0.25rem' }}>
                          {t.name} &mdash; <strong>{t.price}</strong>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.eventActions}>
                    <a
                      href='https://csgi.betterworld.org/events/2026-collective-storytelling-gro'
                      target='_blank'
                      rel='noopener noreferrer'
                      className={styles.registerButton}
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedComponent>
          </div>
        </section>
      </div>
      <CopyrightDisclaimer />
    </>
  );
}
