import { lazy } from "react";
import {
  HomeOutlined,
  PictureOutlined,
  MenuOutlined,
  PicLeftOutlined,
  SwapLeftOutlined,
  BorderTopOutlined,
  ClockCircleOutlined,
  UserOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
const menus = [
  {
    path: "/",
    redirect: "/home",
    meta: {
      hidden: true,
    },
  },
  {
    path: "/home",
    title: "系统首页",
    component: lazy(() => import("../views/home/index")),
  },
  {
    path: "/bannerAhooks",
    title: "ahooks学习",
    icon: <PictureOutlined />,
    redirect: "/bannerAhooks/list",
    children: [
      {
        path: "/bannermanager/list",
        title: "useSelect",
        icon: <MenuOutlined />,
        component: lazy(() => import("../views/ahooks/useSelectDemo/index")),
      },
    ],
  },
  {
    path: "/bannerAntDesign",
    title: "antdDesign学习",
    icon: <PictureOutlined />,
    redirect: "/bannerAntDesign/list",
    children: [
      {
        path: "/bannerAntDesign/list",
        title: "Antd表格学习",
        icon: <MenuOutlined />,
        component: lazy(() => import("../views/antdDesign/EditTable/index")),
      },
    ],
  },
];

export default menus;
