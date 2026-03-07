import toothbrushAdult from '../../assets/dentalCare/TB 3-min.jpg';
import toothbrushKids from '../../assets/dentalCare/TB 2-min.jpg';
import tongueCleanerImage from '../../assets/dentalCare/bamboo-tongue-cleaner-.jpeg';
import neemCombImage from '../../assets/comb/Neem Comb-min.jpg';
import bambooCombImage from '../../assets/comb/H&B Comb.jpg';
import paddleBrushImage from '../../assets/comb/Brush 2.jpg';
import razorImage from '../../assets/razor/P1030998-min.jpg';
import bambooStrawImage from '../../assets/straw/STRAWS-min.jpg';
import coconutStrawImage from '../../assets/straw/coconut-leaf-straw.jpeg';
import seedPenImage from '../../assets/penPencil/plantable-seed-pen.jpg';
import seedPencilImage from '../../assets/penPencil/plantable-seed-penciljpg.jpg';
import hospitalityImage from '../../assets/HotelAmenities.webp';
import dentalKitImage from '../../assets/dentalCare/dentalKit.jpg';
import corporateGiftingImage from '../../assets/corporateGifting.webp';
import logoImage from '../../assets/LogoColor.png';

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
  category: CatalogueCategory;
  tags: string[];
};

const sharedBamboo = ['Eco-friendly', 'Custom branding'];

