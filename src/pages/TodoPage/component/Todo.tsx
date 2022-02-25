import * as React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';
import { CheckCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

const { Text } = Typography;
type propsType = {
    alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'start' | 'end';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
};

const TodoWraper = styled.div<propsType>`
    position: relative;
    width: 100%;
    height: 60px;
    font-size: 20px;
    border-radius: 10px;
    padding: 20px;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
    cursor: pointer;
    display: flex;
    align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
    justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'space-between')};
    transition: box-shadow 0.5s;
    user-select: none;

    &:hover {
        box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px,
            rgb(0 0 0 / 12%) 0px 1px 18px 0px;
    }

    .todo__name {
        overflow: hidden;
        max-width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .todo__icon {
        font-size: 24px;
        margin-left: 10px;
        &.done {
            color: #69dd69;
        }
        &.unfinished {
            color: #f63c3c;
        }
    }
`;

type TodoProps = {
    name: string;
    status: boolean;
} & React.ComponentProps<'div'>;

function Todo({ name, status }: TodoProps) {
    return (
        <TodoWraper>
            <Text className="todo__name">{name}</Text>
            {status ? (
                <CheckCircleOutlined className="todo__icon done" />
            ) : (
                <MinusCircleOutlined className="todo__icon unfinished" />
            )}
        </TodoWraper>
    );
}

export default Todo;
