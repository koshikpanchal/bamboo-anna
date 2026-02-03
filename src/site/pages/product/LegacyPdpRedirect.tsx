import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { catalogueProducts } from '../../data/catalogue';

const LegacyPdpRedirect = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const product = searchParams.get('product');

    if (product && catalogueProducts.some((item) => item.slug === product)) {
      navigate(`/product/${product}`, { replace: true });
      return;
    }

    navigate('/catalogue', { replace: true });
  }, [navigate, searchParams]);

  return null;
};

export default LegacyPdpRedirect;
