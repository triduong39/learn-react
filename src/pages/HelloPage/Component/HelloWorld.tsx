import * as React from 'react';

export interface IHelloWorldProps {
    text?: string;
}

export default function HelloWorld({ text }: IHelloWorldProps) {
    return <h1>Hello {text === '' ? 'Tri duong' : text}!</h1>;
}
