import * as React from 'react';
import { Input, Space, Typography } from 'antd';
import HelloWorld from './Component/HelloWorld';

const { Title } = Typography;

export default function HelloPage() {
    const [text, setText] = React.useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };
    return (
        <Space direction="vertical" size={'large'}>
            <Title level={3}>“Hello World” component</Title>
            <Input placeholder="Type some text" value={text} onChange={handleChange} />
            <HelloWorld text={text}></HelloWorld>
        </Space>
    );
}
