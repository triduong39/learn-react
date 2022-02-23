import * as React from "react";
import { Input, Space, Typography } from "antd";

import { useUser } from "./UserProvider";
import RenderUser from "./RenderUser";
import ChildrenThree from "./ChildrenThree";
const { Title } = Typography;

export default function ChildrenTwo() {
  const { user, handleChangeName } = useUser();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeName(event.target.value);
  };

  return (
    <Space direction="vertical" className="context-child-two">
      <Title level={3}>Children two</Title>
      <RenderUser user={user} />
      <Space align="baseline">
        <Title level={5}>Change name</Title>
        <Input
          value={user.name}
          placeholder="Change user name"
          onChange={handleChange}
        />
      </Space>
      <ChildrenThree />
    </Space>
  );
}
