import Banner from "@/components/Banner/Banner";
import About from "@/components/About/About";
import CopyrightDisclaimer from "@/components/CopyrightDisclaimer/CopyrightDisclaimer";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function HomePage() {
  return (
    <>
      <Banner />
      <About />
      <ContactForm />
      <CopyrightDisclaimer />
    </>
  );
}
