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
    <div className={`partners-marquee partners-marquee--${speed}`} aria-label="Partner logos">
      <div className="partners-marquee__track">
        {logos.map((logo) => (
          <div className="partners-marquee__item" key={logo.alt}>
            <img src={logo.src} alt={logo.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersMarquee;
