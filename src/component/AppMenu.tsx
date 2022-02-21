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
import SubMenu from 'antd/lib/menu/SubMenu';

type menuItem = {
    key: number;
    name: string;
    linkTo: string;
    icon: React.ReactNode;
};
type subMenu = {
    key: string;
    name: string;
    icon: React.ReactNode;
    children: menuItem[];
};

const routes: Array<menuItem | subMenu> = [
    { key: 1, name: 'Scss page', linkTo: '/css', icon: <UserOutlined /> },
    { key: 2, name: 'Hello world page', linkTo: '/hello', icon: <VideoCameraOutlined /> },
    { key: 3, name: 'Class page', linkTo: '/class', icon: <UploadOutlined /> },
    { key: 4, name: 'Function page', linkTo: '/func', icon: <CheckCircleOutlined /> },
    { key: 5, name: 'Context page', linkTo: '/context', icon: <HighlightOutlined /> },
    {
        key: 'sub1',
        name: 'Redux page',
        icon: <PlayCircleOutlined />,
        children: [
            { key: 7, name: 'Example', linkTo: '/redux/example', icon: <PlayCircleOutlined /> },
            { key: 8, name: 'Thunk', linkTo: '/redux/thunk', icon: <PlayCircleOutlined /> },
        ],
    },
];

function findRoute(routes: (menuItem | subMenu)[], arrayPathname: string[]) {
    if (arrayPathname[2]) {
        const subMenusItem = routes.reduce((previousValue, route) => {
            if ('children' in route) {
                return [...previousValue, ...route.children];
            }
            return previousValue;
        }, [] as (menuItem | subMenu)[]) as menuItem[];

        return subMenusItem.find((route) => route.linkTo === `/${arrayPathname[1]}/${arrayPathname[2]}`);
    } else {
        return routes.find((route) => {
            if (!('children' in route)) {
                return route.linkTo === `/${arrayPathname[1]}`;
            }
            return false;
        });
    }
}

export default function AppMenu() {
    const location = useLocation();
    const { pathname } = location;
    const arrayPathname = pathname.split('/');

    const routeMatch = findRoute(routes, arrayPathname);

    return (
        <Menu
            theme="dark"
            mode="inline"
            defaultOpenKeys={['sub1']}
            defaultSelectedKeys={routeMatch?.key ? [`${routeMatch.key}`] : ['1']}
        >
            {routes.map((route) =>
                'children' in route ? (
                    <SubMenu key={route.key} icon={route.icon} title={route.name}>
                        {route.children.map((childrenRoute) => (
                            <Menu.Item key={childrenRoute.key} icon={childrenRoute.icon}>
                                <Link to={childrenRoute.linkTo}>{childrenRoute.name}</Link>
                            </Menu.Item>
                        ))}
                    </SubMenu>
                ) : (
                    <Menu.Item key={route.key} icon={route.icon}>
                        <Link to={route.linkTo}>{route.name}</Link>
                    </Menu.Item>
                ),
            )}
        </Menu>
    );
}
