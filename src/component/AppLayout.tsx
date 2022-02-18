import * as React from 'react';

import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import AppMenu from './AppMenu';

const { Header, Sider, Content } = Layout;

export interface IAppLayoutProps {
    children: React.ReactNode;
}

export default function AppLayout({ children }: IAppLayoutProps) {
    const [isCollapsed, setIsCollapsed] = React.useState(false);

    const toggle = () => {
        setIsCollapsed(!isCollapsed);
    };
    return (
        <Layout id="components-app">
            <Sider trigger={null} collapsible collapsed={isCollapsed}>
                <div className="logo-wrap">
                    <img
                        alt="react"
                        className="logo"
                        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                    />
                </div>
                <AppMenu />
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {isCollapsed ? (
                        <MenuUnfoldOutlined className="trigger" onClick={toggle} />
                    ) : (
                        <MenuFoldOutlined className="trigger" onClick={toggle} />
                    )}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}
