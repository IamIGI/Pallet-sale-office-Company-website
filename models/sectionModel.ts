export enum Sections {
  AboutUs = 'aboutUs',
  Offer = 'offer',
  ContactUs = 'contactUs',
}

export interface SectionModel {
  section: Sections;
  title: string;
  excerpt: string;
  description: string;
  tilesText: string[];
}
