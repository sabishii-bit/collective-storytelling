import Banner from "@/components/Banner/Banner";
import About from "@/components/About/About";
import CopyrightDisclaimer from "@/components/CopyrightDisclaimer/CopyrightDisclaimer";
import ContactForm from "@/components/ContactForm/ContactForm";
import ImageSlideshow from "@/components/ImageSlideshow/ImageSlideshow";
import ContactInfo from "@/components/ContactInfo/ContactInfo";

export default function HomePage() {
  const slideshowImages = [
    {
      src: '/assets/img/stock1.webp',
      alt: 'Community members collaborating on a storytelling project',
    },
    {
      src: '/assets/img/stock2.webp',
      alt: 'Group brainstorming session',
    },
    {
      src: '/assets/img/stock3.webp',
      alt: 'Community gathering',
    },
    {
      src: '/assets/img/stock4.webp',
      alt: 'Cultural celebration',
    },
    {
      src: '/assets/img/stock5.webp',
      alt: 'Story recording session',
    },
    {
      src: '/assets/img/stock6.webp',
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
