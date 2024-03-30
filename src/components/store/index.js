import { configureStore } from '@reduxjs/toolkit';

import listSlice from './list';
import statusSlice from './list-controller';

const store = configureStore({
  reducer: { todolist: listSlice.reducer, status: statusSlice.reducer },
});

export default store;
