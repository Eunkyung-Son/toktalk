import counterSlice from '@features/Count/counterSlice';

import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './Modal/modalSlice';
import signupSlice from './Signup/signupSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      [counterSlice.name]: counterSlice.reducer,
      [signupSlice.name]: signupSlice.reducer,
      [modalSlice.name]: modalSlice.reducer,
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
