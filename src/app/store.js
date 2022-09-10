import { configureStore } from '@reduxjs/toolkit';

import { cryptoCoinsApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoDetailsApi';

export default configureStore({
  reducer: {
    [cryptoCoinsApi.reducerPath]: cryptoCoinsApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});
