import * as React from "react";
import { Typography } from "antd";

import ChildrenOne from "./ChildrenOne";
import ChildrenTwo from "./ChildrenTwo";
import UserProvider from "./UserProvider";

const { Title } = Typography;
export default function ContextPage() {
  return (
    <div className="context-provider">
      <Title level={3}>Context provider</Title>
      <UserProvider>
        <ChildrenOne />
        <ChildrenTwo />
      </UserProvider>
    </div>
  );
}
