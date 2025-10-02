import React from 'react';
import AnimatedComponent from '@/components/AnimatedComponent/AnimatedComponent';
import CopyrightDisclaimer from '@/components/CopyrightDisclaimer/CopyrightDisclaimer';
import LogoMarquee from '@/components/LogoMarquee';
import styles from './styles.module.scss';

export const metadata = {
  title: '2025 Fundraiser | Collective Storytelling',
  description: 'Support our 2025 Collective Storytelling Fundraiser and help us make a positive impact.'
};

export default function Fundraiser2025Page() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <AnimatedComponent direction='top'>
            <h1 className={styles.pageTitle}>2025 Collective Storytelling Napa Fundraiser Event</h1>
          </AnimatedComponent>
          <AnimatedComponent direction='top' delay={0.1}>
            <p className={styles.subtitle}>
              &ldquo;A Rare Intersection of the Wine, Cheese, Whiskey, Chocolate, Music, Entertainment, and Culinary Worlds, All Tied Together Through Storytelling&rdquo;
            </p>
          </AnimatedComponent>
          <AnimatedComponent direction='top' className={styles.animatedDivider}>
            <hr className={styles.divider} />
          </AnimatedComponent>
        </div>

        <section className={styles.ticketSection}>
          <AnimatedComponent direction='top'>
            <h2 className={styles.sectionTitle}>purchase tickets</h2>
            <div className={styles.ticketContent}>
              <AnimatedComponent direction='left' delay={0.1}>
                <div className={styles.ticketInfo}>
                  <h3 className={styles.ticketDetailsTitle}>Event Details</h3>
                  <p className={styles.ticketDetailsText}><strong>Date:</strong> May 17, 2025</p>
                  <p className={styles.ticketDetailsText}><strong>Time:</strong> 11:00 AM - 5:00 PM PDT</p>
                  <p className={styles.ticketDetailsText}><strong>Location:</strong></p>
                  <a 
                    href="https://maps.app.goo.gl/EW6reVihtL66tECJ9" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.locationLink}
                  >
                    <p className={styles.ticketDetailsText}>FREEMARK ABBEY</p>
                    <p className={styles.ticketDetailsText}>
                      3022 St. Helena Highway North St<br/>
                      Helena, CA 94574
                    </p>
                  </a>
                </div>
              </AnimatedComponent>
              
              <AnimatedComponent direction='right' delay={0.2}>
                <div className={styles.ticketPurchase}>
                  <p className={styles.ticketDescription}>
                    Join us for a spectacular event featuring special storytelling panels, 
                    fantastic music guests, and tastings of cheese, wine, chocolate, bourbon, 
                    and appetizers. Don&apos;t miss our silent and live auctions!
                  </p>
                  <span className={`${styles.ticketButton} ${styles.disabled}`}>
                    Purchase Tickets
                  </span>
                  <p className={styles.ticketPrice}>General Admission: $200</p>
                  <p className={styles.ticketAdditional}>Special tastings and add-ons available during checkout</p>
                </div>
              </AnimatedComponent>
            </div>
          </AnimatedComponent>
        </section>

        <section className={styles.panelSection}>
          <AnimatedComponent direction='top'>
            <h2 className={styles.sectionTitle}>storytelling panel</h2>
            <div className={styles.panelGrid}>
              <AnimatedComponent direction='left' delay={0.1}>
                <a href="https://www.iwerksandco.com/about-us" target="_blank" rel="noopener noreferrer" className={styles.panelLink}>
                  <div className={styles.panelMember}>
                    <h3 className={styles.panelName}>Leslie Iwerks</h3>
                    <p className={styles.panelRole}>Film Maker &amp; Moderator</p>
                  </div>
                </a>
              </AnimatedComponent>
              
              <AnimatedComponent direction='right' delay={0.2}>
                <a href="https://en.m.wikipedia.org/wiki/Floyd_Norman" target="_blank" rel="noopener noreferrer" className={styles.panelLink}>
                  <div className={styles.panelMember}>
                    <h3 className={styles.panelName}>Floyd Norman</h3>
                    <p className={styles.panelRole}>Storyteller &amp; Animator</p>
                  </div>
                </a>
              </AnimatedComponent>
              
              <AnimatedComponent direction='left' delay={0.3}>
                <a href="https://hamiltonmusical.fandom.com/wiki/Isaiah_Johnson" target="_blank" rel="noopener noreferrer" className={styles.panelLink}>
                  <div className={styles.panelMember}>
                    <h3 className={styles.panelName}>Isaiah Johnson</h3>
                    <p className={styles.panelRole}>Actor, Musician &amp; Educator</p>
                  </div>
                </a>
              </AnimatedComponent>
              
              <AnimatedComponent direction='right' delay={0.4}>
                <a href="https://en.wikipedia.org/wiki/Kelsey_Mann" target="_blank" rel="noopener noreferrer" className={styles.panelLink}>
                  <div className={styles.panelMember}>
                    <h3 className={styles.panelName}>Kelsey Mann</h3>
                    <p className={styles.panelRole}>Director, Inside Out 2</p>
                  </div>
                </a>
              </AnimatedComponent>
            </div>
          </AnimatedComponent>
        </section>

        <section className={styles.panelSection}>
          <AnimatedComponent direction='top'>
            <h2 className={styles.sectionTitle}>music</h2>
            <div className={styles.panelGrid}>
              <AnimatedComponent direction='left' delay={0.1}>
                <a href="https://www.alexmandelmusic.com/" target="_blank" rel="noopener noreferrer" className={styles.panelLink}>
                  <div className={styles.panelMember}>
                    <h3 className={styles.panelName}>Alex Mandel</h3>
                    <p className={styles.panelRole}>Songwriter &amp; Composer, Pixar&apos;s Brave, The Inventor</p>
                  </div>
                </a>
              </AnimatedComponent>
              
              <AnimatedComponent direction='right' delay={0.2}>
                <a href="https://hamiltonmusical.fandom.com/wiki/Isaiah_Johnson" target="_blank" rel="noopener noreferrer" className={styles.panelLink}>
                  <div className={styles.panelMember}>
                    <h3 className={styles.panelName}>Isaiah Johnson</h3>
                    <p className={styles.panelRole}>Actor &amp; Singer, Hamilton</p>
                  </div>
                </a>
              </AnimatedComponent>
              
              <AnimatedComponent direction='left' delay={0.3}>
                <a href="https://www.pianocinema.com/" target="_blank" rel="noopener noreferrer" className={styles.panelLink}>
                  <div className={styles.panelMember}>
                    <h3 className={styles.panelName}>Harold O&apos;Neal</h3>
                    <p className={styles.panelRole}>Special Music Guest &amp; Director</p>
                  </div>
                </a>
              </AnimatedComponent>
              
              <AnimatedComponent direction='right' delay={0.4}>
                <a href="https://www.justinlevitt.com/" target="_blank" rel="noopener noreferrer" className={styles.panelLink}>
                  <div className={styles.panelMember}>
                    <h3 className={styles.panelName}>Justin Levitt</h3>
                    <p className={styles.panelRole}>Composer</p>
                  </div>
                </a>
              </AnimatedComponent>

              <AnimatedComponent direction='left' delay={0.4}>
                <a href="https://pixar.fandom.com/wiki/James_Ford_Murphy" target="_blank" rel="noopener noreferrer" className={styles.panelLink}>
                  <div className={styles.panelMember}>
                    <h3 className={styles.panelName}>Jim Murphy</h3>
                    <p className={styles.panelRole}>Director, Lava</p>
                  </div>
                </a>
              </AnimatedComponent>
              
              <AnimatedComponent direction='right' delay={0.4}>
                <a href="https://www.instagram.com/dakilaband/" target="_blank" rel="noopener noreferrer" className={styles.panelLink}>
                  <div className={styles.panelMember}>
                    <h3 className={styles.panelName}>Dave Bustamante &amp; Bobby Santos</h3>
                    <p className={styles.panelRole}>Music Duo</p>
                  </div>
                </a>
              </AnimatedComponent>
            </div>
            
            <div className={styles.centeredLastItem}>
              <AnimatedComponent direction='bottom' delay={0.4}>
                <div className={`${styles.panelMember} ${styles.nonClickable}`}>
                  <h3 className={styles.panelName}>Pixar &amp; Mixed Musicians</h3>
                  <p className={styles.panelRole}>Collection of Talented Musicians</p>
                </div>
              </AnimatedComponent>
            </div>
          </AnimatedComponent>
        </section>

        <section className={styles.panelSection}>
          <AnimatedComponent direction='top'>
            <h2 className={styles.sectionTitle}>charities supported</h2>
            <div className={styles.panelGrid}>
              <AnimatedComponent direction='left' delay={0.1}>
                <a href="https://www.sothebys.com/en/buy/auction/2025/animaid-the-art-of-animation?locale=en&cmp=oth7000203722&lotFilter=AllLots" target="_blank" rel="noopener noreferrer" className={styles.panelLink}>
                  <div className={styles.panelMember}>
                    <h3 className={styles.panelName}>AnimAid</h3>
                    <p className={styles.panelRole}>Supporting artists that lost their homes in LA fires</p>
                  </div>
                </a>
              </AnimatedComponent>
              
              <AnimatedComponent direction='right' delay={0.2}>
                <a href="https://givingtogether.ucsf.edu/fundraiser/3339955" target="_blank" rel="noopener noreferrer" className={styles.panelLink}>
                  <div className={styles.panelMember}>
                    <h3 className={styles.panelName}>Oakland and Louisville Children&apos;s Hospitals</h3>
                    <p className={styles.panelRole}>Healthcare support for children in need</p>
                  </div>
                </a>
              </AnimatedComponent>
              
              <AnimatedComponent direction='left' delay={0.3}>
                <a href="https://www.musicforlifefound.org/home.html" target="_blank" rel="noopener noreferrer" className={styles.panelLink}>
                  <div className={styles.panelMember}>
                    <h3 className={styles.panelName}>Music for Life</h3>
                    <p className={styles.panelRole}>Providing ukuleles to libraries in Hawaii</p>
                  </div>
                </a>
              </AnimatedComponent>
              
              <AnimatedComponent direction='right' delay={0.4}>
                <a href="https://www.visionc.org/" target="_blank" rel="noopener noreferrer" className={styles.panelLink}>
                  <div className={styles.panelMember}>
                    <h3 className={styles.panelName}>VisionC</h3>
                    <p className={styles.panelRole}>Festus Ezeli Basketball camps</p>
                  </div>
                </a>
              </AnimatedComponent>
              
              <AnimatedComponent direction='left' delay={0.5}>
                <a href="https://www.louisvilleacademyofmusic.org/" target="_blank" rel="noopener noreferrer" className={styles.panelLink}>
                  <div className={styles.panelMember}>
                    <h3 className={styles.panelName}>Louisville Academy of Music</h3>
                    <p className={styles.panelRole}>Music education and opportunities</p>
                  </div>
                </a>
              </AnimatedComponent>
              
              <AnimatedComponent direction='right' delay={0.6}>
                <a href="https://www.fredminnick.com/2021/09/01/freddies-old-fashioned-soda-makes-donation-to-refurbish-green-hill-cemetery/" target="_blank" rel="noopener noreferrer" className={styles.panelLink}>
                  <div className={styles.panelMember}>
                    <h3 className={styles.panelName}>Historical Restoration Project</h3>
                    <p className={styles.panelRole}>Social Good initiative led by Freddie Johnson</p>
                  </div>
                </a>
              </AnimatedComponent>
            </div>
            
            <div className={styles.centeredLastItem}>
              <AnimatedComponent direction='bottom' delay={0.7}>
                <a href="https://www.boomersbuddies.com/" target="_blank" rel="noopener noreferrer" className={styles.panelLink}>
                  <div className={styles.panelMember}>
                    <h3 className={styles.panelName}>Boomer&apos;s Buddies</h3>
                    <p className={styles.panelRole}>Animal rescue helping vulnerable pets find forever homes</p>
                  </div>
                </a>
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
                logoWidth={180}
                logoHeight={120}
                fadeEdgeColor="#fff"
                dataSource="wineries"
            />
        </section>
        
        <section className={styles.panelSection}>
          <AnimatedComponent direction='top'>
            <h2 className={styles.sectionTitle}>featured chocolatiers</h2>
          </AnimatedComponent>
            <LogoMarquee 
                speed={100}
                pauseOnHover={true}
                gradientColor="transparent"
                gradientWidth={0}
                logoWidth={180}
                logoHeight={120}
                fadeEdgeColor="#fff"
                dataSource="chocolatiers"
            />
        </section>
        
        <section className={styles.panelSection}>
          <AnimatedComponent direction='top'>
            <h2 className={styles.sectionTitle}>invited distilleries</h2>
          </AnimatedComponent>
            <LogoMarquee 
                speed={100}
                pauseOnHover={true}
                gradientColor="transparent"
                gradientWidth={0}
                logoWidth={180}
                logoHeight={120}
                fadeEdgeColor="#fff"
                dataSource="distilleries"
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