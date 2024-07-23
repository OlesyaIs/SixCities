import { RatingStarTitle, RatingStarValue } from '../../const/const';
import RatingStarButton from './rating-star-button/rating-star-button';

type RatingChooserProps = {
  currentRatingValue: number;
  onRatingChange: (newValue: number) => void;
  isDisabled?: boolean;
}

export default function RatingChooser({
  currentRatingValue,
  onRatingChange,
  isDisabled
}: RatingChooserProps): React.JSX.Element {
  const ratingOptionButtons = Object.values(RatingStarTitle).map((starTitle) => {
    const currentStarValue = RatingStarValue[starTitle];
    const isChecked = currentRatingValue === currentStarValue;

    return (
      <RatingStarButton
        title={starTitle}
        value={currentStarValue}
        isChecked={isChecked}
        onRatingChange={onRatingChange}
        key={currentStarValue}
        isDisabled={isDisabled}
      />
    );
  });

  return (
    <div className="reviews__rating-form form__rating">
      {ratingOptionButtons}
    </div>
  );
}
