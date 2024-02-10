import AboutUsSection from '@/components/AboutUsSection/AboutUsSection';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import MainHeadSection from '@/components/MainSection/MainHeadSection/MainHeadSection';
import OfferSection from '@/components/OfferSection/OfferSection';
import sectionsData from '@/assets/sectionsText/offerAndAboutUsSection.json';
import contactUsData from '@/assets/sectionsText/contactUsSection.json';
import {
  ContactUsSectionModel,
  SectionModel,
  Sections,
} from '@/models/sectionModel';

export default async function HomePage() {
  function getSectionData(sectionName: Sections) {
    return (sectionsData as SectionModel[]).find(
      (data) => data.section === sectionName
    )!;
  }

  return (
    <div className="home-page-wrapper">
      <MainHeadSection />
      <div className="home-page-section-wrapper">
        <AboutUsSection data={getSectionData(Sections.AboutUs)} />
        <OfferSection data={getSectionData(Sections.Offer)} />
        <ContactUsSection data={contactUsData as ContactUsSectionModel} />
      </div>
    </div>
  );
}
