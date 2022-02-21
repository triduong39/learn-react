import { pokemonState } from './../app/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPokemonByName = createAsyncThunk('pokemon/fetchByName', async (name: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    return data;
});

// Define the initial state using that type
const initialState: pokemonState = {
    status: 'idle',
    pokemon: {
        name: '',
        img: '',
        species: '',
        type: '',
        hp: '',
        atack: '',
        defense: '',
    },
};

export const counterSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPokemonByName.pending, (state) => {
            state.status = 'pending';
        });
        builder.addCase(fetchPokemonByName.fulfilled, (state, action) => {
            const pokemonFetched = action.payload;
            state.status = 'success';
            state.pokemon = {
                name: pokemonFetched.name,
                img: pokemonFetched.sprites.front_default,
                species: pokemonFetched.species.name,
                type: pokemonFetched.types[0].type.name,
                hp: pokemonFetched.stats[0].base_stat,
                atack: pokemonFetched.stats[1].base_stat,
                defense: pokemonFetched.stats[2].base_stat,
            };
        });
        builder.addCase(fetchPokemonByName.rejected, (state) => {
            state.status = 'error';
        });
    },
});

const pokemonReducer = counterSlice.reducer;

export default pokemonReducer;
