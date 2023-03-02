import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../features/modal/modalSlice';
import charactersReducer from '../features/characters/charactersSlice';
import chartReducer from '../features/chart/chartSlice'

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    chart: chartReducer,
    modal: modalReducer,
  },
});
