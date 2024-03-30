import { createSlice } from '@reduxjs/toolkit';

const localStorageStatus = JSON.parse(localStorage.getItem('status'));

if (!localStorageStatus) {
  const initialStatus = { status: 'All' };

  localStorage.setItem('status', JSON.stringify(initialStatus));
}

const initialState =
  JSON.parse(localStorage.getItem('status')) !== null
    ? JSON.parse(localStorage.getItem('status'))
    : { status: 'All' };

const statusSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    setStatus(state, action) {
      const newStatus = action.payload;
      state.status = newStatus;
      localStorage.setItem('status', JSON.stringify(state));
    },
  },
});

export const statusActions = statusSlice.actions;

export default statusSlice;
