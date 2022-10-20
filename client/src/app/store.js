import { configureStore } from '@reduxjs/toolkit';
import employeeSlice from '../features/employeeSlice';
import modalSlice from '../features/modalSlice';

export default configureStore({
  reducer: {
    employee: employeeSlice,
    modal: modalSlice,
  },
});
