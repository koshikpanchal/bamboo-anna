import './CollectionsPage.scss';
import type { CSSProperties } from 'react';
import brush from '../../../assets/dentalCare/P1030940-min.jpg';
import comb from '../../../assets/comb/H&B Combs.jpg';
import straw from '../../../assets/straw/STRAWS-min.jpg';
import razor from '../../../assets/razor/P1030998-min.jpg';
import pen from '../../../assets/penPencil/plantable-seed-pen.jpg';
import kit from '../../../assets/dentalCare/dentalKit.jpg';
import { Link } from 'react-router-dom';
import Seo from '../../seo/Seo';

const collections = [
  {
    title: 'Dental care essentials',
    description: 'Toothbrushes, tongue cleaners, and travel kits.',
    image: brush,
  },
  {
    title: 'Grooming and combs',
    description: 'Neem combs, brushes, and hair care accessories.',
    image: comb,
  },
  {
    title: 'Hospitality amenities',
    description: 'Guest-ready bamboo amenities for hotels and resorts.',
    image: kit,
  },
  {
    title: 'Shaving and grooming',
    description: 'Bamboo razors and shaving accessories.',
    image: razor,
  },
  {
    title: 'Eco straws',
    description: 'Reusable bamboo and coconut leaf straws.',
    image: straw,
  },
  {
    title: 'Plantable pens',
    description: 'Seed pens and pencils with brand-ready packaging.',
    image: pen,
  },
];

const CollectionsPage = () => {
  return (
    <div className="collections-page">
      <Seo
        title="Bamboo Collections"
        description="Explore curated bamboo collections for dental care, grooming, hospitality amenities, shaving, and plantable stationery."
        keywords={[
          'bamboo collections',
          'bamboo dental care',
          'bamboo grooming',
          'hospitality amenities',
          'bamboo shaving',
          'plantable stationery',
        ]}
        canonicalPath="/collections"
        image="/LogoColor.png"
      />
      <section className="page-hero">
        <div className="page-hero__inner" data-reveal>
          <span className="chip">Collections</span>
          <h1>Bamboo essentials designed for everyday rituals.</h1>
          <p>
            Explore our most requested product categories, ready for retail,
            hospitality, and custom branding.
          </p>
        </div>
      </section>

      <section className="collections-grid section">
        <div className="section__inner">
          <div className="collections-grid__wrap">
            {collections.map((item, index) => (
              <div
                key={item.title}
                className="collections-grid__card"
                data-reveal
                style={{ '--delay': `${index * 0.08}s` } as CSSProperties }
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="collections-cta section" data-reveal>
        <div className="section__inner collections-cta__inner">
          <div>
            <span className="chip">Catalog</span>
            <h2>Need the full catalog?</h2>
            <p>
              We can share detailed specifications, MOQ, and packaging options
              for each product line.
            </p>
          </div>
          <Link to="/contact" className="btn btn--primary">
            Request the catalog
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CollectionsPage;
