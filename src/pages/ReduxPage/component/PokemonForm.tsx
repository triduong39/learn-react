import * as React from 'react';
import { Button, Form, Input } from 'antd';

interface IRenderUserProps {
    inputValue: string;
    handleSubmit: () => void;
    handleInputChange: (pokemonName: string) => void;
}

export default function PokemonForm({ inputValue, handleSubmit, handleInputChange }: IRenderUserProps) {
    const [form] = Form.useForm();

    React.useEffect(() => {
        form.setFieldsValue({
            pokemonName: inputValue,
        });
    });

    return (
        <Form
            form={form}
            name="basic"
            layout="inline"
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
            autoComplete="off"
            onValuesChange={(value) => {
                handleInputChange(value.pokemonName);
            }}
        >
            <Form.Item label="Pokemon" name="pokemonName" rules={[{ required: true, message: 'Type your pokemon!' }]}>
                <Input value={inputValue} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Search
                </Button>
            </Form.Item>
        </Form>
    );
}
