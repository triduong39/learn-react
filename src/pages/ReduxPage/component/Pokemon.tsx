import * as React from 'react';
import { Image, Space, Typography } from 'antd';
import { pokemon } from '../app/types';

const { Text, Title } = Typography;

interface IRenderUserProps {
    data: pokemon;
}

export default function Pokemon({ data }: IRenderUserProps) {
    return (
        <Space direction="vertical">
            <Title>{data.name}</Title>
            <Image src={data.img} />
            <Text>species: {data.species}</Text>
            <Space>
                <Text>hp: {data.hp}</Text>
                <Text>atack: {data.atack}</Text>
                <Text>defense: {data.defense}</Text>
            </Space>
        </Space>
    );
}
