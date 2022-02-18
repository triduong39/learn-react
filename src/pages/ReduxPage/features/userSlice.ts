import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { user } from '../app/types';

// Define the initial state using that type
const initialState: user = {
    name: '',
    email: '',
};

export const counterSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        changeEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
    },
});

export const { changeName, changeEmail } = counterSlice.actions;

export default counterSlice.reducer;
