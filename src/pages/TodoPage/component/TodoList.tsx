import { Space } from 'antd';
import * as React from 'react';
import { todo } from '../app/types';
import Todo from './Todo';

type TodoListProps = {
    todos: todo[];
    onItemClick: (todo: todo) => void;
};

function TodoList({ todos, onItemClick }: TodoListProps) {
    return (
        <Space direction="vertical" style={{ width: '100%' }}>
            {todos.map((todo, index) => (
                <div key={index} onClick={() => onItemClick(todo)}>
                    <Todo name={todo.name} status={todo.status} />
                </div>
            ))}
        </Space>
    );
}

export default TodoList;
