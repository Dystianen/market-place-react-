import React from "react";
import {Layout} from "antd";
import { Slider } from "../../component/slider/slider";
import { SiderComponent } from "../../component/sider/sider";
import { CardList } from "../../component/cards/CardList";

const {Content} = Layout;

export const Home = () => {
  return (
    <>
      <Slider />
      <Layout>
        <SiderComponent />
        <Layout style={{ padding: "0 24px 24px" }}>
            <Content
            className="site-layout-background"
            style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
            }}
            >
                <CardList />
            </Content>
        </Layout>
      </Layout>
    </>
  );
};
