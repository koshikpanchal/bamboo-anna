import './HomePage.scss';
import '../../../../styles/scroll-animations.css';
import { useEffect, useLayoutEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { initHomepageAnimations } from '../../../../scripts/scroll-animations';
import ImpactCounters from '../../components/ImpactCounters';
import Seo from '../../seo/Seo';
import artisanImage from '../../../assets/bambooFarmer.jpg';
import artisanImage2 from '../../../assets/photoGallery/labour.jpg';
import studioImage from '../../../assets/Homepage-image.jpg';
import craftImage from '../../../assets/dentalCare/P1030899-min.jpg';
import whyBambooSlideImage from '../../../assets/bambooSustainability.webp';
import energySectorSlideImage from '../../../assets/otherPhotos/energy4.png';
import constructionSlideImage from '../../../assets/how-strong-is-bamboo.webp';
import collectionDental from '../../../assets/dentalCare/dentalKit.jpg';
import collectionGrooming from '../../../assets/otherPhotos/drivePhotos/grooming.jpg';
import collectionHospitality from '../../../assets/HotelAmenities-dark.png';
import founderImage from '../../../assets/photoGallery/founders.jpeg';
import partnerFairmont from '../../../assets/partners/Fairmont_Logo.svg.png';
import partnerIhcl from '../../../assets/partners/indian-hotels-company-ltd-ihcl-1-638.jpg';
import partnerIndianOil from '../../../assets/partners/Indian_Oil_Logo.svg.png';
import partnerNcdc from '../../../assets/partners/NCDCNewlogo.png';
import partnerRamada from '../../../assets/partners/ra1631rede-ramada-logo-ramada-logo-evolution-history-and-meaning.png';
import partnerSandysTower from '../../../assets/partners/SANDYS TOWER-02.png';
import partnerNaturalWash from '../../../assets/partners/the-natural-wash.jpg';
import partnerTjr from '../../../assets/partners/tjr-logo.png';
import partnerDCMShriram from '../../../assets/partners/DCMShriram.png';
import partnerAxplore from '../../../assets/partners/Axplore.png';
import partnerRabhGarhPalace from '../../../assets/partners/RabhGarhPalace.png';
import partnerRadisson from '../../../assets/partners/Radisson.png';
import partnerMPGov from '../../../assets/partners/MPGov.png';
import partnerDRVed from '../../../assets/partners/DRVed.png';
import partnerLIC from '../../../assets/partners/LIC.png';
import partnerPurexa from '../../../assets/partners/Purexa.png';
import partnerWildernest from '../../../assets/partners/Wildernest.png';
import partnerOrasore from '../../../assets/partners/orasore.jpg';
import partnerUnionBank from '../../../assets/partners/UnionBank.png';
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

const heroSlides = [
  {
    id: 'why-bamboo',
    eyebrow: 'Why Bamboo',
    title: 'Bamboo makes sustainability practical.',
    subtitle:
      'Fast regrowth, lower plastic dependency, and cleaner end-of-life cycles make bamboo a practical business choice.',
    image: whyBambooSlideImage,
    primaryCta: { label: 'Why Bamboo', to: '/impact' },
  },
  {
    id: 'artisans',
    eyebrow: 'Artisans',
    title: 'Local artisans shape every batch we deliver.',
    subtitle:
      'We manufacture with skilled teams in Rajasthan, creating reliable livelihoods while maintaining quality standards.',
    image: artisanImage2,
    primaryCta: { label: 'Meet Our Story', to: '/about-us' },
  },
  {
    id: 'energy-sector',
    eyebrow: 'Energy Sector',
    title: 'Bamboo for ethanol and clean bioenergy.',
    subtitle:
      'Bamboo biomass can support 2G ethanol and cleaner fuel pathways, connecting sustainable agriculture with the future energy ecosystem.',
    image: energySectorSlideImage,
    primaryCta: { label: 'Source Bamboo', to: '/contact' },
  },
  {
    id: 'engineered-construction',
    eyebrow: 'Engineered Bamboo',
    title: 'Engineered bamboo is ready for future construction.',
    subtitle:
      'Its strength-to-weight profile and renewable source potential make it a serious material for modern build ecosystems.',
    image: constructionSlideImage,
    primaryCta: { label: 'See Impact', to: '/impact' },
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
  { src: partnerOrasore, alt: 'Orasore' },
  { src: partnerUnionBank, alt: 'Union Bank' },
  { src: partnerWildernest, alt: 'Wildernest' },
  { src: partnerDCMShriram, alt: 'DCM Shriram' },
  { src: partnerRabhGarhPalace, alt: 'Rabh Garh Palace' },
  { src: partnerRadisson, alt: 'Radisson' },
  { src: partnerMPGov, alt: 'Madhya Pradesh Government' },
  { src: partnerDRVed, alt: 'Doctor Ved Science' },
  { src: partnerLIC, alt: 'LIC Life Insurance' },
  { src: partnerPurexa, alt: 'Purexa Oral Welness' },
  { src: partnerAxplore, alt: 'Axplore Travelplus' },
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
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  useLayoutEffect(() => initHomepageAnimations(), []);

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);

    return () => {
      window.clearInterval(rotation);
    };
  }, []);

  const goToSlide = (index: number) => {
    setActiveHeroSlide(index);
  };

  const goToPrevSlide = () => {
    setActiveHeroSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNextSlide = () => {
    setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
  };

  const currentHeroSlide = heroSlides[activeHeroSlide];
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bamboo Anna',
    description:
      'Bamboo Anna crafts modern bamboo essentials with local artisans in Rajasthan, focusing on plastic-free essentials and custom branding.',
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
    name: 'Bamboo Anna',
    ...(baseUrl
      ? {
          url: baseUrl,
        }
      : {}),
  };

  return (
    <div className="home" data-page="home">
      <Seo
        title="Bamboo Anna - Modern bamboo essentials"
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
        <div className="home-hero__slides" aria-hidden="true">
          {heroSlides.map((slide, index) => (
            <img
              key={slide.id}
              src={slide.image}
              alt=""
              className={index === activeHeroSlide ? 'home-hero__slide is-active' : 'home-hero__slide'}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          ))}
          <div className="home-hero__shade" aria-hidden="true" />
        </div>

        <div className="section__inner home-hero__inner">
          <div className="home-hero__copy" data-hero-reveal>
            <h1>{currentHeroSlide.title}</h1>
            <p>{currentHeroSlide.subtitle}</p>
            <div className="home-hero__actions">
              <Link to={currentHeroSlide.primaryCta.to} className="btn btn--primary">
                {currentHeroSlide.primaryCta.label}
              </Link>
              <Link to="/contact" className="btn btn--ghost">
                Send Enquiry
              </Link>
            </div>
          </div>

          <div className="home-hero__nav" data-hero-reveal aria-label="Hero slider controls">
            <button
              type="button"
              className="home-hero__arrow"
              onClick={goToPrevSlide}
              aria-label="Previous slide"
            >
              {'\u2039'}
            </button>
            <div className="home-hero__dots" role="tablist" aria-label="Hero slides">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  className={index === activeHeroSlide ? 'home-hero__dot is-active' : 'home-hero__dot'}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to ${slide.eyebrow} slide`}
                  aria-current={index === activeHeroSlide ? 'true' : undefined}
                />
              ))}
            </div>
            <button
              type="button"
              className="home-hero__arrow"
              onClick={goToNextSlide}
              aria-label="Next slide"
            >
              {'\u203A'}
            </button>
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
              <p data-story="supporting">
                From irregular daily wages to leading quality work for bamboo
                products.
              </p>
            </div>
            <p className="mini-story__fine" data-anim="reveal">
              When Kamla joined Bamboo Anna, she was taking seasonal work with
              uncertain income. She trained in bamboo shaping, sanding, and
              finish checks, and today she mentors newer women artisans in her
              team. Her monthly earnings now support school fees, home expenses,
              and more financial stability for her family. Each bulk order from
              hotels, clinics, and gifting programs creates repeat work for
              local hands like hers. This is our business model in action:
              manufacture with local artisans, upgrade skills, provide safer
              tools, and deliver brand-ready bamboo products with pride.
            </p>
          </div>
        </div>
      </section>

      <section className="pillars section">
        <div className="section__inner">
          <div className="pillars__inner">
            <div className="pillars__lead" data-anim="reveal">
              <span className="chip">Why Bamboo Anna</span>
              <h2>Sustainability that works for business and communities.</h2>
              <p>
                Because sustainability should be practical, affordable, and impactful. Bamboo Anna offers eco-friendly alternatives made from natural materials, supporting rural employment and helping businesses shift towards a greener future.
              </p>
              <div
                className="pillars__lead-actions"
                data-anim="reveal"
                style={{ '--delay': '0.08s' } as CSSProperties}
              >
                <Link to="/about-us" className="btn btn--ghost">
                  See our story
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

      <section className="home-about section">
        <div className="section__inner home-about__inner">
          <div className="home-about__copy" data-anim="reveal">
            <span className="chip">About us</span>
            <h2>Built on the belief that small choices can transform entire systems.</h2>
            <p className="home-about__motto">
              पर्यावरण संरक्षणम् - protecting the environment.
            </p>
            <p>
              Founded in 2022 by Co-Founder Mr. Anil Chauhan and Founder Mr. Sawan Vaishnav, Bamboo Anna was established with a clear strategic vision — to replace high-volume plastic consumption in daily-use essentials with scalable, sustainable bamboo alternatives.
            </p>
            <p>
              In India, millions of single-use plastic products are discarded every day, with items like toothbrushes contributing significantly to long-term environmental waste. Bamboo Anna addresses this challenge at scale by offering reliable, eco-friendly replacements designed for both individual consumers and institutional use.
            </p>
            <p>
              Today, Bamboo Anna operates at the intersection of sustainability and supply efficiency. We partner with hotels, corporate groups, and emerging brands to deliver eco-conscious amenity solutions without compromising on quality, consistency, or operational timelines.
            </p>
            <p>
              Our approach is not limited to products — it extends to building an ecosystem. By working closely with local artisans and manufacturing partners, we ensure responsible sourcing, consistent production capacity, and meaningful social impact.
            </p>
            <p>
              Within a short span, Bamboo Anna has expanded its presence across the Indian market, becoming a trusted partner for organizations seeking to align with sustainable practices and ESG-driven goals.
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
              <span className="journey__line-fill" data-journey="progress" />
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
            <span className="chip">Custom solutions</span>
            <h2>Built for hotels, clinics, and gifting teams.</h2>
            <p>
              From hospitality amenities to corporate gifting, we build branded
              bamboo sets with flexible minimums and reliable delivery timelines.
            </p>
          </div>
          <div className="custom__cards">
            {[
              'Hospitality kits',
              'Dental clinics',
              'Corporate gifting',
              'FMCG brands',
              'NGOs',
              'Ecommerce sellers',
            ].map(
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
        </div>
      </section>

      <section className="cta section">
        <div className="section__inner cta__inner" data-anim="reveal">
          <div className="cta__content">
            <span className="chip">Get started</span>
            <h2>Ready to present a premium bamboo range?</h2>
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
            </div>
          </div>
          <img src={studioImage} alt="Bamboo essentials" loading="lazy" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;



