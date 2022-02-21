import * as React from 'react';
import { Alert, Button, Form, Input, Spin } from 'antd';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../app/store';

import { pokemon } from '../app/types';
import Pokemon from '../component/Pokemon';

import { fetchPokemonByName } from '../features/pokemonSlice';

export default function ThunkPage() {
    const dispatch = useDispatch();

    const { status, pokemon } = useAppSelector((state) => state.pokemon);

    const onFinish = ({ pokemon }: { pokemon: string }) => {
        dispatch(fetchPokemonByName(pokemon));
    };

    return (
        <>
            <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} autoComplete="off">
                <Form.Item label="Pokemon" name="pokemon" rules={[{ required: true, message: 'Type your pokemon!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            {status === 'pending' ? <Spin tip="Loading..." /> : undefined}
            {status === 'success' ? <Pokemon data={pokemon as pokemon} /> : undefined}
            {status === 'error' ? <Alert message="Không có pokemon nào như vậy!" type="error" /> : undefined}
        </>
    );
}
