import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../slices/task/taskSlice'

export const store = configureStore({ // ストアを作成
  reducer: {
    task: taskReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;