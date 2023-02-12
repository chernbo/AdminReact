import { Layout, Menu } from "antd";
import { icons } from "antd/lib/image/PreviewGroup";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation, withRouter } from "react-router-dom";
import menus from "../../router/menus";
// 获取包含子节点的所有父节点路径
const rootSubmenuKeys: string[] = [];

menus.forEach((item) => {
  item.children && rootSubmenuKeys.push(item.path);
});

const SideMenu = withRouter((props) => {
  //   const [selectKeys, setSelectKeys] = useState<string[]>([]);
  //   const history = useHistory();
  const { SubMenu } = Menu;

  const renderMenu = (menus: any[]) => {
    return (
      <>
        {menus?.map((item) => {
          if (item?.children) {
            return (
              <SubMenu key={item?.path} icon={item.icon} title={item.title}>
                {renderMenu(item.children)}
              </SubMenu>
            );
          } else {
            return item.meta && item.meta.hidden ? null : (
              <Menu.Item key={item.path} icon={item.icon}>
                <Link to={item.path}>{item.title}</Link>
              </Menu.Item>
            );
          }
        })}
      </>
    );
  };

  return (
    <Menu theme="dark" mode="inline">
      {renderMenu(menus)}
    </Menu>
  );
});

export default SideMenu;
