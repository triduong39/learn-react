import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { pokemonState } from '../../app/types';

export const fetchPokemonByName = createAsyncThunk('pokemon/fetchByName', async (name: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    return data;
});

// Define the initial state using that type
const initialState: pokemonState = {
    isLoading: false,
    pokemons: [],
};

export const counterSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemonByName.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchPokemonByName.fulfilled, (state, action) => {
                state.isLoading = false;
                const pokemonFetched = action.payload;
                if (state.pokemons.find((pokemon) => pokemon.name === pokemonFetched.name)) {
                    return;
                }
                const newPokemon = {
                    name: pokemonFetched.name,
                    img: pokemonFetched.sprites.front_default,
                    species: pokemonFetched.species.name,
                    type: pokemonFetched.types[0].type.name,
                    hp: pokemonFetched.stats[0].base_stat,
                    atack: pokemonFetched.stats[1].base_stat,
                    defense: pokemonFetched.stats[2].base_stat,
                };
                state.pokemons.push(newPokemon);
            });
        builder.addCase(fetchPokemonByName.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

const pokemonReducer = counterSlice.reducer;
export default pokemonReducer;
