import * as React from 'react';
import { Input, Space, Typography } from 'antd';

import { useUser } from './UserProvider';
import RenderUser from './RenderUser';
const { Title } = Typography;

export default function ChildrenThree() {
    const { user, handleChangeEmail } = useUser();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleChangeEmail(event.target.value);
    };

    return (
        <Space direction="vertical" className="context-child-three">
            <Title level={3}>Children three</Title>
            <RenderUser user={user} />
            <Space align="baseline">
                <Title level={5}>Change Email</Title>
                <Input value={user.email} placeholder="Change user email" onChange={handleChange} />
            </Space>
        </Space>
    );
}
