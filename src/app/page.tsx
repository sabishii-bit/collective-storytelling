import Banner from "@/components/Banner/Banner";
import About from "@/components/About/About";
import CopyrightDisclaimer from "@/components/CopyrightDisclaimer/CopyrightDisclaimer";
import ImageSlideshow from "@/components/ImageSlideshow/ImageSlideshow";
import ContactInfo from "@/components/ContactInfo/ContactInfo";

export default function HomePage() {
  const slideshowImages = [
    {
      src: '/assets/img/EventPhoto1.jpg',
      alt: 'Community members collaborating on a storytelling project',
    },
    {
      src: '/assets/img/EventPhoto2.jpg',
      alt: 'Group brainstorming session',
    },
    {
      src: '/assets/img/EventPhoto10.jpg',
      alt: 'Community gathering',
    },
    {
      src: '/assets/img/EventPhoto4.jpg',
      alt: 'Cultural celebration',
    },
    {
      src: '/assets/img/EventPhoto5.jpg',
      alt: 'Story recording session',
    },
    {
      src: '/assets/img/EventPhoto6.jpg',
      alt: 'Community workshop',
    },
    {
      src: '/assets/img/EventPhoto7.jpg',
      alt: 'Community workshop',
    },
    {
      src: '/assets/img/EventPhoto8.jpg',
      alt: 'Community workshop',
    },
    {
      src: '/assets/img/EventPhoto11.jpg',
      alt: 'Community workshop',
    }
  ];

  return (
    <>
      <Banner />
      <About />
      <div style={{ padding: '40px 0' }}>
        <ImageSlideshow 
          images={slideshowImages} 
          interval={6000}
          showControls={true}
          showIndicators={true}
          autoPlay={true}
        />
      </div>
      <ContactInfo />
      <CopyrightDisclaimer />
    </>
  );
}
