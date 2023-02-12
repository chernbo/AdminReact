import React from "react";
import { Layout } from "antd";
import MainHeader from "./MainHeader";
import SideMenu from "./SideMenu";
import RouterView from "../../router/RouterView";

const { Sider, Header, Content } = Layout;

const MainContent = () => {
  return (
    <Layout style={{ height: "1000px" }}>
      <Sider trigger={null}>
        <SideMenu />
      </Sider>
      <Layout>
        <MainHeader />
        <Content>
          <RouterView />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainContent;
