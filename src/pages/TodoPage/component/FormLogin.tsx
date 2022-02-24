import * as React from 'react';
import { Button, Form, Input } from 'antd';
import { formLoginType } from '../app/types';

export default function FormLogin({ onFinish, onFinishFailed }: formLoginType) {
    return (
        <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{ width: '100%' }}
        >
            <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input size="large" placeholder="User name" />
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password size="large" placeholder="Password" />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" size="large">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}
