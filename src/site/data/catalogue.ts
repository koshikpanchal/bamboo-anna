import { productDetails } from '../../pages/productDetailPage/productData';

export type CatalogueCategory =
  | 'Dental Care'
  | 'Combs & Grooming'
  | 'Shaving'
  | 'Straws'
  | 'Stationery'
  | 'Other';

export type CatalogueProduct = {
  slug: string;
  name: string;
  description: string;
  images: string[];
  keyFeatures: string[];
  category: CatalogueCategory;
  tags: string[];
};

const categoryFor = (slug: string): CatalogueCategory => {
  switch (slug) {
    case 'softBristleToothbrush':
    case 'bambooToothbrush':
    case 'tongueCleaner':
      return 'Dental Care';
    case 'comb':
    case 'pocketComb':
      return 'Combs & Grooming';
    case 'razor':
      return 'Shaving';
    case 'straw':
      return 'Straws';
    case 'pen':
    case 'pencil':
      return 'Stationery';
    default:
      return 'Other';
  }
};

const tagsFor = (slug: string): string[] => {
  switch (slug) {
    case 'softBristleToothbrush':
      return ['Best seller', 'Sensitive gums'];
    case 'bambooToothbrush':
      return ['Traditional', 'Natural'];
    case 'tongueCleaner':
      return ['Oral care'];
    case 'comb':
      return ['Hair care'];
    case 'pocketComb':
      return ['Travel'];
    case 'razor':
      return ['Replaceable blades'];
    case 'straw':
      return ['Reusable'];
    case 'pen':
    case 'pencil':
      return ['Plantable'];
    default:
      return [];
  }
};

export const catalogueProducts: CatalogueProduct[] = Object.entries(productDetails)
  .map(([slug, details]) => ({
    slug,
    ...details,
    category: categoryFor(slug),
    tags: tagsFor(slug),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

export const catalogueCategories: CatalogueCategory[] = [
  'Dental Care',
  'Combs & Grooming',
  'Shaving',
  'Straws',
  'Stationery',
  'Other',
];
