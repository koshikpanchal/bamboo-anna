import './GalleryPage.scss';
import founders from '../../../assets/photoGallery/founders.jpg';
import labour from '../../../assets/photoGallery/labour.jpg';
import office from '../../../assets/photoGallery/office.jpg';
import bambooFarmer from '../../../assets/bambooFarmer.jpg';
import craftImage from '../../../assets/organicproducts1.jpg';
import corporateGifting from '../../../assets/corporateGifting.webp';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Seo from '../../seo/Seo';

const GalleryPage = () => {
  const images = [
    { src: founders, alt: 'Founders' },
    { src: labour, alt: 'Workshop craft' },
    { src: office, alt: 'Studio space' },
    { src: bambooFarmer, alt: 'Bamboo farming' },
    { src: craftImage, alt: 'Bamboo craftsmanship' },
    { src: corporateGifting, alt: 'Custom bamboo kits' },
  ];

  return (
    <div className="gallery-page">
      <Seo
        title="Bamboo Anna Gallery"
        description="See the Bamboo Anna studio, artisans, and bamboo essentials in action."
        keywords={[
          'bamboo gallery',
          'bamboo artisans',
          'bamboo workshop',
          'bamboo products',
          'studio photos',
        ]}
        canonicalPath="/gallery"
        image="/LogoColor.png"
      />
      <section className="page-hero">
        <div className="page-hero__inner" data-reveal>
          <span className="chip">Gallery</span>
          <h1>A look inside our bamboo workshop.</h1>
          <p>
            Meet the people, materials, and moments that define Bamboo Anna.
          </p>
        </div>
      </section>

      <section className="gallery-grid section" data-reveal>
        <div className="section__inner">
          <PhotoProvider>
            <div className="gallery-grid__wrap">
              {images.map((image) => (
                <PhotoView key={image.src} src={image.src}>
                  <figure className="gallery-item">
                    <img src={image.src} alt={image.alt} loading="lazy" />
                    <figcaption>{image.alt}</figcaption>
                  </figure>
                </PhotoView>
              ))}
            </div>
          </PhotoProvider>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
