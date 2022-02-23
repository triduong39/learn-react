import {
  CheckCircleOutlined,
  HighlightOutlined,
  PlayCircleOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import * as React from "react";
import { Link, useMatch } from "react-router-dom";

type menuItem = {
  key: string;
  name: string;
  linkTo: string;
  icon: React.ReactNode;
};
type subMenu = {
  key: string;
  name: string;
  icon: React.ReactNode;
  children: menuItem[];
};

const routes: Array<menuItem | subMenu> = [
  { key: "css", name: "Scss page", linkTo: "/css", icon: <UserOutlined /> },
  {
    key: "hello",
    name: "Hello world page",
    linkTo: "/hello",
    icon: <VideoCameraOutlined />,
  },
  {
    key: "class",
    name: "Class page",
    linkTo: "/class",
    icon: <UploadOutlined />,
  },
  {
    key: "func",
    name: "Function page",
    linkTo: "/func",
    icon: <CheckCircleOutlined />,
  },
  {
    key: "context",
    name: "Context page",
    linkTo: "/context",
    icon: <HighlightOutlined />,
  },
  {
    key: "redux",
    name: "Redux page",
    icon: <PlayCircleOutlined />,
    children: [
      {
        key: "example",
        name: "Example",
        linkTo: "/redux/example",
        icon: <PlayCircleOutlined />,
      },
      {
        key: "thunk",
        name: "Thunk",
        linkTo: "/redux/thunk",
        icon: <PlayCircleOutlined />,
      },
    ],
  },
];

export default function AppMenu() {
  const matchOneArgument = useMatch({
    path: "/:page",
  });
  const matchTwoArgument = useMatch({
    path: "/:page/:sub",
  });

  let defaultOpenKeys: string[] = [];
  let defaultSelectedKeys: string[] = [];

  if (matchOneArgument) {
    defaultSelectedKeys = [matchOneArgument.params.page || ""];
  } else if (matchTwoArgument) {
    defaultOpenKeys = [matchTwoArgument.params.page || ""];
    defaultSelectedKeys = [matchTwoArgument.params.sub || ""];
  }

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultOpenKeys={defaultOpenKeys}
      defaultSelectedKeys={defaultSelectedKeys}

      // defaultSelectedKeys={routeMatch?.key ? [`${routeMatch.key}`] : ['1']}
    >
      {routes.map((route) =>
        "children" in route ? (
          <SubMenu key={route.key} icon={route.icon} title={route.name}>
            {route.children.map((childrenRoute) => (
              <Menu.Item key={childrenRoute.key} icon={childrenRoute.icon}>
                <Link to={childrenRoute.linkTo}>{childrenRoute.name}</Link>
              </Menu.Item>
            ))}
          </SubMenu>
        ) : (
          <Menu.Item key={route.key} icon={route.icon}>
            <Link to={route.linkTo}>{route.name}</Link>
          </Menu.Item>
        )
      )}
    </Menu>
  );
}
