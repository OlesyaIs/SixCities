import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { TPlaceCardMode } from '../../../types/common';
import { TOffer } from '../../../types/offers';

import { AppRoute } from '../../../const/const';
import { PlaceCardMode } from '../../../const/mode';
import Rating from '../../shared/rating/rating';
import BookmarkButton from '../../shared/bookmark-button/bookmark-button';
import OfferPrice from '../../shared/offer-price/offer-price';
import { useRef } from 'react';
import { useAppDispatch } from '../../../hooks';
import { fetchCurrentOfferAction } from '../../../store/api-action';

type PlaceCardProps = {
  offer: TOffer;
  cardMode: TPlaceCardMode;
  onMouseEnter: (id: string) => void;
  onMouseLeave: (id?: string) => void;
}

export default function PlaceCard({
  offer,
  cardMode,
  onMouseEnter,
  onMouseLeave
}: PlaceCardProps): React.JSX.Element {
  const cardRef = useRef<HTMLElement | null>(null);
  const dispatch = useAppDispatch();

  const isFavoriteMode = cardMode === PlaceCardMode.Favorite;
  const classNamePrefix = isFavoriteMode ? 'favorites' : 'cities';

  const handleMouseEnterEvent = (evt: React.MouseEvent<HTMLElement, MouseEvent>) => {
    evt.preventDefault();
    onMouseEnter(offer.id);
  };

  const handleMouseLeaveEvent = (evt: React.MouseEvent<HTMLElement, MouseEvent>) => {
    evt.preventDefault();
    onMouseLeave();
  };

  const handleLinkClick = () => {
    dispatch(fetchCurrentOfferAction({offerId: offer.id}));
  };

  return (
    <article
      className={`place-card ${classNamePrefix}__card`}
      onMouseEnter={handleMouseEnterEvent}
      onMouseLeave={handleMouseLeaveEvent}
      ref={cardRef}
    >
      <div className={`place-card__image-wrapper ${classNamePrefix}__image-wrapper`}>
        <Link to={`${AppRoute.OfferBase}${offer.id}`} onClick={handleLinkClick}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={isFavoriteMode ? '150' : '260'}
            height={isFavoriteMode ? '110' : '200'}
            alt="Place image"
          />
        </Link>
      </div>
      <div
        className={classNames(
          'place-card__info',
          {'favorites__card-info': isFavoriteMode}
        )}
      >
        <div className="place-card__price-wrapper">
          <OfferPrice offerPrice={offer.price} />
          <BookmarkButton offer={offer}/>
        </div>
        <Rating offerRating={offer.rating} />
        <h2 className="place-card__name">
          <Link to={`${AppRoute.OfferBase}${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
