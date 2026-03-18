import toothbrushImage from '../../assets/otherPhotos/drivePhotos/toothBrush.jpg';
import toothbrushImage2 from '../../assets/otherPhotos/drivePhotos/toothBrush2.jpg';
import toothbrushImage3 from '../../assets/otherPhotos/drivePhotos/toothBrush3.jpg';
import toothbrushImage4 from '../../assets/otherPhotos/drivePhotos/toothBrush4.jpg';
import DComb from '../../assets/otherPhotos/drivePhotos/UComb.jpg';
import PinTailComb from '../../assets/otherPhotos/drivePhotos/PinTailComb.jpg';
import PocketComb from '../../assets/otherPhotos/drivePhotos/PocketComb.jpg';
import UComb from '../../assets/otherPhotos/drivePhotos/UComb2.jpg';
import Combs from '../../assets/comb/P1040125-min.png';
import paddleBrushImage from '../../assets/otherPhotos/drivePhotos/Comb 1.jpg';
import paddleBrushImage2 from '../../assets/comb/catPaddle2.png';
import razorImage from '../../assets/razor/P1030998-min.jpg';
import razorImage2 from '../../assets/otherPhotos/drivePhotos/grooming.jpg';
import tongueCleanerImage from '../../assets/dentalCare/bamboo-tongue-cleaner-.jpeg';
import tongueCleanerImage2 from '../../assets/otherPhotos/drivePhotos/ToungueCleaner.jpg';
import bambooStrawImage from '../../assets/otherPhotos/drivePhotos/Straws.jpg';
import Straws2 from '../../assets/eco-friendly-environment-bamboo-tube-straws.jpg';
import coconutStrawImage from '../../assets/straw/coconut-leaf-straw.jpeg';
import bambooPenImage from '../../assets/penPencil/plantable-seed-pen.jpg';
import bambooPenImage2 from '../../assets/penPencil/Pen.png';
import dentalKitImage from '../../assets/dentalCare/dentalKit.jpg';
import dentalKitImage1 from '../../assets/dentalCare/dentalKit1.jpg';
import dentalKitImage2 from '../../assets/dentalCare/dentalKit2.avif';
import dentalKitImage3 from '../../assets/dentalCare/dentalKit3.jpg';
import shaving1 from '../../assets/shavingKit/shaving1.jpg';
import shaving2 from '../../assets/shavingKit/shaving2.jpg';
import shaving3 from '../../assets/shavingKit/shaving3.webp';
import loofah from '../../assets/loofah/loofah.jpg';
import loofah2 from '../../assets/loofah/loofah2.jpg';
import slipper from '../../assets/slippers/slippers1.jpg';
import slipper2 from '../../assets/slippers/slippers2.jpg';
import bottle from '../../assets/bottles/bottle1.jpg';
import sipper from '../../assets/bottles/sipper.jpg';
import mug from '../../assets/bottles/mug.jpg';
import cup from '../../assets/bottles/cup.jpg';
import diary from '../../assets/diary/diary1.jpg';
import diary2 from '../../assets/diary/diary2.webp';
import diary3 from '../../assets/diary/diary3.jpeg';
import giftingImage from '../../assets/bamboo-products.jpg';
import speaker from '../../assets/speaker/speaker.jpg';

export type CatalogueCategory =
  | 'Personal Care'
  | 'Stationery'
  | 'Hospitality'
  | 'Corporate Gifting';

export type CatalogueProduct = {
  slug: string;
  name: string;
  description: string;
  images: string[];
  keyFeatures: string[];
  category: CatalogueCategory[];
  tags: string[];
};

