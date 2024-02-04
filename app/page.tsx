import AboutUsSection from '@/components/AboutUsSection/AboutUsSection';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import MainHeadSection from '@/components/MainSection/MainHeadSection/MainHeadSection';
import OfferSection from '@/components/OfferSection/OfferSection';
import sectionsData from '@/assets/sectionsText/sectionsText.json';
import { SectionModel, Sections } from '@/models/sectionModel';

export default async function HomePage() {
  return (
    <div className="home-page-wrapper">
      <MainHeadSection />
      <div className="home-page-section-wrapper">
        {/* {sectionsData.find((data) => data.section === 'AboutUs')!.section} */}
        <AboutUsSection
          data={
            (sectionsData as SectionModel[]).find(
              (data) => data.section === Sections.AboutUs
            )!
          }
        />
        <OfferSection />
        <ContactUsSection />
      </div>
    </div>
  );
}
