import './HomePage.scss';
import '../../../../styles/scroll-animations.css';
import { useLayoutEffect } from 'react';
import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { initHomepageAnimations } from '../../../../scripts/scroll-animations';
import ImpactCounters from '../../components/ImpactCounters';
import Seo from '../../seo/Seo';
import artisanImage from '../../../assets/bambooFarmer.jpg';
import studioImage from '../../../assets/Homepage-image.jpg';
import craftImage from '../../../assets/dentalCare/P1030899-min.jpg';
import collectionDental from '../../../assets/dentalCare/dentalKit.jpg';
import collectionGrooming from '../../../assets/comb/Neem Comb-min.jpg';
import collectionHospitality from '../../../assets/HotelAmenities.webp';
import heroLightBackground from '../../../assets/HotelAmenities.webp';
import heroDarkBackground from '../../../assets/HotelAmenities-dark-theme.png';
import founderImage from '../../../assets/photoGallery/founders.jpg';
import partnerFairmont from '../../../assets/partners/Fairmont_Logo.svg.png';
import partnerIhcl from '../../../assets/partners/indian-hotels-company-ltd-ihcl-1-638.jpg';
import partnerIndianOil from '../../../assets/partners/Indian_Oil_Logo.svg.png';
import partnerNcdc from '../../../assets/partners/NCDCNewlogo.png';
import partnerRamada from '../../../assets/partners/ra1631rede-ramada-logo-ramada-logo-evolution-history-and-meaning.png';
import partnerSandysTower from '../../../assets/partners/SANDYS TOWER-01.png';
import partnerNaturalWash from '../../../assets/partners/the-natural-wash.jpg';
import partnerTjr from '../../../assets/partners/tjr-logo.png';
import PartnersMarquee from '../../components/PartnersMarquee';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

const collections = [
  {
    title: 'Dental care',
    description: 'Toothbrushes, kits, and clean routines.',
    image: collectionDental,
  },
  {
    title: 'Personal grooming',
    description: 'Combs, brushes, and razor essentials.',
    image: collectionGrooming,
  },
  {
    title: 'Hospitality amenities',
    description: 'Guest-ready bamboo kits and travel packs.',
    image: collectionHospitality,
  },
];

const partners = [
  { src: partnerFairmont, alt: 'Fairmont' },
  { src: partnerIhcl, alt: 'IHCL' },
  { src: partnerIndianOil, alt: 'Indian Oil' },
  { src: partnerNcdc, alt: 'NCDC' },
  { src: partnerRamada, alt: 'Ramada' },
  { src: partnerSandysTower, alt: 'Sandys Tower' },
  { src: partnerNaturalWash, alt: 'The Natural Wash' },
  { src: partnerTjr, alt: 'TJR' },
];

const craftGrid = { rows: 3, cols: 4 };
const craftTiles = Array.from(
  { length: craftGrid.rows * craftGrid.cols },
  (_, index) => {
    const row = Math.floor(index / craftGrid.cols);
    const col = index % craftGrid.cols;
    return { index, row, col };
  }
);

