import CTAButton from '../../common/cta-button/CTAButton';
import './CTASection.scss';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  variant?: 'default' | 'gradient' | 'minimal';
}

const CTASection = ({ 
  title = 'Ready to Make a Difference?',
  description = 'Join us in our mission to create a sustainable future. Get in touch to learn more about our eco-friendly bamboo products.',
  buttonText = 'Get in Touch',
  variant = 'default'
}: CTASectionProps) => {
  return (
    <section className={`cta-section cta-section--${variant}`}>
      <div className="cta-section__content">
        <h2 className="cta-section__title">{title}</h2>
        <p className="cta-section__description">{description}</p>
        <CTAButton text={buttonText} variant="primary" size="large" />
      </div>
    </section>
  );
};

export default CTASection;