import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { pokemonDataFetch, pokemonState } from '../../app/types';

// Define the initial state using that type
const initialState: pokemonState = {
    isLoading: false,
    pokemons: [],
};

export const pokemonSagaSlice = createSlice({
    name: 'pokemonSaga',
    initialState,
    reducers: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        fetchPokemon: (state, _: PayloadAction<string>) => {
            state.isLoading = true;
        },
        fetchPokemonSuccess: (state, action: PayloadAction<pokemonDataFetch>) => {
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
        },
        fetchPokemonFailed: (state) => {
            state.isLoading = false;
        },
    },
});

export const { fetchPokemon, fetchPokemonSuccess, fetchPokemonFailed } = pokemonSagaSlice.actions;

const pokemonSagaReducer = pokemonSagaSlice.reducer;
export default pokemonSagaReducer;
