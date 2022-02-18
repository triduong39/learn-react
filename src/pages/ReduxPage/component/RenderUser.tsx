import * as React from 'react';
import { Space, Typography } from 'antd';
import { user } from '../app/types';

const { Text } = Typography;

interface IRenderUserProps {
    user?: user;
}

export default function RenderUser({ user }: IRenderUserProps) {
    return (
        <Space direction="vertical">
            <Text>user name: {user?.name ? user?.name : 'undefined'}</Text>
            <Text>user email: {user?.email ? user?.email : 'undefined'}</Text>
        </Space>
    );
}
