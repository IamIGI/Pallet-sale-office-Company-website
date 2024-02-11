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

export interface ContactUsType {
  type: 'phone' | 'email';
  name: string;
  values: string[];
}

export interface MapLocation {
  name: string;
  lat: number;
  lng: number;
}
export interface ContactUsSectionModel {
  section: string;
  title: string;
  contact: ContactUsType[];
  mapLocations: MapLocation[];
}