export const catalogueProducts: CatalogueProduct[] = [
  {
    slug: 'toothbrush',
    name: 'Toothbrush',
    description:
      'Daily-use bamboo toothbrush crafted for hotels, wellness kits, and conscious retail shelves.',
    images: [
      toothbrushImage,
      toothbrushImage2,
      toothbrushImage3,
      toothbrushImage4,
    ],
    keyFeatures: [
      'Smooth bamboo handle',
      'Lightweight grip',
      'Travel friendly',
      'Branding support',
    ],
    category: ['Personal Care'],
    tags: ['Oral care'],
  },
  {
    slug: 'razor',
    name: 'Razor',
    description:
      'Reusable wooden-handle razor made for hospitality shaving kits and sustainable grooming lines.',
    images: [razorImage, razorImage2],
    keyFeatures: [
      'Reusable handle',
      'Clean shave profile',
      'Compact format',
      'Kit integration ready',
    ],
    category: ['Personal Care'],
    tags: ['Shaving'],
  },
  {
    slug: 'tongue-cleaner',
    name: 'Tongue Cleaner',
    description:
      'Reusable bamboo tongue cleaner suitable for oral-care routines and hotel dental packs.',
    images: [tongueCleanerImage, tongueCleanerImage2, dentalKitImage],
    keyFeatures: [
      'Smooth edge design',
      'Reusable product',
      'Compact and light',
      'Hygienic daily use',
    ],
    category: ['Personal Care'],
    tags: ['Oral care'],
  },
  {
    slug: 'dental-kit-hospitality',
    name: 'Dental Kit',
    description:
      'Hospitality dental kit that combines oral-care basics in a clean, guest-ready format.',
    images: [dentalKitImage3, dentalKitImage1, dentalKitImage2],
    keyFeatures: [
      'Guest amenity use',
      'Compact kit format',
      'Custom pack options',
      'Hotel supply friendly',
    ],
    category: ['Hospitality'],
    tags: ['Amenity kit'],
  },
  {
    slug: 'shaving-kit-hospitality',
    name: 'Shaving Kit',
    description:
      'Ready-to-place shaving kit for hotel rooms, travel stays, and clinic recovery packs.',
    images: [shaving1, shaving2, shaving3],
    keyFeatures: [
      'Includes shaving essentials',
      'Compact amenity format',
      'Bulk hospitality supply',
      'Label customization',
    ],
    category: ['Hospitality'],
    tags: ['Amenity kit'],
  },
  {
    slug: 'neem-combs-classic',
    name: 'Wooden Combs',
    description:
      'Classic neem comb option for plastic-free grooming kits and branded amenity supplies. Comes in many variants like Hadle, Lilly, Pin Tail, Shampoo, Beard, Lice, etc.',
    images: [DComb, UComb, PinTailComb, PocketComb, Combs],
    keyFeatures: [
      'Natural neem wood',
      'Fine and wide teeth mix',
      'Daily grooming',
      'Easy to clean',
    ],
    category: ['Personal Care', 'Hospitality'],
    tags: ['Hair care'],
  },
  {
    slug: 'paddle-hair-brushes',
    name: 'Paddle Hair Brushes',
    description:
      'Bamboo paddle brushes designed for gentle detangling and curated personal-care hampers.',
    images: [paddleBrushImage, paddleBrushImage2],
    keyFeatures: [
      'Wide brushing surface',
      'Soft scalp feel',
      'Long-life build',
      'Giftable design',
    ],
    category: ['Personal Care', 'Hospitality'],
    tags: ['Hair care'],
  },
  {
    slug: 'loofahs',
    name: 'Loofahs',
    description:
      'Natural jute/tori loofah option for bath essentials, guest amenity baskets, and wellness bundles.',
    images: [loofah, loofah2],
    keyFeatures: [
      'Natural fiber texture',
      'Body exfoliation use',
      'Quick drying',
      'Plastic-free choice',
    ],
    category: ['Personal Care', 'Hospitality'],
    tags: ['Bath care'],
  },
  {
    slug: 'eco-friendly-straws',
    name: 'Eco Friendly Straws',
    description:
      'Reusable bamboo/coconut drinking straw for cafes, events, and low-waste hospitality experiences.',
    images: [bambooStrawImage, Straws2, coconutStrawImage],
    keyFeatures: [
      'Reusable straw',
      'Natural bamboo/coconut finish',
      'Washable',
      'Event-ready',
    ],
    category: ['Personal Care', 'Hospitality'],
    tags: ['Reusable straw'],
  },
  {
    slug: 'bathroom-slipper',
    name: 'Bathroom Slipper',
    description:
      'Eco-friendly jute/terry bathroom slipper perfect for hotel guest amenities, spa centers, and wellness retreat packages.',
    images: [slipper, slipper2],
    keyFeatures: [
      'Natural jute/terry material',
      'Durable and slip-resistant',
      'Guest comfort friendly',
      'Easy to maintain',
    ],
    category: ['Hospitality'],
    tags: ['Footwear'],
  },
  {
    slug: 'bamboo-water-bottle',
    name: 'Bamboo Water Bottle',
    description:
      'Bamboo water bottle for corporate giveaways, event kits, and employee onboarding packs.',
    images: [bottle, giftingImage],
    keyFeatures: [
      'Premium gifting appeal',
      'Refill-friendly use',
      'Logo branding support',
      'Bulk order execution',
    ],
    category: ['Corporate Gifting'],
    tags: ['Corporate gifting'],
  },
  {
    slug: 'bamboo-sipper',
    name: 'Bamboo Sipper',
    description:
      'Bamboo sipper built for office desks, event welcome kits, and repeat brand recall.',
    images: [sipper],
    keyFeatures: [
      'Daily carry use',
      'Gift campaign fit',
      'Custom logo option',
      'Event dispatch ready',
    ],
    category: ['Corporate Gifting'],
    tags: ['Corporate gifting'],
  },
  {
    slug: 'bamboo-cup-classic',
    name: 'Bamboo Travel Mug',
    description:
      'Classic bamboo mug for conference kits, client hampers, and hospitality gifting.',
    images: [mug],
    keyFeatures: [
      'Reusable drinkware',
      'Smooth finish',
      'Bulk gifting support',
      'Custom branding',
    ],
    category: ['Corporate Gifting'],
    tags: ['Corporate gifting'],
  },
  {
    slug: 'bamboo-cup-premium',
    name: 'Bamboo Cup',
    description:
      'Premium bamboo cup variant designed for high-value campaigns and festive corporate packs.',
    images: [cup],
    keyFeatures: [
      'Premium visual style',
      'Reusable format',
      'Campaign-ready packaging',
      'Bulk logistics support',
    ],
    category: ['Corporate Gifting'],
    tags: ['Corporate gifting'],
  },
  {
    slug: 'bamboo-pen-stationery',
    name: 'Bamboo Pen',
    description:
      'Bamboo pen for events, onboarding kits, and conscious stationery programs.',
    images: [bambooPenImage2, bambooPenImage],
    keyFeatures: [
      'Smooth writing flow',
      'Bamboo barrel look',
      'Logo print ready',
      'Bulk dispatch support',
    ],
    category: ['Stationery', 'Corporate Gifting'],
    tags: ['Stationery'],
  },
  {
    slug: 'bamboo-diary-stationery',
    name: 'Bamboo Diary',
    description:
      'Bamboo cover diary for curated office kits, premium gifting, and executive hampers. Comes in two variants with and without lock.',
    images: [diary, diary2, diary3],
    keyFeatures: [
      'Premium bamboo look',
      'A5 style form factor',
      'Gift-ready presentation',
      'Custom logo option',
    ],
    category: ['Stationery', 'Corporate Gifting'],
    tags: ['Diary'],
  },
  {
    slug: 'bamboo-speaker',
    name: 'Bamboo Speaker',
    description:
      'Bamboo speaker concept for premium campaigns where utility and sustainability go together.',
    images: [speaker],
    keyFeatures: [
      'Premium category product',
      'Brand recall friendly',
      'Festive gifting fit',
      'Custom campaign support',
    ],
    category: ['Corporate Gifting'],
    tags: ['Corporate gifting'],
  },
];

export const catalogueCategories: CatalogueCategory[] = [
  'Personal Care',
  'Stationery',
  'Hospitality',
  'Corporate Gifting',
];
