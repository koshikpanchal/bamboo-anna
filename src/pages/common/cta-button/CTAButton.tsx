import { Link } from 'react-router-dom';
import './CTAButton.scss';

interface CTAButtonProps {
  text?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  to?: string;
  className?: string;
}

const CTAButton = ({ 
  text = 'Contact Us', 
  variant = 'primary',
  size = 'medium',
  to = '/contactUs',
  className = ''
}: CTAButtonProps) => {
  return (
    <Link 
      to={to} 
      className={`cta-button cta-button--${variant} cta-button--${size} ${className}`}
    >
      {text}
      <span className="cta-button__arrow">→</span>
    </Link>
  );
};

export default CTAButton;