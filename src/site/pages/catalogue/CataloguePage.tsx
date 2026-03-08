import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import './CataloguePage.scss';
import { catalogueCategories, catalogueProducts, CatalogueCategory } from '../../data/catalogue';
import Seo from '../../seo/Seo';

const CataloguePage = () => {
  const [category, setCategory] = useState<CatalogueCategory | 'All'>('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return catalogueProducts.filter((product) => {
      const matchesCategory =
        category === 'All' || product.category.includes(category);
      const matchesQuery =
        !normalizedQuery ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.description.toLowerCase().includes(normalizedQuery) ||
        product.category.some((item) => item.toLowerCase().includes(normalizedQuery)) ||
        product.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));

      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="catalogue-page">
      <Seo
        title="Bamboo Catalogue"
        description="Browse bamboo toothbrushes, combs, razors, straws, and stationeries. Filter by category and request custom branding."
        keywords={[
          'bamboo catalogue',
          'bamboo toothbrush',
          'bamboo comb',
          'bamboo razor',
          'bamboo straw',
          'plantable pen',
          'eco friendly products',
        ]}
        canonicalPath="/catalogue"
        image="/LogoColor.png"
      />
      <section className="page-hero page-hero--catalogue">
        <div className="page-hero__inner" data-reveal>
          <span className="chip">Catalogue</span>
          <h1>Browse the bamboo essentials collection</h1>
          <p>
            Filter by category, open a product page, and send an enquiry for bulk
            orders, custom branding, or packaging.
          </p>
        </div>
      </section>

      <section className="catalogue section">
        <div className="section__inner">
          <div className="catalogue__toolbar" data-reveal>
            <div className="catalogue__filters">
              <button
                type="button"
                className={category === 'All' ? 'filter-chip is-active' : 'filter-chip'}
                onClick={() => setCategory('All')}
              >
                All
              </button>
              {catalogueCategories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={category === item ? 'filter-chip is-active' : 'filter-chip'}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="catalogue__search">
              <input
                type="search"
                placeholder="Search products, features, tags..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                aria-label="Search catalogue"
              />
            </div>
          </div>

          <div
            className={
              filtered.length === 1 ? 'catalogue__grid catalogue__grid--sparse' : 'catalogue__grid'
            }
          >
            {filtered.map((product) => (
              <Link
                key={product.slug}
                to={`/product/${product.slug}`}
                className="product-card"
              >
                <div className="product-card__media">
                  <img src={product.images[0]} alt={product.name} loading="lazy" />
                  <div className="product-card__tags">
                    {product.category.map((item) => (
                      <span className="tag" key={`${product.slug}-${item}`}>
                        {item}
                      </span>
                    ))}
                    {product.tags.slice(0, 2).map((tag) => (
                      <span className="tag tag--ghost" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="product-card__body">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <span className="product-card__cta">
                    View details {'\u2192'}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="catalogue__empty">
              <h2>No products found</h2>
              <p>Try a different category or search term.</p>
            </div>
          )}
        </div>
      </section>

      <section className="catalogue-cta section" data-reveal>
        <div className="section__inner catalogue-cta__inner">
          <div>
            <span className="chip">Bulk & branding</span>
            <h2>Need custom packaging or logo printing?</h2>
            <p>
              Tell us your quantities, timelines, and branding needs. We will
              share a proposal within 48 hours.
            </p>
          </div>
          <Link to="/contact" className="btn btn--primary">
            Send enquiry
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CataloguePage;
