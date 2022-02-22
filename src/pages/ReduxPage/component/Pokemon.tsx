import * as React from 'react';
import { Card, Image, Space, Typography } from 'antd';
import { pokemon } from '../app/types';

const { Text, Title } = Typography;

interface IRenderUserProps {
    data: pokemon;
}

export default function Pokemon({ data }: IRenderUserProps) {
    return (
        <Card style={{ width: 200 }} cover={<Image alt="pokemon" src={data.img} />}>
            <Space direction="vertical" align="center" style={{ width: '100%' }}>
                <Title level={3}> {data.name}</Title>
                <Text>hp: {data.hp}</Text>
                <Text>atack: {data.atack}</Text>
                <Text>defense: {data.defense}</Text>
            </Space>
        </Card>
    );
}
