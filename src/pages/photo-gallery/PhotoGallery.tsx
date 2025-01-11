import './PhotoGallery.scss';
import founders from '../../assets/photoGallery/founders.jpg';
import labour from '../../assets/photoGallery/labour.jpg';
import office from '../../assets/photoGallery/office.jpg';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import PhotoGalleryHelmet from './PhotoGalleryHelmet';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const PhotoGallery = () => {
  const images = [
    { src: founders, alt: 'Our Founder' },
    { src: office, alt: 'Our Office' },
    { src: labour, alt: 'Roots of Sustainability' },
  ];

  return (
    <>
      <PhotoGalleryHelmet />
      <Header />
      <div className="photo-gallery-container">
        <h1>Photo Gallery</h1>
        <PhotoProvider>
          <div className="masonry-grid">
            {images.map((image, index) => (
              <div key={index} className="masonry-item">
                <PhotoView src={image.src}>
                  <img src={image.src} alt={image.alt} />
                </PhotoView>
                <p>{image.alt}</p>
              </div>
            ))}
          </div>
        </PhotoProvider>
      </div>
      <Footer />
    </>
  );
};

export default PhotoGallery;
