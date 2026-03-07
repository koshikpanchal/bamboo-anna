import './ImpactCounters.scss';
import type { CSSProperties } from 'react';

const counters = [
  {
    value: '70+',
    label: 'Artisans supported',
    description: 'Local makers across Rajasthan.',
  },
  {
    value: '39-43 tons',
    label: 'Plastic items removed',
    description: 'Estimated removal from active supply categories.',
  },
  {
    value: '200+',
    label: 'Partner organizations',
    description:
      'Hotels, clinics, brands, corporate gifting teams, and B2G event gifting partners.',
  },
  {
    value: '98%',
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
          </div>
          <div className="impact-card__label">{counter.label}</div>
          <p>{counter.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ImpactCounters;
