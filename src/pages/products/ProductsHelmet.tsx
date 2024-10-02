import { Helmet } from 'react-helmet';

const ProductsHelmet = () => {
  return (
    <Helmet>
      <title>Our Bamboo Products | Bamboo Anna Enterprises</title>
      <meta
        name="description"
        content="Explore our range of eco-friendly bamboo products including toothbrushes, razors, combs, and more. Discover sustainable living with Bamboo Anna Enterprises."
      />
      <meta
        name="keywords"
        content="bamboo products, eco-friendly, sustainable, toothbrushes, razors, bamboo combs, plantable seed pen, bamboo straw"
      />
      <meta
        property="og:title"
        content="Our Bamboo Products | Bamboo Anna Enterprises"
      />
      <meta
        property="og:description"
        content="Browse our eco-friendly bamboo products such as toothbrushes, razors, and more. Join us in promoting sustainability."
      />
      <meta
        property="og:image"
        content="https://www.bambooanna.in/assets/comb/bamboo-hair-brush-comb-set-eco-friendly.jpg"
      />
    </Helmet>
  );
};

export default ProductsHelmet;
