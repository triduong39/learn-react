import { all } from 'redux-saga/effects';
import pokemonSaga from '../features/pokemonSaga/pokemonSaga';

export default function* rootSaga() {
    yield all([pokemonSaga()]);
}
