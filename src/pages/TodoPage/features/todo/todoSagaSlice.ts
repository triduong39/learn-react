import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { todo, todoState } from '../../app/types';

// Define the initial state using that type
const initialState: todoState = {
    isLoading: false,
    todos: [],
};

export const todoSagaSlice = createSlice({
    name: 'todoSaga',
    initialState,
    reducers: {
        fetchTodos: (state, _action: PayloadAction<string>) => {
            state.isLoading = true;
        },
        fetchTodoSuccess: (state, action: PayloadAction<todo[]>) => {
            state.isLoading = false;
            state.todos = action.payload;
        },
        fetchTodoFailed: (state) => {
            state.isLoading = false;
        },
    },
});

export const { fetchTodos, fetchTodoSuccess, fetchTodoFailed } = todoSagaSlice.actions;

const todoSagaReducer = todoSagaSlice.reducer;
export default todoSagaReducer;
