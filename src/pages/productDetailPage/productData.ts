// brushes
import brush from '../../assets/dentalCare/P1030940-min.jpg';
import brush2 from '../../assets/dentalCare/P1040027-min.png';
import brush3 from '../../assets/dentalCare/P1030932-min.png';
import brush4 from '../../assets/dentalCare/P1040052-min.png';

import tongueCleaner from '../../assets/dentalCare/dentalKit.jpg';

// neem brush
import nBrush from '../../assets/dentalCare/TB 3-min.jpg';
import nBrush1 from '../../assets/dentalCare/P1030895-min.png';
import nBrush2 from '../../assets/dentalCare/P1030814-min.png';

//comb
import comb from '../../assets/comb/Brush 2.jpg';
import comb1 from '../../assets/comb/Brush 3.jpg';
import comb2 from '../../assets/comb/P1040084-min.png';
import comb3 from '../../assets/comb/P1040088-min.png';

//beard Comb
import bComb from '../../assets/comb/H&B Comb.jpg';
import bComb1 from '../../assets/comb/H&B Combs.jpg';

//pocketCombs
import pComb from '../../assets/comb/P1040125-min.png';

//straw
import straw from '../../assets/straw/STRAWS-min.jpg';

//razor
import razor from '../../assets/razor/Razor 1.jpg';

//pencil
import pencil from '../../assets/penPencil/plantable-seed-penciljpg.jpg';

//pen
import pen from '../../assets/penPencil/plantable-seed-pen.jpg';

type productDetailsType = {
  name: string;
  description: string;
  images: string[];
  keyFeatures: string[];
};

