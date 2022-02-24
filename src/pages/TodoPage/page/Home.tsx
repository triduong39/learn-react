import * as React from 'react';
import { AlignLeftOutlined } from '@ant-design/icons';
import { Button, Col, Row, Typography } from 'antd';
import Card from '../component/Card.styled';
import ButtonAddTodo from '../component/ButtonAdd';

const { Title } = Typography;

export default function MainPage() {
    return (
        <Card>
            <Row style={{ width: '100%' }}>
                <Col span={8}>
                    <Title level={2}>Tudu</Title>
                </Col>
                <Col span={8} offset={8} style={{ display: 'flex', justifyContent: 'end' }}>
                    <Button icon={<AlignLeftOutlined />} type="dashed" size="large" />
                </Col>
            </Row>
            <ButtonAddTodo
                onClick={() => {
                    console.log(1);
                }}
            />
        </Card>
    );
}
