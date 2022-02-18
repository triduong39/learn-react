import * as React from 'react';
import { Typography } from 'antd';
const { Title } = Typography;

import ChildrenOne from './ChildrenOne';
import ChildrenTwo from './ChildrenTwo';
import UserProvider from './UserProvider';

export default function ContextPage() {
    return (
        <div className="context-provider">
            <Title level={3}>Context provider</Title>
            <UserProvider>
                <ChildrenOne />
                <ChildrenTwo />
            </UserProvider>
        </div>
    );
}
