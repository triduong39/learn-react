import { Space, Typography } from "antd";
import ChildrenTwo from "./ChildrenTwo";
import RenderUser from "./RenderUser";
import { useUser } from "./UserProvider";

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
