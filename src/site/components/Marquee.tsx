import './Marquee.scss';

interface MarqueeProps {
  items: string[];
  speed?: 'slow' | 'medium' | 'fast';
}

const Marquee = ({ items, speed = 'medium' }: MarqueeProps) => {
  const duplicated = [...items, ...items];

  return (
    <div className={`marquee marquee--${speed}`} aria-hidden="true">
      <div className="marquee__track">
        {duplicated.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
