import * as React from 'react';
import { Provider } from 'react-redux';
import { AuthProvider } from './app/AuthProvider';
import { store } from './app/store';
import App from './TodoApp';

export default function TodoPage() {
    return (
        <Provider store={store}>
            <AuthProvider>
                <App />
            </AuthProvider>
        </Provider>
    );
}
