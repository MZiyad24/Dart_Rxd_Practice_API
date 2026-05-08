import * as admin from 'firebase-admin';

const db = admin.firestore();

const places = [
  {
    name: 'Pizza Hub',
    type: 'restaurant',
    latitude: 30.0444,
    longitude: 31.2357,
    address: 'Downtown Cairo',
    products: [
      'pizza',
      'burger',
      'pepsi',
      'pasta',
    ],
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591',
  },

  {
    name: 'Cafe Roma',
    type: 'cafe',
    latitude: 30.0500,
    longitude: 31.2400,
    address: 'Zamalek Cairo',
    products: [
      'coffee',
      'latte',
      'cake',
      'croissant',
    ],
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
  },

  {
    name: 'Burger Factory',
    type: 'restaurant',
    latitude: 30.0330,
    longitude: 31.2200,
    address: 'Maadi Cairo',
    products: [
      'burger',
      'fries',
      'cola',
    ],
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
  },

  {
    name: 'Bean House',
    type: 'cafe',
    latitude: 30.0600,
    longitude: 31.2500,
    address: 'Nasr City Cairo',
    products: [
      'espresso',
      'americano',
      'coffee',
      'donut',
    ],
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
  },

  {
    name: 'Italian Corner',
    type: 'restaurant',
    latitude: 30.0700,
    longitude: 31.2600,
    address: 'Heliopolis Cairo',
    products: [
      'pizza',
      'pasta',
      'lasagna',
    ],
    image:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
  },

  {
    name: 'Morning Brew',
    type: 'cafe',
    latitude: 30.0800,
    longitude: 31.2700,
    address: '6th October',
    products: [
      'latte',
      'mocha',
      'tea',
      'cheesecake',
    ],
    image:
      'https://images.unsplash.com/photo-1498804103079-a6351b050096',
  },
];

async function seedPlaces() {
  try {
    for (const place of places) {
      await db.collection('places').add(place);
    }

    console.log('Places seeded successfully');
  } catch (error) {
    console.error('Seeding failed:', error);
  }
}

seedPlaces();