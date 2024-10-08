import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const/const';
import { useAppSelector } from '../../../hooks';
import { getFavoriteOffers } from '../../../store/data-process/data-process.selectors';
import { getUserEmail } from '../../../store/user-process/user-process.selectors';

type ProfileLinkProps = {
  isAuthorized: boolean;
}

export default function ProfileLink({
  isAuthorized,
}: ProfileLinkProps): React.JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const userEmail = useAppSelector(getUserEmail);
  const ProfileLinkInner = isAuthorized
    ? (
      <>
        <span className="header__user-name user__name" data-testid='username element'>{userEmail}</span>
        <span className="header__favorite-count" data-testid='favorites count element'>{favoriteOffers.length}</span>
      </>
    )
    : (
      <span className="header__login" data-testid='sign in element'>Sign in</span>
    );

  return (
    <Link className="header__nav-link header__nav-link--profile" to={isAuthorized ? AppRoute.Favorites : AppRoute.Login}>
      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
      {ProfileLinkInner}
    </Link>
  );
}
