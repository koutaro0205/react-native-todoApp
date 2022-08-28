import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { Task } from '../../@types/data';

type Tasks = {
  tasks: Task[];
}

const initialState: Tasks = {
  tasks: [
    {id: 1, title: 'task 1', isDone: false},
    {id: 2, title: 'task 2', isDone: false},
    {id: 3, title: 'task 3', isDone: false},
  ],
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    // actions
    newTask: (state, action) => {
      const newItem = {
        id: state.tasks.length + 1,
        title: action.payload,
        isDone: false,
      };
      state.tasks = [...state.tasks, newItem];
    },
    checkedTask: (state, action) => {
      const task: Task | undefined = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    }
  },
});

export const { newTask, checkedTask, deleteTask } = taskSlice.actions;

export const selectTasks = (state: RootState) => state.task.tasks;

export default taskSlice.reducer;