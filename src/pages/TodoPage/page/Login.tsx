import * as React from 'react';
import { Image, Typography } from 'antd';
import Card from '../component/Card.styled';
import WorkLogo from '../logo/work.png';
import styled from 'styled-components';
import FormLogin from '../component/FormLogin';
import { onFinishFailedType, onFinishType } from '../app/types';
import { useAuth } from '../app/AuthProvider';

const { Title, Text } = Typography;
const AppImg = styled(Image)`
    user-select: none;
    -webkit-user-drag: none;
`;
const AppTitle = styled(Title)`
    user-select: none;
    -webkit-user-drag: none;
`;

export default function LoginPage() {
    const { signIn, error } = useAuth();

    const onFinish = ({ username, password }: onFinishType) => {
        signIn(username, password);
    };

    const onFinishFailed = (errorInfo: onFinishFailedType) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Card alignItems="center" justifyContent="space-between">
            <AppImg width={300} src={WorkLogo} preview={false} />
            <AppTitle>Tudu</AppTitle>
            {error && <Text type="danger">{error}</Text>}
            <FormLogin error={error} onFinish={onFinish} onFinishFailed={onFinishFailed} />
        </Card>
    );
}
