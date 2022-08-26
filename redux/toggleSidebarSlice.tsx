import { createSlice  } from '@reduxjs/toolkit';

export interface IToggleSidebar {
  value: boolean
}

const initialState: IToggleSidebar = {
  value: false,
};

export const toggleSidebarSlice = createSlice({
  name: 'toggleSidebar',
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.value = true
    },
    closedSidebar: (state) => {
      state.value= false
    }
  }
});

export const { openSidebar, closedSidebar } = toggleSidebarSlice.actions;

export default toggleSidebarSlice.reducer;