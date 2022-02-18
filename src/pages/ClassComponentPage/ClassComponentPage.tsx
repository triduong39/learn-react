import * as React from 'react';
import { Button, Typography, Space } from 'antd';
const { Title } = Typography;

export interface IAppProps {
    initState?: number;
}

export default class ClassComponentPage extends React.Component<IAppProps> {
    state = {
        count: this.props.initState || 0,
    };
    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    };
    public render() {
        return (
            <Space direction="vertical" size={'middle'}>
                <Title level={3}>Component đơn giản đếm số lần bấm nút sử dụng Class Component</Title>
                <Title level={4}>Init state: {this.props.initState}</Title>
                <Button onClick={this.handleClick}>{this.state.count}</Button>
            </Space>
        );
    }
}
