import { Helmet } from 'react-helmet';
import { productDetailsType } from './productData';

type ProductDetailPageHelmetType = {
  productData: productDetailsType | null;
};

const ProductDetailPageHelmet = ({
  productData,
}: ProductDetailPageHelmetType) => {
  return (
    <Helmet>
      <title>{productData ? productData.name : 'Product Details'}</title>
      <meta
        name="description"
        content={productData ? productData.description : 'Explore our product'}
      />
      <meta
        property="og:title"
        content={productData ? productData.name : 'Product Details'}
      />
      <meta
        property="og:description"
        content={productData ? productData.description : 'Explore our product'}
      />
      <meta
        property="og:image"
        content={productData ? productData.images[0] : 'default-image.jpg'}
      />
    </Helmet>
  );
};

export default ProductDetailPageHelmet;
