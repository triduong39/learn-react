import * as React from 'react';

import { Typography, Space } from 'antd';
import AppButton from './component/AppButton/AppButton';
import AppSwitch from './component/AppSwitch/AppSwitch';

const { Text, Title } = Typography;

export default function ScssPage() {
    const handleClick = (text: string) => {
        alert(`You clicked the button ${text} at Scss page`);
    };
    return (
        <Space direction="vertical" className="main" size={'middle'}>
            <Title level={3}>
                Sử dụng <Text code>npm i node-sass</Text> để có thể sử dụng file .scss thay vì .css
            </Title>
            <Space>
                <AppButton onClick={() => handleClick('blue')}>Click here</AppButton>
                <AppButton color="red" onClick={() => handleClick('red')}>
                    Click here
                </AppButton>
            </Space>
            <Space>
                <AppSwitch checked readOnly />
                <AppSwitch variant="round" checked readOnly />
                <AppSwitch />
                <AppSwitch variant="round" />
            </Space>
        </Space>
    );
}
