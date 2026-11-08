import OfferCard from './OfferCard';
import { Offer } from '../../mocks/offers';
import { useState } from 'react';

type OfferListProps = {
  offers: Offer[];
};

function OfferList({ offers }: OfferListProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const handleCardMouseEnter = (id: string) => {
    setActiveOfferId(id);
  };
  const handleCardMouseLeave = () => {
    setActiveOfferId(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onMouseEnter={handleCardMouseEnter}
          onMouseLeave={handleCardMouseLeave}
        />
      ))}
      <div>{activeOfferId}</div>
    </div>
  );
}

export default OfferList;
