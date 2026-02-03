import { Link } from 'react-router-dom';
import './NotFoundPage.scss';
import Seo from '../../seo/Seo';

const NotFoundPage = () => {
  return (
    <section className="not-found" data-reveal>
      <Seo
        title="Page not found"
        description="The page you requested could not be found. Explore Bamboo Anna collections or return home."
        keywords={['bamboo essentials', 'bamboo collections']}
        canonicalPath="/"
        image="/LogoColor.png"
        noIndex
      />
      <div className="not-found__inner">
        <span className="chip">404</span>
        <h1>Page not found</h1>
        <p>
          The page you are looking for does not exist. Explore our bamboo
          collections or return home.
        </p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn--primary">
            Back to Home
          </Link>
          <Link to="/collections" className="btn btn--ghost">
            View Collections
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
