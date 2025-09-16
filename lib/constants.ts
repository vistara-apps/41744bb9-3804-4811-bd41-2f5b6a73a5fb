export const CATEGORIES = [
  'Culinary',
  'Arts & Crafts',
  'Nature & Outdoors',
  'Culture & History',
  'Music & Performance',
  'Sports & Adventure',
  'Wellness',
  'Photography',
] as const;

export const EXPERIENCE_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  DRAFT: 'draft',
} as const;

export const BOOKING_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const;

export const PAYMENT_STATUS = {
  PENDING: 'pending',
  PAID: 'paid',
  REFUNDED: 'refunded',
} as const;

export const MOCK_EXPERIENCES: Experience[] = [
  {
    experienceId: '1',
    hostId: '1',
    title: 'Authentic Italian Cooking Class',
    description: 'Learn to make fresh pasta and traditional sauces from my nonna\'s recipes in my home kitchen.',
    location: 'Florence, Italy',
    category: 'Culinary',
    price: 85,
    maxParticipants: 6,
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop'
    ],
    availability: [new Date('2024-01-15'), new Date('2024-01-16')],
    createdAt: new Date('2024-01-01'),
    rating: 4.9,
    reviewCount: 23
  },
  {
    experienceId: '2',
    hostId: '2',
    title: 'Hidden Street Art Walking Tour',
    description: 'Discover the underground art scene and meet local artists in the vibrant neighborhoods of the city.',
    location: 'Berlin, Germany',
    category: 'Arts & Crafts',
    price: 35,
    maxParticipants: 12,
    images: [
      'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
    ],
    availability: [new Date('2024-01-17'), new Date('2024-01-18')],
    createdAt: new Date('2024-01-02'),
    rating: 4.7,
    reviewCount: 41
  },
  {
    experienceId: '3',
    hostId: '3',
    title: 'Traditional Pottery Workshop',
    description: 'Create your own ceramic pieces using ancient techniques passed down through generations.',
    location: 'Kyoto, Japan',
    category: 'Arts & Crafts',
    price: 120,
    maxParticipants: 8,
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=600&fit=crop'
    ],
    availability: [new Date('2024-01-19'), new Date('2024-01-20')],
    createdAt: new Date('2024-01-03'),
    rating: 4.8,
    reviewCount: 15
  }
];
