import CTAButton from '../../common/cta-button/CTAButton';
import './CTASection.scss';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  variant?: 'default' | 'gradient' | 'minimal';
  eyebrow?: string;
}

const CTASection = ({
  title = 'Ready to Make a Difference?',
  description =
    'Join us in our mission to create a sustainable future. Get in touch to learn more about our eco-friendly bamboo products.',
  buttonText = 'Get in Touch',
  variant = 'default',
  eyebrow = 'Bamboo Anna Studio',
}: CTASectionProps) => {
  return (
    <section className={`cta-section cta-section--${variant}`} data-reveal>
      <div className="cta-section__glow" />
      <div className="cta-section__content">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="cta-section__title">{title}</h2>
        <p className="cta-section__description">{description}</p>
        <div className="cta-section__actions">
          <CTAButton text={buttonText} variant="primary" size="large" />
          <CTAButton
            text="Browse Products"
            variant="outline"
            size="large"
            to="/products"
          />
        </div>
      </div>
      <div className="cta-section__pattern" />
    </section>
  );
};

export default CTASection;
