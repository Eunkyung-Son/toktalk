import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  isOpenModal: string;
}

const initialState: CounterState = {
  isOpenModal: '',
};

export const modalSlice = createSlice({
  name: 'MODAL',
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<string>) => {
      state.isOpenModal = action.payload;
    },
  },
});

export const {
  actions: modalSliceAction, //
  reducer: modalSliceReducer,
} = modalSlice;

export default modalSlice;
