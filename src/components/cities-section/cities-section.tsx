import { useCallback, useState } from 'react';
import classNames from 'classnames';
import { TShortOffers } from '../../types/offers';
import { useAppSelector } from '../../hooks';
import { getOffer } from '../../utils/offers-utils';
import Map from '../map/map';
import PlacesSection from './places-section/places-section';
import PlacesSectionEmpty from './places-section/places-section-empty';
import {
  getCityOffers,
  getCurrentCity,
  getIsCityOffers,
  getIsLoading
} from '../../store/data-process/data-process.selectors';

export default function CitiesSection(): React.JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState('');

  const currentCity = useAppSelector(getCurrentCity);
  const cityOffers = useAppSelector(getCityOffers);
  const isLoading = useAppSelector(getIsLoading);
  const hoveredCardOffer = getOffer(cityOffers, activeOfferId);
  const selectedPoints: TShortOffers = hoveredCardOffer ? [hoveredCardOffer] : [];
  const isCityOffers = useAppSelector(getIsCityOffers);

  const isNoOffers = !isLoading && !isCityOffers;

  const handleCardMouseEnter = useCallback((newId?: string) => {
    if (newId === activeOfferId) {
      return;
    }

    setActiveOfferId(newId ? newId : '');
  }, [activeOfferId]);

  const handleCardMouseLeave = useCallback((newId?: string) => {
    if (newId === activeOfferId) {
      return;
    }

    setActiveOfferId(newId ? newId : '');
  }, [activeOfferId]);

  return (
    <div className="cities">
      <div
        className={classNames(
          'cities__places-container container',
          {'cities__places-container--empty': isNoOffers}
        )}
        data-testid='cities section container'
      >
        {isNoOffers
          ? (<PlacesSectionEmpty cityTitle={currentCity.name}/>)
          : (
            <PlacesSection
              cityOffers={cityOffers}
              currentCity={currentCity}
              isLoading={isLoading}
              handleCardMouseEnter={handleCardMouseEnter}
              handleCardMouseLeave={handleCardMouseLeave}
            />
          )}
        <div className="cities__right-section">
          {!isNoOffers && (
            <section className="cities__map map">
              <Map city={currentCity} points={cityOffers} selectedPoints={selectedPoints}/>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