const productDetails: Record<string, productDetailsType> = {
  softBristleToothbrush: {
    name: 'Soft bristle toothbrush',
    description:
      'Experience gentle and effective oral care with our Soft Bristle Bamboo Toothbrush. Perfect for those with sensitive gums and teeth, this toothbrush combines the benefits of soft bristles and a natural bamboo handle to provide a thorough yet delicate cleaning.',
    images: [brush, brush2, brush3, brush4],
    keyFeatures: [
      'Made from sustainable bamboo',
      'Soft bristles for gentle cleaning',
      'Biodegradable and eco-friendly',
      'Water-resistant handle',
    ],
  },
  bambooToothbrush: {
    name: 'Bamboo toothbrush',
    description:
      'This is what our parents used to do in their young age. Good for TEETHS and SMILE.',
    images: [nBrush2, nBrush, nBrush1],
    keyFeatures: [
      'Made from natural Bamboo',
      'Anti-bacterial properties',
      'Natural and sustainable',
      'Traditional design for effective cleaning',
    ],
  },
  tongueCleaner: {
    name: 'Tongue Cleaner',
    description:
      'Our Bamboo Tongue Cleaner is a sustainable and natural alternative to traditional plastic tongue cleaners. Crafted from high-quality bamboo, it offers an eco-friendly way to maintain oral hygiene while reducing plastic waste.',
    images: [tongueCleaner],
    keyFeatures: [
      ' Eco-Friendly Material: Made from 100% biodegradable and sustainably sourced bamboo, making it a perfect choice for those looking to minimize their environmental footprint.',
      'Gentle Yet Effective: The smooth and sturdy design effectively removes bacteria and debris from the tongue without causing discomfort.',
      'Natural Antibacterial Properties: Bamboo naturally resists bacterial growth, ensuring a cleaner, healthier tool for daily use.',
      'Ergonomic Design: The comfortable grip and lightweight structure make it easy to handle and use, even for those new to tongue cleaning.',
      'Durable and Reusable: Unlike plastic alternatives, our bamboo tongue cleaner is designed to last, reducing the need for frequent replacements.',
    ],
  },
  comb: {
    name: 'Long and short hair Combs',
    description:
      'Our Long Hair Bamboo Comb is thoughtfully crafted to provide the best care for your hair. Ideal for those with long, thick, or curly hair, this comb glides smoothly through your locks, reducing breakage and frizz. Made from 100% natural bamboo, it is not only eco-friendly but also gentle on your scalp, stimulating blood circulation for healthier hair growth.',
    images: [comb, comb1, comb2, comb3],
    keyFeatures: [
      'Perfect for Short Hair: Close-set teeth allow for precise control and styling, making it ideal for short hair, beards, and mustaches.',
      'Sustainable Choice: Made from 100% natural bamboo, this comb is biodegradable and promotes a greener lifestyle.',
      'Smooth & Gentle: The finely polished teeth glide through hair without causing breakage or irritation, ensuring a comfortable grooming experience.',
      'Portable & Lightweight: Its compact size makes it easy to carry in your pocket or bag, perfect for on-the-go touch-ups.',
    ],
  },
  beardComb: {
    name: 'Long and short hair Combs',
    description:
      "Achieve effortless style and precision with our Short Hair Bamboo Comb, tailored for those with shorter haircuts. Its compact design and close-set teeth make it ideal for neat and defined styling, whether you're maintaining a classic look or creating a modern edge. ",
    images: [bComb, bComb1],
    keyFeatures: [
      'Ideal for Short Hair: The close-set teeth provide excellent control and precision, perfect for shaping and maintaining shorter hairstyles.',
      'Sustainable Choice: Crafted from 100% biodegradable bamboo, this comb is a green alternative to traditional plastic combs, helping you reduce your environmental footprint.',
      'Smooth & Gentle: Polished teeth glide through your hair without snagging or pulling, ensuring a comfortable grooming experience.',
      'Versatile & Compact: Its small size makes it easy to carry in your pocket or bag, ideal for quick touch-ups throughout the day.',
      'Anti-Static Properties: Bamboo naturally minimizes static, keeping your hair smooth and free from flyaways.',
    ],
  },
  pocketComb: {
    name: 'Bamboo Pocket Comb',
    description:
      'Elevate your grooming routine with our Bamboo Pocket Comb, the perfect tool for on-the-go styling and maintenance. Designed for portability and convenience, this compact comb is ideal for quick touch-ups and keeping your hair in check wherever you are. Crafted from sustainably sourced bamboo, it offers a natural and eco-friendly alternative to plastic combs.',
    images: [pComb],
    keyFeatures: [
      'Compact & Portable: Its slim, lightweight design fits easily into your pocket or travel bag, making it the perfect grooming companion for any situation.',
      'Versatile Use: Suitable for all hair types and lengths, this comb is perfect for maintaining your hairstyle, whether at home or on the go.',
    ],
  },
  straw: {
    name: 'Bamboo Straw with Cleaning Brush',
    description:
      'Embrace sustainable living with our Bamboo Straw with Cleaning Brush, a stylish and eco-friendly alternative to single-use plastic straws. Perfect for sipping your favorite beverages, this reusable bamboo straw not only reduces waste but also comes with a convenient cleaning brush to ensure your straw stays spotless and hygienic',
    images: [straw],
    keyFeatures: [
      'Durable & Reusable: Built to last, our bamboo straw can be used again and again, making it a practical addition to your daily routine.',
      'Includes Cleaning Brush: Comes with a flexible, stainless steel cleaning brush to make washing easy and thorough, ensuring your straw is always ready for use.',
      'Portable & Convenient: Lightweight and compact, it’s easy to carry in your bag or keep in your kitchen for everyday use.',
    ],
  },
  razor: {
    name: 'Bamboo Razor',
    description:
      'Experience a closer, more sustainable shave with our Bamboo Razor, designed to combine eco-friendly practices with high performance.',
    images: [razor],
    keyFeatures: [
      'Eco-Friendly Design: Crafted from sustainably sourced bamboo, the handle is biodegradable and reduces your reliance on plastic razors.',
      'Ergonomic Handle: The bamboo handle is designed for a comfortable grip, ensuring control and ease of use while you shave.',
      'Replaceable Blades: The razor is designed to accommodate standard, replaceable blades, allowing you to maintain performance without replacing the entire razor.',
    ],
  },
  pencil: {
    name: 'Plantable Seed Pencil',
    description:
      'Discover a new way to write and grow with our innovative Plantable Seed Pencil. Crafted from eco-friendly materials, this unique pencil is embedded with seeds, allowing you to plant it once it’s used up. Each pencil transforms into a source of life and beauty, making it a perfect choice for environmentally conscious individuals who want to leave a positive impact on the planet.',
    images: [pencil],
    keyFeatures: [
      'Eco-Friendly & Sustainable: Made from recycled newspaper and non-toxic materials, this pencil helps reduce waste and supports a greener planet.',
      'Embedded Seeds: Each pencil is infused with a variety of seeds, such as herbs, flowers, or vegetables, allowing you to plant and grow something beautiful or useful after use.',
    ],
  },

  pen: {
    name: 'Plantable Seed Pen',
    description:
      'Revolutionize your writing experience with our Plantable Seed Pen, where sustainability meets functionality. This eco-friendly pen is crafted from recycled materials and embedded with seeds, allowing you to plant it once it’s out of ink. Each pen transforms into a source of life, making it a perfect choice for those who want to combine everyday utility with a commitment to environmental stewardship.',
    images: [pen],
    keyFeatures: [
      'Smooth Writing Experience: Designed for a comfortable grip and smooth writing, it offers the performance of a high-quality pen with the added benefit of sustainability.',
      'Embedded Seeds: Each pencil is infused with a variety of seeds, such as herbs, flowers, or vegetables, allowing you to plant and grow something beautiful or useful after use.',
    ],
  },
};

export { productDetails };
export type { productDetailsType };
