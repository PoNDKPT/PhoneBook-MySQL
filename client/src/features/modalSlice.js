import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    toggle: {
      bool: false,
      type: '',
    },
  },
  reducers: {
    toggleModal: (state, action) => {
      state.toggle = action.payload;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
