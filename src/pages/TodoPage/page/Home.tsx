import * as React from 'react';
import { AlignLeftOutlined } from '@ant-design/icons';
import { Button, Col, Row, Spin, Typography } from 'antd';
import Card from '../component/Card.styled';
import ButtonAddTodo from '../component/ButtonAddTodo';
import { useAppDispatch, useAppSelector } from '../app/hook';
import { fetchTodos } from '../features/todo/todoSagaSlice';
import { useAuth } from '../app/AuthProvider';
import TodoList from '../component/TodoList';

const { Title } = Typography;

export default function Home() {
    const { currentUser } = useAuth();
    const dispatch = useAppDispatch();
    const { isLoading, todos } = useAppSelector((state) => state.todoSaga);

    React.useEffect(() => {
        if (currentUser?.id) {
            dispatch(fetchTodos(currentUser.id));
        }
    }, []);

    if (isLoading) {
        return (
            <Card alignItems="center" justifyContent="center">
                <Spin size="large" />
            </Card>
        );
    }

    return (
        <Card>
            <Row style={{ width: '100%', marginBottom: '20px' }}>
                <Col span={8}>
                    <Title level={2}>Tudu</Title>
                </Col>
                <Col span={8} offset={8} style={{ display: 'flex', justifyContent: 'end' }}>
                    <Button icon={<AlignLeftOutlined />} type="dashed" size="large" />
                </Col>
            </Row>
            <TodoList todos={todos} onItemClick={(todo) => console.log(todo)} />
            <ButtonAddTodo />
        </Card>
    );
}
