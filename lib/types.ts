export interface User {
  userId: string;
  username: string;
  farcasterProfileUrl?: string;
  bio?: string;
  role: 'host' | 'traveler';
  createdAt: Date;
  avatar?: string;
}

export interface Experience {
  experienceId: string;
  hostId: string;
  title: string;
  description: string;
  location: string;
  category: string;
  price: number;
  maxParticipants: number;
  images: string[];
  availability: Date[];
  createdAt: Date;
  host?: User;
  rating?: number;
  reviewCount?: number;
}

export interface Booking {
  bookingId: string;
  experienceId: string;
  travelerId: string;
  bookingDate: Date;
  attendees: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'refunded';
  experience?: Experience;
  traveler?: User;
}

export interface Review {
  reviewId: string;
  experienceId: string;
  bookingId: string;
  reviewerId: string;
  rating: number;
  comment: string;
  createdAt: Date;
  reviewer?: User;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}
