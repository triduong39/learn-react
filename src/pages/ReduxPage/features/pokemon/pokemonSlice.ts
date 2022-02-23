import { pokemonState } from "../../app/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const fetchPokemonByName = createAsyncThunk(
  "pokemon/fetchByName",
  async (name: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    return data;
  }
);

// Define the initial state using that type
const initialState: pokemonState = {
  status: "idle",
  pokemonInput: "",
  pokemons: [],
  error: "",
};

export const counterSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemonInput: (state, action: PayloadAction<string>) => {
      state.pokemonInput = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemonByName.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchPokemonByName.fulfilled, (state, action) => {
      state.status = "success";
      const pokemonFetched = action.payload;
      if (
        state.pokemons.find((pokemon) => pokemon.name === pokemonFetched.name)
      ) {
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
      state.status = "error";
      state.error = `Their is no pokemon name ${state.pokemonInput}!`;
    });
  },
});

const pokemonReducer = counterSlice.reducer;
export const { setPokemonInput } = counterSlice.actions;

export default pokemonReducer;
