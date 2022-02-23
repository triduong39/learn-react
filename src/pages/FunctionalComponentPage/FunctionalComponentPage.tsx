import * as React from 'react';
import { Button, Space, Typography } from 'antd';
const { Title } = Typography;

export interface IFunctionalComponentPageProps {
    initState?: number;
}

export default function FunctionalComponentPage({ initState }: IFunctionalComponentPageProps) {
    const [count, setCount] = React.useState(initState || 0);
    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <Space direction="vertical" size={'large'}>
            <Title level={3}>Component đơn giản đếm số lần bấm nút sử dụng Functional Component</Title>
            <Title level={4}>Init state: {initState}</Title>
            <Button onClick={handleClick}>{count}</Button>
        </Space>
    );
}
