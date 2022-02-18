import * as React from 'react';
import { Typography } from 'antd';
const { Title } = Typography;

import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './ReduxApp';

export default function ReduxPage() {
    return (
        <div className="context-provider">
            <Title level={3}>Redux provider</Title>
            <Provider store={store}>
                <App />
            </Provider>
        </div>
    );
}
