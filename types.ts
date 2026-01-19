export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}
