import './GalleryPage.scss';
import founders from '../../../assets/photoGallery/founders.jpg';
import labour from '../../../assets/photoGallery/labour.jpg';
import office from '../../../assets/photoGallery/office.jpg';
import bambooFarmer from '../../../assets/otherPhotos/0d50abaa-43cb-485c-85c5-422c8c5d4c6a.jpg';
import ProductsRange from '../../../assets/otherPhotos/products.jpg';
import bambooSourcing from '../../../assets/otherPhotos/Logistics.jpg';
import corporateGifting from '../../../assets/corporateGifting.webp';
import bambooProfiling from '../../../assets/otherPhotos/profiling.jpg';
import RepublicAward from '../../../assets/awardImages/Republic Recognition  (1).jpg';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Seo from '../../seo/Seo';

const GalleryPage = () => {
  const awardImages = [
    { src: RepublicAward, alt: 'Banswara IAS Officer giving award to the founders.' },
  ];
  const galleryImages = [
    { src: founders, alt: 'Founders' },
    { src: labour, alt: 'Workshop craft' },
    { src: bambooSourcing, alt: 'Local bamboo sourcing' },
    { src: office, alt: 'Office space' },
    { src: ProductsRange, alt: 'Our products range' },
    { src: bambooFarmer, alt: 'Bamboo farming' },
    { src: bambooProfiling, alt: 'Bamboo profiling' },
    { src: corporateGifting, alt: 'Custom bamboo kits' },
  ];

  return (
    <div className="gallery-page">
      <Seo
        title="Bamboo Anna Awards and Gallery"
        description="See Bamboo Anna awards, artisans, and bamboo essentials in action."
        keywords={[
          'bamboo awards',
          'bamboo gallery',
          'bamboo artisans',
          'bamboo workshop',
          'bamboo products',
          'award photos',
        ]}
        canonicalPath="/gallery"
        image="/LogoColor.png"
      />
      <section className="page-hero">
        <div className="page-hero__inner" data-reveal>
          <span className="chip">Awards & Gallery</span>
          <h1>Achievements, people, and bamboo craft in one place.</h1>
          <p>
            Meet the people, materials, and moments that define Bamboo Anna.
          </p>
        </div>
      </section>

      <section className="gallery-grid section award" data-reveal>
        <div className="section__inner">
          <div className="section__header">
            <h2>Awards</h2>
            <p>
              A glimpse of our award moments.
            </p>
          </div>
          {awardImages.length > 0 ? (
            <PhotoProvider>
              <div className="gallery-grid__wrap">
                {awardImages.map((image) => (
                  <PhotoView key={image.src} src={image.src}>
                    <figure className="gallery-item">
                      <img src={image.src} alt={image.alt} loading="lazy" />
                      <figcaption>{image.alt}</figcaption>
                    </figure>
                  </PhotoView>
                ))}
              </div>
            </PhotoProvider>
          ) : (
            <div className="gallery-empty">
              Add award photos and they will appear here.
            </div>
          )}
        </div>
      </section>

      <section className="gallery-grid section" data-reveal>
        <div className="section__inner">
          <div className="section__header">
            <h2>Gallery</h2>
            <p>Inside views from our team, process, and product stories.</p>
          </div>
          <PhotoProvider>
            <div className="gallery-grid__wrap">
              {galleryImages.map((image) => (
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