const rawCatalogueProducts: CatalogueProduct[] = [
  {
    slug: 'softBristleToothbrush',
    name: 'S Curve Charcoal Adult Bamboo Toothbrush',
    description:
      'Adult bamboo toothbrush from the catalogue, designed for daily oral care with plant-based charcoal bristles.',
    images: [toothbrushAdult],
    keyFeatures: [
      'Size: 19 cm',
      'Material: Bamboo handle',
      'Bristle dots: 42',
      'Plant-based bristles',
    ],
    category: 'Personal Care',
    tags: ['Toothbrush', 'Adult', ...sharedBamboo],
  },
  {
    slug: 'bambooToothbrush',
    name: 'C Curve Charcoal Kids Bamboo Toothbrush',
    description:
      'Kids bamboo toothbrush variant with plant-based charcoal bristles and compact grip.',
    images: [toothbrushKids],
    keyFeatures: [
      'Size: 13.5 cm',
      'Material: Bamboo handle',
      'Bristle dots: 38',
      'Plant-based bristles',
    ],
    category: 'Personal Care',
    tags: ['Toothbrush', 'Kids', ...sharedBamboo],
  },
  {
    slug: 'tongueCleaner',
    name: 'Bamboo Tongue Cleaner',
    description:
      'A reusable bamboo tongue cleaner for everyday oral hygiene and plastic reduction.',
    images: [tongueCleanerImage],
    keyFeatures: ['Size: 13 cm x 0.7 cm', 'Material: Bamboo', 'Lightweight', 'Reusable'],
    category: 'Personal Care',
    tags: ['Oral care', ...sharedBamboo],
  },
  {
    slug: 'comb',
    name: 'Handle Neem Comb',
    description:
      'Neem comb for regular grooming with smooth teeth for comfortable detangling.',
    images: [neemCombImage],
    keyFeatures: ['Size: 19 cm x 5 cm', 'Material: Neem', 'Daily grooming', 'Travel-ready'],
    category: 'Personal Care',
    tags: ['Neem comb', 'Hair care', ...sharedBamboo],
  },
  {
    slug: 'beardComb',
    name: 'Beard Neem Comb',
    description:
      'Compact beard comb option from the catalogue for short hair and beard grooming.',
    images: [bambooCombImage],
    keyFeatures: ['Beard-focused design', 'Compact form factor', 'Material: Neem/Bamboo options'],
    category: 'Personal Care',
    tags: ['Beard care', 'Pocket-friendly', ...sharedBamboo],
  },
  {
    slug: 'pocketComb',
    name: 'Pocket Neem Comb',
    description:
      'Pocket-sized neem comb for quick grooming during travel and hospitality use.',
    images: [neemCombImage],
    keyFeatures: ['Size: 13 cm x 3 cm', 'Material: Neem', 'Portable', 'Daily-use'],
    category: 'Personal Care',
    tags: ['Pocket comb', 'Travel', ...sharedBamboo],
  },
  {
    slug: 'bambooPocketComb',
    name: 'Bamboo Pocket Comb',
    description: 'Pocket comb in bamboo for premium sustainable grooming kits.',
    images: [bambooCombImage],
    keyFeatures: ['Size: 13 cm x 3 cm', 'Material: Bamboo', 'Portable', 'Gifting-ready'],
    category: 'Personal Care',
    tags: ['Pocket comb', ...sharedBamboo],
  },
  {
    slug: 'beardDComb',
    name: 'Beard D Comb',
    description: 'D-shape beard comb variant from the neem comb collection.',
    images: [bambooCombImage],
    keyFeatures: ['Size: 9 cm x 6 cm', 'Material: Neem', 'Short beard styling', 'Ergonomic hold'],
    category: 'Personal Care',
    tags: ['Beard comb', ...sharedBamboo],
  },
  {
    slug: 'beardUComb',
    name: 'Beard U Comb',
    description: 'U-shape beard comb variant built for controlled grooming.',
    images: [bambooCombImage],
    keyFeatures: ['Size: 7 cm x 6 cm', 'Material: Neem', 'Compact', 'Smooth finish'],
    category: 'Personal Care',
    tags: ['Beard comb', ...sharedBamboo],
  },
  {
    slug: 'liceComb',
    name: 'Lice Comb',
    description:
      'Fine-tooth neem lice comb, designed for precise and gentle scalp grooming.',
    images: [neemCombImage],
    keyFeatures: ['Size: 10 cm x 7 cm', 'Material: Neem', 'Fine-tooth design', 'Reusable'],
    category: 'Personal Care',
    tags: ['Fine-tooth', 'Neem comb', ...sharedBamboo],
  },
  {
    slug: 'ovalPaddleBrush',
    name: 'Oval Shape Paddle Brush',
    description: 'Bamboo paddle hair brush for everyday detangling and styling.',
    images: [paddleBrushImage],
    keyFeatures: ['Size: 24 cm x 8 cm', 'Material: Bamboo', 'Gentle scalp feel', 'Durable build'],
    category: 'Personal Care',
    tags: ['Hair brush', 'Paddle brush', ...sharedBamboo],
  },
  {
    slug: 'bigPaddleBrush',
    name: 'Big Size Paddle Brush',
    description: 'Larger paddle brush variant for thick and longer hair.',
    images: [paddleBrushImage],
    keyFeatures: ['Size: 25 cm x 8.5 cm', 'Material: Bamboo', 'Wide brushing area', 'Daily-use'],
    category: 'Personal Care',
    tags: ['Hair brush', 'Paddle brush', ...sharedBamboo],
  },
  {
    slug: 'catKidsPaddleBrush',
    name: 'Cat Kids Paddle Brush',
    description: 'Kids paddle brush variant with compact dimensions and easy grip.',
    images: [paddleBrushImage],
    keyFeatures: ['Size: 15 cm x 7 cm', 'Material: Bamboo', 'Kids-friendly', 'Lightweight'],
    category: 'Personal Care',
    tags: ['Kids', 'Hair brush', ...sharedBamboo],
  },
  {
    slug: 'midWhitePaddleBrush',
    name: 'Mid White Paddle Brush',
    description: 'Mid-size bamboo paddle brush for routine grooming needs.',
    images: [paddleBrushImage],
    keyFeatures: ['Size: 22 cm x 6.5 cm', 'Material: Bamboo', 'Balanced size', 'Smooth pins'],
    category: 'Personal Care',
    tags: ['Hair brush', ...sharedBamboo],
  },
  {
    slug: 'razor',
    name: 'Wooden Shaving Razor',
    description:
      'Wooden shaving razor listed in the catalogue for personal care and hospitality shaving kits.',
    images: [razorImage],
    keyFeatures: ['Size: 13.5 cm', 'Material: Wood', 'Reusable handle', 'Kit-ready'],
    category: 'Personal Care',
    tags: ['Shaving', ...sharedBamboo],
  },
  {
    slug: 'juteLoofah',
    name: 'Jute Loofah',
    description: 'Natural jute loofah for bath and amenity kit usage.',
    images: [hospitalityImage],
    keyFeatures: ['Size: 5 cm x 3 cm', 'Material: Jute', 'Natural texture', 'Amenity friendly'],
    category: 'Personal Care',
    tags: ['Bath care', 'Loofah', ...sharedBamboo],
  },
  {
    slug: 'straw',
    name: 'Bamboo Drinking Straw',
    description:
      'Reusable bamboo drinking straw from the personal care and hospitality sections.',
    images: [bambooStrawImage],
    keyFeatures: ['Size: 20 cm x 0.6 cm', 'Material: Bamboo', 'Reusable', 'Washable'],
    category: 'Personal Care',
    tags: ['Reusable straw', ...sharedBamboo],
  },
  {
    slug: 'coconutStraw',
    name: 'Coconut Drinking Straw',
    description:
      'Coconut-based drinking straw for eco-conscious hospitality and events.',
    images: [coconutStrawImage],
    keyFeatures: ['Size: 20 cm x 0.6 cm', 'Material: Coconut', 'Natural finish', 'Reusable'],
    category: 'Personal Care',
    tags: ['Reusable straw', 'Coconut', ...sharedBamboo],
  },
  {
    slug: 'pen',
    name: 'Bamboo Pen',
    description:
      'Eco-friendly bamboo pen from the stationery section, suitable for gifting and branding.',
    images: [seedPenImage],
    keyFeatures: ['Size: 13.8 cm', 'Material: Bamboo', 'Branding-ready', 'Corporate gifting'],
    category: 'Stationery',
    tags: ['Stationery', 'Corporate gifting', ...sharedBamboo],
  },
  {
    slug: 'pencil',
    name: 'Plantable Seed Pencil',
    description:
      'Plantable seed pencil from the eco-friendly stationery line for schools, brands, and gifting.',
    images: [seedPencilImage],
    keyFeatures: ['Size: 17 cm', 'Material: Paper', 'Plantable tip', 'Eco stationery'],
    category: 'Stationery',
    tags: ['Plantable', 'Stationery', ...sharedBamboo],
  },
  {
    slug: 'plantableSeedPen',
    name: 'Plantable Seed Pen',
    description:
      'Plantable seed pen designed for sustainable campaigns and event gifting.',
    images: [seedPenImage],
    keyFeatures: ['Size: 16 cm', 'Material: Paper', 'Plantable tip', 'Campaign-ready'],
    category: 'Stationery',
    tags: ['Plantable', 'Stationery', ...sharedBamboo],
  },
  {
    slug: 'bambooDiary',
    name: 'Bamboo Diary',
    description:
      'Bamboo diary in A5 size for premium stationery and gifting requirements.',
    images: [corporateGiftingImage],
    keyFeatures: ['Size: A5', 'Material: Bamboo cover', 'Premium look', 'Custom branding'],
    category: 'Stationery',
    tags: ['Diary', 'Corporate gifting', ...sharedBamboo],
  },
  {
    slug: 'bambooDiaryWithLock',
    name: 'Bamboo Diary With Lock',
    description:
      'Premium bamboo diary with lock feature for corporate gifting and custom merchandise.',
    images: [corporateGiftingImage],
    keyFeatures: ['Size: A5', 'Material: Bamboo cover', 'Lock design', 'Gift-ready'],
    category: 'Stationery',
    tags: ['Diary', 'Premium', ...sharedBamboo],
  },
  {
    slug: 'dentalKit',
    name: 'Hospitality Dental Kit',
    description:
      'Hospitality amenity dental kit with bamboo toothbrush and toothpaste, with custom box/pouch options.',
    images: [dentalKitImage, hospitalityImage],
    keyFeatures: [
      'Includes: 1 adult bamboo toothbrush',
      'Includes: 1 x 9 gm toothpaste',
      'Custom box and pouch options',
      'Bulk supply for hotels and clinics',
    ],
    category: 'Hospitality',
    tags: ['Amenity kit', 'Hotels', 'Clinics', ...sharedBamboo],
  },
  {
    slug: 'shavingKit',
    name: 'Hospitality Shaving Kit',
    description:
      'Shaving kit for hospitality programs with wooden razor and gel options.',
    images: [hospitalityImage, razorImage],
    keyFeatures: [
      'Includes: 1 wooden shaving razor',
      'Includes: 1 shaving gel',
      'Gel variants as per requirement',
      'Bulk hotel amenity supply',
    ],
    category: 'Hospitality',
    tags: ['Amenity kit', 'Hotels', 'Bulk order', ...sharedBamboo],
  },
  {
    slug: 'toriLoofah',
    name: 'Tori Loofah',
    description: 'Natural loofah option for hospitality and wellness amenity kits.',
    images: [hospitalityImage],
    keyFeatures: ['Natural fiber loofah', 'Amenity-kit compatible', 'Lightweight', 'Plastic-free'],
    category: 'Hospitality',
    tags: ['Loofah', 'Amenity kit', ...sharedBamboo],
  },
  {
    slug: 'vanityKit',
    name: 'Vanity Kit',
    description:
      'Customizable vanity kit from the hospitality catalogue for premium guest experiences.',
    images: [hospitalityImage],
    keyFeatures: ['Hospitality-ready', 'Custom contents possible', 'Bulk production', 'Branding support'],
    category: 'Hospitality',
    tags: ['Amenity kit', 'Hotels', ...sharedBamboo],
  },
  {
    slug: 'wheatstrawDentalKit',
    name: 'Wheatstraw Dental Kit',
    description:
      'Alternative hospitality dental kit with wheatstraw toothbrush and toothpaste.',
    images: [dentalKitImage],
    keyFeatures: [
      'Includes: 1 adult wheatstraw toothbrush',
      'Includes: 1 x 9 gm toothpaste',
      'Custom packaging available',
      'Bulk order support',
    ],
    category: 'Hospitality',
    tags: ['Wheatstraw', 'Amenity kit', ...sharedBamboo],
  },
  {
    slug: 'bambooWaterBottle',
    name: 'Bamboo Water Bottle',
    description: 'Corporate gifting water bottle option from the bamboo gift range.',
    images: [corporateGiftingImage],
    keyFeatures: ['Corporate gifting', 'Branding-ready', 'Event supply', 'Bulk order support'],
    category: 'Corporate Gifting',
    tags: ['Corporate gifting', 'Events', ...sharedBamboo],
  },
  {
    slug: 'bambooSipper',
    name: 'Bamboo Sipper',
    description: 'Sipper option for brand merchandise and sustainable gift programs.',
    images: [corporateGiftingImage],
    keyFeatures: ['Bulk gifting', 'Logo customization', 'Sustainable material look', 'Event-ready'],
    category: 'Corporate Gifting',
    tags: ['Corporate gifting', 'Merchandise', ...sharedBamboo],
  },
  {
    slug: 'bambooMug',
    name: 'Bamboo Mug',
    description: 'Bamboo mug designed for office gifting and promotional campaigns.',
    images: [corporateGiftingImage],
    keyFeatures: ['Gift-worthy finish', 'Custom branding', 'Bulk procurement', 'Corporate events'],
    category: 'Corporate Gifting',
    tags: ['Corporate gifting', 'Mug', ...sharedBamboo],
  },
  {
    slug: 'bambooCup',
    name: 'Bamboo Cup',
    description: 'Reusable bamboo cup for gifting, promotions, and private events.',
    images: [corporateGiftingImage],
    keyFeatures: ['Reusable cup', 'Branding support', 'Bulk event dispatch', 'Premium look'],
    category: 'Corporate Gifting',
    tags: ['Corporate gifting', 'Cup', ...sharedBamboo],
  },
  {
    slug: 'bambooSpeaker',
    name: 'Bamboo Speaker',
    description: 'Premium bamboo-finish speaker for high-value gifting programs.',
    images: [corporateGiftingImage, logoImage],
    keyFeatures: ['Premium gifting option', 'Corporate campaigns', 'Bulk fulfillment', 'Custom branding support'],
    category: 'Corporate Gifting',
    tags: ['Corporate gifting', 'Premium', ...sharedBamboo],
  },
  {
    slug: 'bambooTravelMug',
    name: 'Bamboo Travel Mug',
    description: 'Travel mug option for employee kits, event gifting, and client hampers.',
    images: [corporateGiftingImage],
    keyFeatures: ['Travel-friendly', 'Branding-ready', 'Corporate and private events', 'Bulk orders'],
    category: 'Corporate Gifting',
    tags: ['Corporate gifting', 'Travel', ...sharedBamboo],
  },
];

export const catalogueProducts: CatalogueProduct[] = rawCatalogueProducts.sort((a, b) =>
  a.name.localeCompare(b.name)
);

export const catalogueCategories: CatalogueCategory[] = [
  'Personal Care',
  'Stationery',
  'Hospitality',
  'Corporate Gifting',
];
