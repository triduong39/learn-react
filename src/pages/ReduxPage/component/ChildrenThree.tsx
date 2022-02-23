import * as React from "react";
import { Input, Space, Typography } from "antd";
import { useAppDispatch, useAppSelector } from "../app/store";
import { changeEmail } from "../features/user/userSlice";
import RenderUser from "./RenderUser";

const { Title } = Typography;

export default function ChildrenThree() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeEmail(event.target.value));
  };

  return (
    <Space direction="vertical" className="context-child-three">
      <Title level={3}>Children three</Title>
      <RenderUser user={user} />
      <Space align="baseline">
        <Title level={5}>Change Email</Title>
        <Input
          value={user.email}
          placeholder="Change user email"
          onChange={handleChange}
        />
      </Space>
    </Space>
  );
}
