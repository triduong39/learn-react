import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import pokemonReducer from '../features/pokemonSlice';
import counterReducer from '../features/userSlice';

export const store = configureStore({
    reducer: {
        user: counterReducer,
        pokemon: pokemonReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
