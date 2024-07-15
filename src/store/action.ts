import { createAction } from '@reduxjs/toolkit';
import { TCity } from '../types/city';
import { Offers } from '../types/offers';
import { TSortName } from '../types/sort';
import { Action } from '../const/action';
import { TAuthorizationStatus } from '../types/common';

export const updateCurrentCity = createAction<TCity>(Action.UpdateCurrentCity);
export const updateSortType = createAction<TSortName>(Action.UpdateSortType);
export const loadOffersList = createAction<Offers>(Action.LoadOffersList);
export const updateCityOffersList = createAction(Action.UpdateCityOffersList);
export const setIsloading = createAction<boolean>(Action.SetIsloading);
export const setError = createAction<string | null>(Action.SetError);
export const setauthorizationstatus = createAction<TAuthorizationStatus>(Action.SetAuthorizationStatus);
