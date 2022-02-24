import * as React from 'react';
import { Image, Typography } from 'antd';
import Card from '../component/Card.styled';
import WorkLogo from '../logo/work.png';
import styled from 'styled-components';
import FormLogin from '../component/FormLogin';
import { onFinishFailedType, onFinishType } from '../app/types';

const { Title } = Typography;
const AppImg = styled(Image)`
    user-select: none;
    -webkit-user-drag: none;
`;
const AppTitle = styled(Title)`
    user-select: none;
    -webkit-user-drag: none;
`;

export default function LoginPage() {
    const onFinish = (values: onFinishType) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: onFinishFailedType) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Card alignItems="center" justifyContent="space-between">
            <AppImg width={300} src={WorkLogo} preview={false} />
            <AppTitle>Tudu</AppTitle>
            <FormLogin onFinish={onFinish} onFinishFailed={onFinishFailed} />
        </Card>
    );
}
