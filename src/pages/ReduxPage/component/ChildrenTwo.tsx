import * as React from 'react';
import { Input, Space, Typography } from 'antd';
import { useAppDispatch, useAppSelector } from '../app/store';
import { changeName } from '../features/user/userSlice';
import ChildrenThree from './ChildrenThree';
import RenderUser from './RenderUser';

const { Title } = Typography;

export default function ChildrenTwo() {
    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeName(event.target.value));
    };

    return (
        <Space direction="vertical" className="context-child-two">
            <Title level={3}>Children two</Title>
            <RenderUser user={user} />
            <Space align="baseline">
                <Title level={5}>Change name</Title>
                <Input value={user.name} placeholder="Change user name" onChange={handleChange} />
            </Space>
            <ChildrenThree />
        </Space>
    );
}
