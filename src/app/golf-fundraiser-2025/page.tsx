import React from 'react';
import Image from 'next/image';
import AnimatedComponent from '@/components/AnimatedComponent/AnimatedComponent';
import CopyrightDisclaimer from '@/components/CopyrightDisclaimer/CopyrightDisclaimer';
import LogoMarquee from '@/components/LogoMarquee';
import styles from './styles.module.scss';

export const metadata = {
  title: '2025 Golf Fundraiser | Collective Storytelling',
  description: 'Support our 2025 Collective Storytelling Golf Fundraiser and help us make a positive impact.'
};

export default function GolfFundraiser2025Page() {
  const guestSpeakers = [
    {
      name: 'Spencer Christian',
      role: 'Broadcast Journalist & Former Weather Anchor for Good Morning America',
      image: '/assets/img/2025_Event/guests/SpencerChristian.jpg'
    },
    {
      name: 'Jim Capobianco',
      role: 'Academy Award-Nominated Writer & Director, Co-writer of Ratatouille',
      image: '/assets/img/2025_Event/guests/JimCapobianco.jpeg'
    },
    {
      name: 'Nick Smith',
      role: 'Head Distiller at Bardstown Bourbon Company',
      image: '/assets/img/2025_Event/guests/NickSmith.png'
    }
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <AnimatedComponent direction='top'>
            <h1 className={styles.pageTitle}>2nd Annual Collective Storytelling Golf & Fundraiser</h1>
          </AnimatedComponent>
          <AnimatedComponent direction='top' delay={0.1}>
            <p className={styles.subtitle}>
              &ldquo;An afternoon of golf and an evening of storytelling, featuring amazing wine, bourbon, cheese, and chocolates while raising money for Children&apos;s Hospital and mental health support&rdquo;
            </p>
          </AnimatedComponent>
          <AnimatedComponent direction='top' className={styles.animatedDivider}>
            <hr className={styles.divider} />
          </AnimatedComponent>
        </div>

        <section className={styles.ticketSection}>
          <AnimatedComponent direction='top'>
            <h2 className={styles.sectionTitle}>event details &amp; tickets</h2>
            <div className={styles.ticketContent}>
              <AnimatedComponent direction='left' delay={0.1}>
                <div className={styles.ticketInfo}>
                  <h3 className={styles.ticketDetailsTitle}>Event Details</h3>
                  <p className={styles.ticketDetailsText}><strong>Date:</strong> October 24, 2025</p>
                  <p className={styles.ticketDetailsText}><strong>Golf Check-in:</strong> 3:30 PM (Range opens at 3:00 PM)</p>
                  <p className={styles.ticketDetailsText}><strong>Golf Start:</strong> 4:00 PM Shotgun Start</p>
                  <p className={styles.ticketDetailsText}><strong>Storytelling Check-in:</strong> 5:30 PM</p>
                  <p className={styles.ticketDetailsText}><strong>Storytelling Event:</strong> 6:00 PM - 9:00 PM</p>
                  <p className={styles.ticketDetailsText}><strong>Location:</strong></p>
                  <a
                    href="https://maps.app.goo.gl/WqPnsKUYCEcq6mpq6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.locationLink}
                  >
                    <p className={styles.ticketDetailsText}>OAKHURST COUNTRY CLUB</p>
                    <p className={styles.ticketDetailsText}>
                      1001 Peacock Creek Drive<br/>
                      Clayton, CA 94517
                    </p>
                  </a>
                </div>
              </AnimatedComponent>

              <AnimatedComponent direction='right' delay={0.2}>
                <div className={styles.ticketPurchase}>
                  <p className={styles.ticketDescription}>
                    Join us for an 8-hole golf scramble tournament followed by our storytelling event.
                    Enjoy great stories, wine and bourbon tastings paired with cheese and chocolates,
                    plus a silent auction and raffle to support Children&apos;s Hospital and mental health.
                  </p>
                  <a
                    href="https://csgi.betterworld.org/events/collective-storytelling-group?utm_source=qr&utm_medium=print"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ticketButton}
                  >
                    Register Now
                  </a>
                  <div>
                    <p className={styles.ticketPrice}>Golf & Storytelling: $200</p>
                    <p className={styles.ticketAdditional}>Includes golf, cart, food and drinks on course, storytelling event, tastings, and 6 raffle tickets</p>

                    <p className={styles.ticketPrice}>Storytelling Only: $100</p>
                    <p className={styles.ticketAdditional}>Includes storytelling event, food, tastings, and 4 raffle tickets</p>
                  </div>
                </div>
              </AnimatedComponent>
            </div>
          </AnimatedComponent>
        </section>

        <section className={styles.panelSection}>
          <AnimatedComponent direction='top'>
            <h2 className={styles.sectionTitle}>special guest speakers</h2>
          </AnimatedComponent>

          <div className={styles.teamGrid}>
            {guestSpeakers.map((speaker, index) => (
              <AnimatedComponent
                key={speaker.name}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={0.1 * index}
              >
                <div className={styles.teamMember}>
                  <div className={styles.memberImageContainer}>
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      className={`${styles.memberImage} ${
                        speaker.name === 'Spencer Christian' ? styles.memberImageSpencer : ''
                      }`}
                      width={300}
                      height={250}
                    />
                  </div>
                  <div className={styles.memberInfo}>
                    <h3 className={styles.memberName}>{speaker.name}</h3>
                    <p className={styles.memberRole}>{speaker.role}</p>
                  </div>
                </div>
              </AnimatedComponent>
            ))}
          </div>
        </section>

        <section className={styles.panelSection}>
          <AnimatedComponent direction='top'>
            <h2 className={styles.sectionTitle}>golf tournament details</h2>
            <div className={styles.sectionText}>
              <AnimatedComponent direction='top' delay={0.1}>
                <p>
                  The golf tournament is a 4-person scramble playing a total of 8 holes. It&apos;s a shotgun start with 8 teams
                  starting on holes 1, 16, 17, and 18. There will be an A &amp; B group on each tee, with tee locations
                  changing on the second time around.
                </p>
              </AnimatedComponent>
              <AnimatedComponent direction='top' delay={0.2}>
                <p>
                  We&apos;ll have a long drive competition on hole 1 and closest to the target on hole 17.
                  Drink stations at each hole will feature cocktails and mocktails, plus Silva sausage sandwiches
                  (Linguisa/Italian Sausage/Hot Dogs) at the first tee.
                </p>
              </AnimatedComponent>
            </div>
          </AnimatedComponent>
        </section>

        <section className={styles.panelSection}>
          <AnimatedComponent direction='top'>
            <h2 className={styles.sectionTitle}>raffle tickets</h2>
            <div className={styles.goalsGrid}>
              <AnimatedComponent direction='left' delay={0.1}>
                <div className={styles.goalItem}>
                  <h3 className={styles.goalTitle}>1 Ticket - $10</h3>
                  <p className={styles.goalText}>Single raffle ticket for auction items</p>
                </div>
              </AnimatedComponent>

              <AnimatedComponent direction='right' delay={0.2}>
                <div className={styles.goalItem}>
                  <h3 className={styles.goalTitle}>3 Tickets - $20</h3>
                  <p className={styles.goalText}>Triple your chances with this value pack</p>
                </div>
              </AnimatedComponent>

              <AnimatedComponent direction='left' delay={0.3}>
                <div className={styles.goalItem}>
                  <h3 className={styles.goalTitle}>8 Tickets - $50</h3>
                  <p className={styles.goalText}>Great value for multiple entries</p>
                </div>
              </AnimatedComponent>

              <AnimatedComponent direction='right' delay={0.4}>
                <div className={styles.goalItem}>
                  <h3 className={styles.goalTitle}>20 Tickets - $100</h3>
                  <p className={styles.goalText}>Maximum chances to win amazing auction items</p>
                </div>
              </AnimatedComponent>
            </div>
          </AnimatedComponent>
        </section>

        <section className={styles.panelSection}>
          <AnimatedComponent direction='top'>
            <h2 className={styles.sectionTitle}>supporting wineries</h2>
          </AnimatedComponent>
          <LogoMarquee
            speed={100}
            pauseOnHover={true}
            gradientColor="transparent"
            gradientWidth={0}
            logoWidth={140}
            logoHeight={120}
            fadeEdgeColor="#fff"
            dataSource="golfWineries"
          />
        </section>

        <section className={styles.panelSection}>
          <AnimatedComponent direction='top'>
            <h2 className={styles.sectionTitle}>supporting distilleries</h2>
          </AnimatedComponent>
          <LogoMarquee
            speed={100}
            pauseOnHover={true}
            gradientColor="transparent"
            gradientWidth={0}
            logoWidth={180}
            logoHeight={120}
            fadeEdgeColor="#fff"
            dataSource="golfDistilleries"
          />
        </section>

        <section className={styles.panelSection}>
          <AnimatedComponent direction='top'>
            <h2 className={styles.sectionTitle}>additional sponsors</h2>
          </AnimatedComponent>
          <LogoMarquee
            speed={100}
            pauseOnHover={true}
            gradientColor="transparent"
            gradientWidth={0}
            logoWidth={180}
            logoHeight={120}
            fadeEdgeColor="#fff"
            dataSource="golfSponsors"
          />
        </section>
      </div>

      <div className={styles.honorSection}>
        <AnimatedComponent direction='bottom' delay={0.2}>
          <a href="https://www.cartoonbrew.com/animators/adam-burke-veteran-pixar-animator-dies-165139.html" target="_blank" rel="noopener noreferrer" className={styles.honorLink}>
            <p className={styles.honorNote}>
              In honor of Adam Burke - Pixar Animator &amp; Children&apos;s Hospital Advocate
            </p>
          </a>
        </AnimatedComponent>
      </div>

      <CopyrightDisclaimer />
    </>
  );
}