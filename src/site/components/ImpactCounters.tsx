import './ImpactCounters.scss';
import type { CSSProperties } from 'react';

const counters = [
  {
    value: 65,
    suffix: '+',
    label: 'Artisans supported',
    description: 'Local makers across Rajasthan.',
  },
  {
    value: 120,
    suffix: 'K',
    label: 'Plastic items replaced',
    description: 'Estimated units switched yearly.',
  },
  {
    value: 30,
    suffix: '+',
    label: 'Business partners',
    description: 'Hotels, clinics, and brands.',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Biodegradable materials',
    description: 'Low impact bamboo sourcing.',
  },
];

const ImpactCounters = () => {
  return (
    <div className="impact-counters">
      {counters.map((counter, index) => (
        <div
          className="impact-card"
          key={counter.label}
          data-anim="reveal"
          style={{ '--delay': `${index * 0.08}s` } as CSSProperties}
        >
          <div className="impact-card__value" data-anim="count">
            {counter.value}
            {counter.suffix}
          </div>
          <div className="impact-card__label">{counter.label}</div>
          <p>{counter.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ImpactCounters;
