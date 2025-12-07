
export enum SectionId {
  HOME = 'home',
  CONCEPT = 'conceito',
  ABOUT = 'sobre',
  SERVICES = 'servicos',
  ENVIRONMENT = 'environment',
  TESTIMONIALS = 'depoimentos',
  FAQ = 'faq',
  CONTACT = 'contato',
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}


