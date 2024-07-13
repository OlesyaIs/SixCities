import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';

import { offers, fullOffersPack } from './mocks/offers';
import { reviewsPack } from './mocks/reviews';
import { CityPack } from './const/citypack';

import App from './components/app/app';
import { fetchOffersAction } from './store/api-action';

store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        fullOffersPack={fullOffersPack}
        reviewsPack={reviewsPack}
        cityPack={CityPack}
      />
    </Provider>
  </React.StrictMode>
);
