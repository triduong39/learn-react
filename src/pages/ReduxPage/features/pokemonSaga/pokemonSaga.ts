import { pokemonDataFetch } from './../../app/types';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchPokemon, fetchPokemonFailed, fetchPokemonSuccess } from './pokemonSagaSlice';

function* fetchPokemonByName(action: PayloadAction<string>) {
    try {
        const response: Response = yield call(fetch, `https://pokeapi.co/api/v2/pokemon/${action.payload}`);
        const data: pokemonDataFetch = yield response.json();
        console.log(data);
        yield put(fetchPokemonSuccess(data));
    } catch (error) {
        console.log('Failed to fetch city list', error);
        yield put(fetchPokemonFailed());
    }
}

export default function* pokemonSaga() {
    yield takeLatest(fetchPokemon.type, fetchPokemonByName);
}
