import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './ReduxApp';

export default function ReduxPage() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}
