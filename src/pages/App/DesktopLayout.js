import React from "react";
import { Layout, Menu, Breadcrumb, Input, Checkbox, Typography } from "antd";
import {
  FilterOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { AppRoute } from "../../routes/app";
import './DekstopLayout.css';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const {Text} = Typography;
export const DekstopLayout = () => {
  return (
    <Layout>
      <Header className="header" style={{backgroundColor: "#db0000"}}>
        <div className="logo">Market Place</div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-end", fontSize: "15px"}}>
          <Menu className="menu-list" theme="light" mode="horizontal" defaultSelectedKeys={["2"]} style={{color: "white"}}>
            <Menu.Item key="1">Beranda</Menu.Item>
            <Menu.Item key="2">Merchant</Menu.Item>
            <Menu.Item key="3">List Produk</Menu.Item>
          </Menu>
        </div>
      </Header>
      <Layout>
        <Sider width={250} className="sider" theme="light" style={{backgroundColor: "#e3e8ee"}}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1", "sub2", "sub3"]}
            style={{
              height: '100%',
              borderRight: 0,
              marginTop: "20px"
            }}
          >
            <SubMenu key="sub1" icon={<FilterOutlined style={{fontSize: "16px"}} />} title="Filter" style={{fontSize: "16px", backgroundColor: "#e3e8ee"}}>
              <Menu.Item key="1" style={{color: "#000"}}>Lokasi</Menu.Item>
              <Menu.Item key="2"><Checkbox>Jabodetabek</Checkbox></Menu.Item>
              <Menu.Item key="3"><Checkbox>DKI Jakarta</Checkbox></Menu.Item>
              <Menu.Item key="4"><Checkbox>Jawa Timur</Checkbox></Menu.Item>
              <Menu.Item key="5"><Checkbox>Jawa Barat</Checkbox></Menu.Item>
            </SubMenu>
            <hr style={{width: "80%", marginTop: "1rem", marginBottom: "1rem"}}/>
            <Menu style={{marginLeft: "1.3rem"}}>
              <Menu.Item key="1" style={{color: "#000"}}>Metode Pembayaran</Menu.Item>
              <Menu.Item key="1"><Checkbox>COD (Bayar di Tempat)</Checkbox></Menu.Item>
            </Menu>
            <hr style={{width: "80%", marginTop: "1rem", marginBottom: "1rem"}}/>
            <Menu style={{marginLeft: "1.3rem"}}>
              <Menu.Item key="1" style={{color: "#000"}}>Berdasarkan Kategori</Menu.Item>
              <Menu.Item key="2"><Checkbox>Laptop Konsumer</Checkbox></Menu.Item>
              <Menu.Item key="3"><Checkbox>Monitor</Checkbox></Menu.Item>
              <Menu.Item key="4"><Checkbox>Keyboard</Checkbox></Menu.Item>
              <Menu.Item key="5"><Checkbox>Tshirt</Checkbox></Menu.Item>
            </Menu>
            <hr style={{width: "80%", marginTop: "1rem", marginBottom: "1rem"}}/>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <AppRoute/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default DekstopLayout;