const HomePage = () => {
  useLayoutEffect(() => initHomepageAnimations(), []);
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bamboo Anna Studio',
    description:
      'Bamboo Anna Studio crafts modern bamboo essentials with local artisans in Rajasthan, focusing on plastic-free essentials and custom branding.',
    ...(baseUrl
      ? {
          url: baseUrl,
          logo: `${baseUrl}/LogoColor.png`,
        }
      : {
          logo: '/LogoColor.png',
        }),
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Bamboo Anna Studio',
    ...(baseUrl
      ? {
          url: baseUrl,
        }
      : {}),
  };

  return (
    <div className="home" data-page="home">
      <Seo
        title="Bamboo Anna Studio - Modern bamboo essentials"
        description="Modern bamboo essentials crafted with local artisans in Rajasthan. Plastic-free dental care, grooming, hospitality kits, and custom branding."
        keywords={[
          'bamboo essentials',
          'bamboo products',
          'artisan made',
          'plastic free',
          'dental care',
          'hospitality amenities',
          'custom branding',
          'bamboo manufacturer',
          'bamboo supplier',
          'Rajasthan',
        ]}
        image="/LogoColor.png"
        jsonLd={[organizationSchema, websiteSchema]}
      />
      <section className="home-hero" data-anim="hero">
        <div className="hero-sequence" aria-hidden="true">
          <img
            src={heroLightBackground}
            alt=""
            className="hero-sequence__image hero-sequence__image--light"
            loading="eager"
            decoding="async"
          />
          <img
            src={heroDarkBackground}
            alt=""
            className="hero-sequence__image hero-sequence__image--dark"
            loading="eager"
            decoding="async"
          />
          <div className="hero-sequence__shade" aria-hidden="true" />
        </div>

        <div className="section__inner home-hero__inner">
          <div className="home-hero__copy">
            <span className="chip" data-hero="sub">
              Bamboo Anna Studio
            </span>
            <h1 data-hero="title">
              Bamboo Anna Studio - Modern bamboo essentials.
            </h1>
            <p data-hero="sub">
              Crafted with local artisans in Rajasthan for homes, hotels, dental
              clinics, and brands that want a plastic-free upgrade.
            </p>
            <div className="home-hero__actions" data-hero="ctas">
              <Link to="/catalogue" className="btn btn--primary">
                Explore Catalogue
              </Link>
              <Link to="/custom" className="btn btn--ghost">
                Build a Custom Line
              </Link>
              <Link to="/contact" className="btn btn--outline">
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mini-story section" data-anim="pin-story">
        <div className="section__inner mini-story__inner">
          <div className="mini-story__media" data-anim="reveal">
            <img src={artisanImage} alt="Local artisans at work" loading="lazy" />
          </div>
          <div className="mini-story__copy">
            <span className="chip" data-anim="reveal">
              Mini story
            </span>
            <div className="mini-story__stack">
              <h2 data-story="title">Artisan story</h2>
              <p data-story="supporting">
                Every order funds steady work for local artisans and families.
              </p>
            </div>
            <p className="mini-story__fine" data-anim="reveal">
              Every order supports steady income, skills training, and pride of
              craft that stays in local communities. We reinvest in safer tools,
              better finishes, and mentorship so each batch raises the quality
              and confidence of our artisan teams.
            </p>
          </div>
        </div>
      </section>

      <section className="home-about section">
        <div className="section__inner home-about__inner">
          <div className="home-about__copy" data-anim="reveal">
            <span className="chip">About us</span>
            <h2>Built on the belief that small swaps change big systems.</h2>
            <p className="home-about__motto">
              पर्यावरण संरक्षणम् - protecting the environment.
            </p>
            <p>
              CEO &amp; M.D. Mr. Anil Chauhan and Founder Mr. Sawan Vaishnav
              started Bamboo Anna in 2022 to replace daily plastic essentials
              with bamboo alternatives. India uses massive amounts of plastic
              every day, and toothbrushes are one of the most common items that
              end up in landfills within months.
            </p>
            <p>
              Our focus is simple: replace plastic toothbrushes and daily-use
              amenities with eco-friendly bamboo products, and work with local
              partners to grow the movement. Over the last three years we have
              expanded across the Indian market, supporting startups and
              institutions that share the same mission.
            </p>
          </div>
          <div className="home-about__media" data-anim="reveal">
            <img src={founderImage} alt="Bamboo Anna founders" loading="lazy" />
            <div className="home-about__caption">
              Founder Mr. Sawan Vaishnav and CEO &amp; M.D. Mr. Anil Chauhan 
            </div>
          </div>
        </div>
      </section>

      <section
        className="scroll-craft section"
        data-anim="scroll-craft"
        data-rows={craftGrid.rows}
        data-cols={craftGrid.cols}
      >
        <div className="section__inner scroll-craft__inner">
          <div className="scroll-craft__copy">
            <span className="chip" data-anim="reveal">
              Scroll craft
            </span>
            <h2 data-anim="reveal">Bamboo, engineered by nature.</h2>
            <p data-craft-copy="step-1">
              A single product, built from thoughtful details - curve, edge, and
              finish - without plastic.
            </p>
            <p data-craft-copy="step-3">
              Close up, you can see the grain, the polish, and the care behind
              every batch we ship.
            </p>
          </div>

          <div className="scroll-craft__visual" aria-hidden="true">
            <div className="scroll-craft__frame">
              <div
                className="craft-stage"
                data-craft="stage"
                style={
                  {
                    '--rows': craftGrid.rows,
                    '--cols': craftGrid.cols,
                  } as CSSProperties
                }
              >
                {craftTiles.map((tile) => (
                  <div
                    key={tile.index}
                    className="craft-tile"
                    data-craft-part
                    data-row={tile.row}
                    data-col={tile.col}
                    style={{
                      backgroundImage: `url(${craftImage})`,
                      backgroundSize: `${craftGrid.cols * 100}% ${
                        craftGrid.rows * 100
                      }%`,
                      backgroundPosition: `${
                        (tile.col / (craftGrid.cols - 1)) * 100
                      }% ${(tile.row / (craftGrid.rows - 1)) * 100}%`,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="craft-callouts">
              {[
                { label: 'Curve', sub: 'Ergonomic grip' },
                { label: 'Edge', sub: 'Clean shaping' },
                { label: 'Finish', sub: 'Polished by hand' },
              ].map((callout) => (
                <div
                  className="craft-callout"
                  key={callout.label}
                  data-craft-callout
                >
                  <strong>{callout.label}</strong>
                  <span>{callout.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="built-for section">
        <div className="section__inner built-for__inner" data-anim="reveal">
          <span className="chip">Built for brands</span>
          <h2>Custom-ready. Premium-feel. Plastic-free.</h2>
          <p>
            Custom packaging, kit assortments, and consistent finishes - ready for
            hospitality programs, clinics, and gifting teams.
          </p>
        </div>
      </section>

      <section className="pillars section">
        <div className="section__inner">
          <div className="pillars__inner">
            <div className="pillars__lead" data-anim="reveal">
              <span className="chip">Why Bamboo Anna</span>
              <h2>We are not a dropship brand.</h2>
              <p>
                We are a studio: sourcing, crafting, finishing, and delivering
                bamboo essentials with real people, real process, and real
                accountability.
              </p>
              <div
                className="pillars__lead-actions"
                data-anim="reveal"
                style={{ '--delay': '0.08s' } as CSSProperties}
              >
                <Link to="/studio" className="btn btn--ghost">
                  See the studio
                </Link>
                <Link to="/catalogue" className="btn btn--outline">
                  Browse products
                </Link>
              </div>
            </div>

            <div className="pillars__bento">
              {[
                {
                  title: 'Artisan-first supply',
                  copy: 'Local makers first - skills and income stay in Rajasthan.',
                  icon: <HandshakeOutlinedIcon />,
                },
                {
                  title: 'Material science',
                  copy: 'Fast-growing bamboo with durable, everyday performance.',
                  icon: <ScienceOutlinedIcon />,
                },
                {
                  title: 'Brand-ready kits',
                  copy: 'Hospitality, clinics, and gifting programs delivered on time.',
                  icon: <LocalMallOutlinedIcon />,
                },
                {
                  title: 'Quality + consistency',
                  copy: 'Reliable finishes, inspection, and packaging standards at scale.',
                  icon: <VerifiedOutlinedIcon />,
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="bento-card"
                  data-anim="reveal"
                  style={{ '--delay': `${index * 0.1}s` } as CSSProperties}
                >
                  <div className="bento-card__icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="collections section">
        <div className="section__inner">
          <div className="section__header" data-anim="reveal">
            <span className="chip">Collections</span>
            <h2>Curated bamboo essentials for daily rituals.</h2>
            <p>
              From personal care to hospitality programs, we build durable sets
              that elevate your sustainable promise.
            </p>
          </div>
          <div className="collections__grid">
            {collections.map((item, index) => (
              <div
                key={item.title}
                className="collection-card"
                data-anim="reveal"
                style={{ '--delay': `${index * 0.1}s` } as CSSProperties}
              >
                <div className="collection-card__image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="collection-card__content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link to="/catalogue" className="text-link">
                    See details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="journey section" data-anim="journey">
        <div className="section__inner">
          <div className="section__header" data-anim="reveal">
            <span className="chip">Artisan journey</span>
            <h2>Harvest. Craft. Deliver.</h2>
            <p>From grove to finish - built as a reliable, repeatable process.</p>
          </div>

          <div className="journey__timeline">
            <div className="journey__line" aria-hidden="true">
              <span className="journey__line-fill" data-journey="line" />
            </div>
            {[
              {
                title: 'Harvest',
                copy: 'Fast-growing bamboo, sourced responsibly.',
              },
              {
                title: 'Craft',
                copy: 'Shaped, polished, and quality checked by hand.',
              },
              {
                title: 'Deliver',
                copy: 'Packed with minimal waste, ready for your brand.',
              },
            ].map((step) => (
              <div key={step.title} className="journey-step" data-journey-step>
                <div className="journey-step__dot" aria-hidden="true" />
                <div className="journey-step__body">
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="impact section" data-impact>
        <div className="section__inner">
          <div className="section__header" data-anim="reveal">
            <span className="chip">Impact</span>
            <h2>Measurable change with every order.</h2>
            <p>
              Our bamboo supply chain reduces plastic use while keeping artisan
              communities thriving.
            </p>
          </div>
          <ImpactCounters />
        </div>
      </section>

      <section className="custom section">
        <div className="section__inner custom__inner" data-anim="reveal">
          <div className="custom__content">
            <span className="chip">Custom lines</span>
            <h2>Built for hotels, clinics, and gifting teams.</h2>
            <p>
              From hospitality amenities to corporate gifting, we build branded
              bamboo sets with flexible minimums and reliable lead times.
            </p>
          </div>
          <div className="custom__cards">
            {['Hospitality kits', 'Dental clinics', 'Corporate gifting'].map(
              (item) => (
                <div key={item} className="custom-card">
                  {item}
                </div>
              )
            )}
          </div>
          <Link to="/custom" className="btn btn--primary">
            Request a Proposal
          </Link>
        </div>
      </section>

      <section className="partners section">
        <div className="section__inner partners__inner">
          <div className="section__header partners__header" data-anim="reveal">
            <span className="chip">Partners</span>
            <h2>Trusted by teams building sustainable guest experiences.</h2>
            <p>Hospitality groups, institutions, and brands we craft with.</p>
          </div>
          <div className="partners__marquee" data-anim="reveal">
            <PartnersMarquee logos={partners} speed="slow" />
          </div>
          <div className="partners-grid" data-anim="reveal">
            {partners.map((logo) => (
              <div key={logo.alt} className="partners-grid__item">
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta section">
        <div className="section__inner cta__inner" data-anim="reveal">
          <div className="cta__content">
            <span className="chip">Get started</span>
            <h2>Ready to present a premium bamboo line?</h2>
            <p>
              Share your goals and we will curate a bamboo collection tailored
              to your brand and audience.
            </p>
            <div className="cta__actions">
              <Link to="/custom" className="btn btn--primary">
                Request a Proposal
              </Link>
              <Link to="/contact" className="btn btn--ghost">
                Talk with our team
              </Link>
              <Link to="/gallery" className="btn btn--outline">
                View gallery
              </Link>
            </div>
          </div>
          <img src={studioImage} alt="Bamboo essentials" loading="lazy" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;



