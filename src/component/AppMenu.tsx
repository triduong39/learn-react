import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Menu } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    CheckCircleOutlined,
    HighlightOutlined,
    PlayCircleOutlined,
} from '@ant-design/icons';

type route = {
    key: number;
    name: string;
    linkTo: string;
    icon: React.ReactNode;
};
const routes: route[] = [
    { key: 1, name: 'Scss page', linkTo: '/', icon: <UserOutlined /> },
    { key: 2, name: 'Hello world page', linkTo: '/hello', icon: <VideoCameraOutlined /> },
    { key: 3, name: 'Class page', linkTo: '/class', icon: <UploadOutlined /> },
    { key: 4, name: 'Function page', linkTo: '/func', icon: <CheckCircleOutlined /> },
    { key: 5, name: 'Context page', linkTo: '/context', icon: <HighlightOutlined /> },
    { key: 6, name: 'Redux page', linkTo: '/redux', icon: <PlayCircleOutlined /> },
];

export default function AppMenu() {
    const params = useLocation();
    const SelectedKeys = routes.find((route) => route.linkTo === params.pathname);

    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={SelectedKeys?.key ? [`${SelectedKeys.key}`] : ['1']}>
            {routes.map((route) => (
                <Menu.Item key={route.key} icon={route.icon}>
                    <Link to={route.linkTo}>{route.name}</Link>
                </Menu.Item>
            ))}
        </Menu>
    );
}
