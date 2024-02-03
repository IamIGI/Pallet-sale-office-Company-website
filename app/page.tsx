import AboutUsSection from '@/components/AboutUsSection/AboutUsSection';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import MainHeadSection from '@/components/MainSection/MainHeadSection/MainHeadSection';
import OfferSection from '@/components/OfferSection/OfferSection';

export default function HomePage() {
  return (
    <div className="home-page-wrapper">
      <MainHeadSection />
      <div className="home-page-section-wrapper">
        <AboutUsSection />
        <OfferSection />
        <ContactUsSection />
      </div>
    </div>
  );
}
