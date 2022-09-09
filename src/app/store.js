import { configureStore } from '@reduxjs/toolkit';

import { cryptoCoinsApi } from '../services/cryptoApi';

export default configureStore({
  reducer: {
    [cryptoCoinsApi.reducerPath]: cryptoCoinsApi.reducer,
  },
});
