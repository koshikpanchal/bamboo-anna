import './PartnersMarquee.scss';

export type PartnerLogo = {
  src: string;
  alt: string;
};

interface PartnersMarqueeProps {
  logos: PartnerLogo[];
  speed?: 'slow' | 'medium' | 'fast';
}

const PartnersMarquee = ({ logos, speed = 'slow' }: PartnersMarqueeProps) => {
  return (
    <div
      className={`partners-marquee partners-marquee--${speed}`}
      aria-label="Partner logos"
    >
      <div className="partners-marquee__motion">
        {[0, 1].map((repeatIndex) => (
          <div
            className="partners-marquee__track"
            key={repeatIndex}
            aria-hidden={repeatIndex === 1}
          >
            {logos.map((logo) => (
              <div className="partners-marquee__item" key={`${logo.alt}-${repeatIndex}`}>
                <img
                  src={logo.src}
                  alt={repeatIndex === 0 ? logo.alt : ''}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersMarquee;
