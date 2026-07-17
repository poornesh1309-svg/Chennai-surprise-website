export interface Service {
  id: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  iconName: string; // we will map these to Lucide icons dynamically
  colorTheme: 'pink' | 'blue' | 'yellow' | 'purple' | 'mint' | 'peach';
  tag: string;
  image: string;
  priceStart: string;
  whatsIncluded: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  serviceId: string;
  serviceName: string;
  image: string;
  tag: 'photo' | 'video';
  location: string;
  description: string;
  videoUrl?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'booking' | 'customization' | 'locations' | 'logistics';
}

export interface Testimonial {
  id: string;
  name: string;
  location: string; // e.g., "Anna Nagar" or "Adyar"
  quote: string;
  rating: number; // e.g., 5
  avatarSeed: string; // for Dicebear-style cute avatars
  serviceName: string;
}

export interface BookingSubmission {
  id: string;
  customerName: string;
  contactNumber: string;
  email: string;
  eventDate: string;
  serviceId: string;
  customRequirements: string;
  status: 'pending' | 'confirmed';
  createdAt: string;
}
