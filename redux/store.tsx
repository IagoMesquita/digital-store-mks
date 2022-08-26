import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import toggleSidebarSlice from './toggleSidebarSlice';

export const store = configureStore({
  reducer: {
    productCart: productSlice,
    toggleSidebar: toggleSidebarSlice
  },
});


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch