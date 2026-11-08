// src/mocks/offers.ts

export type OfferType = 'apartment' | 'room' | 'house' | 'hotel';

export type Host = {
    name: string;
    avatarUrl: string;
    isPro: boolean;
};

export type Offer = {
    id: string;
    title: string;
    type: OfferType;
    price: number;
    rating: number;
    city: string;
    description: string;
    bedrooms: number;
    goods: string[];
    host: Host;
    images: string[];
    maxAdults: number;
    isFavorite: boolean;
    isPremium: boolean;
    previewImage: string;
};

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    previewImage: 'img/apartment-01.jpg',
    isFavorite: false,
    isPremium: true,
    city: 'Amsterdam',
    rating: 4.8,
    description: 'A quiet, cozy, and clean apartment in the very center of Amsterdam. Perfect for couples looking for a comfortable stay with easy access to all major attractions.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Cable TV', 'Washer', 'Coffee machine'],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/room.jpg',
      'img/house.jpg',
      'img/apartment-01.jpg',
    ],
    maxAdults: 2,
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    previewImage: 'img/room.jpg',
    isFavorite: true,
    isPremium: false,
    rating: 3.1,
    city: 'Cologne',
    description: 'Peaceful room in a shared apartment near the city center. Great for solo travelers on a budget.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Heating'],
    host: {
      name: 'Max Power',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
    },
    images: [
      'img/room.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ],
    maxAdults: 1,
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    previewImage: 'img/apartment-02.jpg',
    isFavorite: false,
    isPremium: false,
    rating: 4.5,
    city: 'Amsterdam',
    description: 'Stunning views of the canal from this modern and fully equipped apartment. Enjoy your morning coffee by the window.',
    bedrooms: 2,
    goods: ['Heating', 'Wi-Fi', 'Washer', 'Kitchen', 'Coffee machine', 'Dishwasher', 'Towels'],
    host: {
      name: 'Sophie Laurent',
      avatarUrl: 'img/avatar-sophie.jpg',
      isPro: true,
    },
    images: [
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/room.jpg',
      'img/house.jpg',
    ],
    maxAdults: 4,
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed house',
    type: 'house',
    price: 180,
    previewImage: 'img/apartment-03.jpg',
    isFavorite: false,
    isPremium: true,
    rating: 5.0,
    city: 'Paris',
    description: 'A spacious house perfect for a family vacation in Paris. Features a private garden and modern amenities.',
    bedrooms: 3,
    goods: ['Heating', 'Wi-Fi', 'Washer', 'Towels', 'Fridge', 'Washing machine', 'Dishwasher', 'Cable TV', 'Kitchen'],
    host: {
      name: 'Jean Dupont',
      avatarUrl: 'img/avatar-jean.jpg',
      isPro: true,
    },
    images: [
      'img/apartment-03.jpg',
      'img/house.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/room.jpg',
      'img/house.jpg',
    ],
    maxAdults: 6, // Max 6 adults
  },
];
