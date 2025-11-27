export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
}

export enum Page {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  SERVICE_DETAIL = 'service_detail',
  CONTACT = 'contact',
  ADMIN = 'admin',
  NOT_FOUND = '404'
}

export interface Review {
  author: string;
  rating: number;
  text: string;
}
