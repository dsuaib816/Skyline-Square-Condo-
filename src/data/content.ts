export const communityInfo = {
  name: 'Skyline Square',
  location: '5503 Seminary Road, Falls Church, VA 22041',
  phone: '703-379-3992',
  description: 'Discover Skyline Square — a distinguished residential community in the heart of Northern Virginia.',
  tagline: 'Elevated Living. Timeless Community.',
  buildings: {
    north: {
      name: 'North Building',
      stories: 28,
      units: 423,
    },
    south: {
      name: 'South Building',
      stories: 28,
      units: 423,
    },
  },
  totalUnits: 846,
  totalStories: 28,
};

export const amenities = [
  {
    id: 'pool',
    name: 'Swimming Pool',
    description: 'Seasonal outdoor swimming pool with professional lifeguards',
    icon: 'Waves',
  },
  {
    id: 'fitness',
    name: 'Fitness Center',
    description: 'Fully equipped exercise facilities with modern equipment',
    icon: 'Dumbbell',
  },
  {
    id: 'sauna',
    name: 'Sauna & Steam Room',
    description: 'Luxurious spa facilities for relaxation and wellness',
    icon: 'Wind',
  },
  {
    id: 'rooftop',
    name: 'Rooftop Sundeck',
    description: 'Elevated outdoor space with panoramic views',
    icon: 'Sun',
  },
  {
    id: 'party',
    name: 'Party & Event Rooms',
    description: 'Elegant venues for gatherings and celebrations',
    icon: 'Sparkles',
  },
  {
    id: 'game',
    name: 'Game Room',
    description: 'Billiards, card rooms, and recreational activities',
    icon: 'Gamepad2',
  },
  {
    id: 'library',
    name: 'Library & Reading Room',
    description: 'Quiet space for reading and intellectual pursuits',
    icon: 'BookOpen',
  },
  {
    id: 'concierge',
    name: '24-Hour Concierge',
    description: 'Professional front desk service available around the clock',
    icon: 'Bell',
  },
];

export const news = [
  {
    id: 1,
    title: 'Community Garden Project Announcement',
    date: '2024-10-10',
    category: 'Community',
    excerpt: 'Exciting new green space initiative coming to Skyline Square.',
    image: null,
  },
  {
    id: 2,
    title: 'Annual Residents Meeting - November 15th',
    date: '2024-09-28',
    category: 'Events',
    excerpt: 'Mark your calendars for our annual community meeting.',
    image: null,
  },
  {
    id: 3,
    title: 'Fitness Center Upgrades Complete',
    date: '2024-09-15',
    category: 'Facilities',
    excerpt: 'State-of-the-art equipment now available for all residents.',
    image: null,
  },
];

export const documents = [
  {
    category: 'Bylaws',
    items: [
      { name: 'Master Deed', url: '#' },
      { name: 'Bylaws', url: '#' },
      { name: 'Rules and Regulations', url: '#' },
    ],
  },
  {
    category: 'Financial',
    items: [
      { name: 'Annual Budget', url: '#' },
      { name: 'Financial Statements', url: '#' },
      { name: 'Reserve Study', url: '#' },
    ],
  },
  {
    category: 'Policies',
    items: [
      { name: 'Pet Policy', url: '#' },
      { name: 'Alteration Policy', url: '#' },
      { name: 'Parking Policy', url: '#' },
    ],
  },
];
