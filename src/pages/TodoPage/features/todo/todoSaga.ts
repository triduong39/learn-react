import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchTodos, fetchTodoSuccess, fetchTodoFailed } from './todoSagaSlice';
import { getTodos } from '../../api/todoApi';
import { todoStatus } from '../../app/types';

function* fetchTodosByUserId(action: PayloadAction<string>) {
    try {
        const response: todoStatus = yield call(getTodos, action.payload);
        if (response.status === 'success') {
            yield put(fetchTodoSuccess(response.data));
        }
        yield put(fetchTodoFailed());
    } catch (error) {
        console.log('Failed to fetch todos', error);
        yield put(fetchTodoFailed());
    }
}

export default function* todoSaga() {
    yield takeLatest(fetchTodos.type, fetchTodosByUserId);
}
