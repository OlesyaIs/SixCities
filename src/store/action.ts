import { createAction } from '@reduxjs/toolkit';
import { TCity } from '../types/city';
import { TOffers, TOfferFull } from '../types/offers';
import { TSortName } from '../types/sort';
import { Action } from '../const/action';
import { TAuthorizationStatus } from '../types/common';
import { TReviews } from '../types/reviews';
import { TRedirectRouteProps } from '../types/api';

export const updateCurrentCity = createAction<TCity>(Action.UpdateCurrentCity);
export const updateSortType = createAction<TSortName>(Action.UpdateSortType);
export const loadOffersList = createAction<TOffers>(Action.LoadOffersList);
export const updateCityOffersList = createAction(Action.UpdateCityOffersList);
export const setIsloading = createAction<boolean>(Action.SetIsloading);
export const setError = createAction<string | null>(Action.SetError);
export const setauthorizationstatus = createAction<TAuthorizationStatus>(Action.SetAuthorizationStatus);
export const redirectToRoute = createAction<TRedirectRouteProps>(Action.RedirectToRoute);
export const loadCurrentOffer = createAction<TOfferFull | null>(Action.LoadCurrentOffer);
export const loadCurrentOfferReviews = createAction<TReviews>(Action.LoadCurrentOfferReviews);
