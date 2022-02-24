import * as React from 'react';
import { Button, ButtonProps } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';

type ButtonAddProps = {
    onClick: () => void;
} & ButtonProps;

const ButtonAddTodo = styled(ButtonAdd)`
    position: absolute;
    height: 55px;
    width: 55px;
    bottom: 30px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;

    & > * {
        font-size: 32px;
    }
`;

function ButtonAdd({ onClick, ...props }: ButtonAddProps) {
    return <Button type="primary" shape="circle" onClick={onClick} icon={<PlusOutlined />} {...props} />;
}

export default ButtonAddTodo;
