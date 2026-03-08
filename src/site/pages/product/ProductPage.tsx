import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductPage.scss';
import { catalogueProducts, CatalogueCategory } from '../../data/catalogue';
import Seo from '../../seo/Seo';

const ProductPage = () => {
  const { slug } = useParams();
  const product = useMemo(
    () => catalogueProducts.find((item) => item.slug === slug),
    [slug]
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const related = useMemo(() => {
    if (!product) return [];
    const productCategories = new Set(product.category);

    return catalogueProducts
      .filter(
        (item) =>
          item.slug !== product.slug &&
          item.category.some((category) => productCategories.has(category))
      )
      .slice(0, 4);
  }, [product]);

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const toAbsolute = (url: string) => {
    if (!url) return url;
    if (/^https?:\/\//i.test(url)) return url;
    if (!baseUrl) return url;
    return `${baseUrl}${url.startsWith('/') ? '' : '/'}${url}`;
  };
  const truncate = (text: string, maxLength = 155) =>
    text.length > maxLength ? `${text.slice(0, maxLength - 1).trim()}...` : text;

  if (!product) {
    return (
      <section className="product-not-found" data-reveal>
        <Seo
          title="Product not found"
          description="The requested product could not be found. Browse the bamboo catalogue to explore available items."
          keywords={['bamboo catalogue', 'bamboo products']}
          canonicalPath="/catalogue"
          image="/LogoColor.png"
          noIndex
        />
        <div className="product-not-found__inner">
          <span className="chip">Not found</span>
          <h1>Product not found</h1>
          <p>Go back to the catalogue and pick a bamboo essential.</p>
          <Link to="/catalogue" className="btn btn--primary">
            Browse catalogue
          </Link>
        </div>
      </section>
    );
  }

  const images = product.images.length ? product.images : [];
  const activeImage = images[Math.min(activeIndex, Math.max(images.length - 1, 0))];
  const primaryImage = images[0] ?? '/LogoColor.png';
  const seoTitle = product.name;
  const seoDescription = truncate(product.description);
  const categoryLabel = product.category.join(' / ');
  const primaryCategory = product.category[0];
  const seoKeywords = [
    product.name,
    ...product.category,
    'bamboo product',
    'bamboo essentials',
    ...product.tags,
  ];
  const categoryContext: Record<CatalogueCategory, string> = {
    'Personal Care':
      'This category is focused on daily-use hygiene and grooming products that help replace disposable plastic alternatives with durable bamboo options.',
    Stationery:
      'Stationery items in this range are made for schools, teams, and campaigns where utility, brand visibility, and sustainability need to work together.',
    Hospitality:
      'Hospitality essentials are designed for easy guest usage and smooth bulk supply, with packaging and branding adjusted to hotel or clinic workflows.',
    'Corporate Gifting':
      'Corporate gifting products are curated for events, employee kits, and client campaigns where custom branding and premium presentation are essential.',
  };
  const defaultContext =
    'This product is built for practical use, strong brand presentation, and repeat bulk supply.';
  const detailParagraphs = [
    `${product.name} is developed for repeat bulk use and can be adapted to your quantity, packaging, and branding requirements.`,
    primaryCategory ? categoryContext[primaryCategory] : defaultContext,
    'Each batch is processed with local artisan participation in Rajasthan, then quality-checked and packed for B2B, institutional, and event deliveries.',
  ];
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    category: categoryLabel,
    image: images.map((image) => toAbsolute(image)),
    brand: {
      '@type': 'Brand',
      name: 'Bamboo Anna',
    },
  };

  return (
    <div className="product-page">
      <Seo
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        canonicalPath={`/product/${product.slug}`}
        image={toAbsolute(primaryImage)}
        type="product"
        jsonLd={productSchema}
      />
      <section className="product-hero">
        <div className="product-hero__inner" data-reveal>
          <div className="product-hero__meta">
            <Link to="/catalogue" className="product-hero__back">
              {'\u2190'} Back to catalogue
            </Link>
            <span className="chip">{categoryLabel}</span>
          </div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <div className="product-hero__tags">
            {product.tags.map((tag) => (
              <span key={tag} className="tag tag--ghost">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="product-details section">
        <div className="section__inner product-details__inner">
          <div className="product-gallery" data-reveal>
            <div className="product-gallery__main">
              {activeImage ? (
                <img src={activeImage} alt={product.name} />
              ) : (
                <div className="product-gallery__placeholder">No image</div>
              )}
            </div>
            {images.length > 1 && (
              <div className="product-gallery__thumbs">
                {images.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    className={
                      index === activeIndex
                        ? 'thumb thumb--active'
                        : 'thumb'
                    }
                    onClick={() => setActiveIndex(index)}
                  >
                    <img src={src} alt={`${product.name} ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="product-info" data-reveal>
            <div className="product-info__card">
              <h2>Key features</h2>
              <ul>
                {product.keyFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="product-info__details">
                <h3>Detailed overview</h3>
                {detailParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="product-info__cta">
              <Link to="/contact" className="btn btn--primary">
                Enquire for bulk / custom branding
              </Link>
              <Link to="/custom" className="btn btn--ghost">
                Build a custom kit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="related section" data-reveal>
          <div className="section__inner">
            <div className="related__header">
              <h2>Related in {categoryLabel}</h2>
              <Link to="/catalogue" className="text-link">
                View all
              </Link>
            </div>
            <div
              className={
                related.length < 3 ? 'related__grid related__grid--sparse' : 'related__grid'
              }
            >
              {related.map((item) => (
                <Link key={item.slug} to={`/product/${item.slug}`} className="related-card">
                  <img src={item.images[0]} alt={item.name} loading="lazy" />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.tags[0] ?? item.category[0]}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductPage;
