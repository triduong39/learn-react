import * as React from 'react';
import './main.scss';

import { Typography, Space } from 'antd';

const { Text, Title } = Typography;

export default function ScssPage() {
    const handleClick = () => {
        alert('You clicked the button at Scss page');
    };
    return (
        <Space direction="vertical" className="main">
            <Title level={3}>
                Sử dụng <Text code>npm i node-sass</Text> để có thể sử dụng file .scss thay vì .css
            </Title>
            <button onClick={handleClick}>Click here</button>
            <button className="btn-red" onClick={handleClick}>
                Click here
            </button>
            <button className="btn-blue" onClick={handleClick}>
                Click here
            </button>
        </Space>
    );
}
