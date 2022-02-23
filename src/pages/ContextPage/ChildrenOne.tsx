import * as React from "react";
import { Space, Typography } from "antd";

import { useUser } from "./UserProvider";
import ChildrenTwo from "./ChildrenTwo";
import RenderUser from "./RenderUser";
const { Title } = Typography;

export default function ChildrenOne() {
  const { user } = useUser();

  return (
    <Space direction="vertical" className="context-child-one">
      <Title level={3}>Children one</Title>
      <RenderUser user={user} />
      <ChildrenTwo />
    </Space>
  );
}
