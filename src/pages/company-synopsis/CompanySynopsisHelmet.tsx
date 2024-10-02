import { Helmet } from 'react-helmet';

const CompanySynopsisHelmet = () => {
  return (
    <Helmet>
      <title>Bamboo Anna - Company Synopsis</title>
      <meta
        name="description"
        content="Learn about Bamboo Anna Enterprises and our journey in transforming bamboo into eco-friendly and innovative solutions. We offer customized bamboo products for online sellers, dental care providers, hotels, and corporate gifting."
      />
      <meta
        name="keywords"
        content="Bamboo products, eco-friendly bamboo, custom bamboo products, hotel amenities, corporate gifting, bamboo dental products"
      />
      <meta property="og:title" content="Bamboo Anna - Company Synopsis" />
      <meta
        property="og:description"
        content="Explore Bamboo Anna Enterprises' range of innovative, sustainable bamboo solutions for various industries including dental care, hotels, corporate gifting, and online retail."
      />
    </Helmet>
  );
};

export default CompanySynopsisHelmet;
