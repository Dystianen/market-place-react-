import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Input, Row, Col, Badge, Breadcrumb } from "antd";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { AppRoute } from "../../routes/app";
import "./DekstopLayout.css";

const { Search } = Input;
const { Header, Content } = Layout;

const onSearch = (value) => console.log(value);

export const DekstopLayout = () => {
  return (
    <Layout>
      <Row
        className="header"
        style={{
          backgroundColor: "#db0000",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Col
          span={12}
          style={{
            color: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <Menu
            className="menu-list"
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ color: "white", border: "none" }}
          >
            <Menu.Item key="1">Seller Center</Menu.Item>
            <Menu.Item key="2">Mulai Jual</Menu.Item>
            <Menu.Item key="3">Download</Menu.Item>
            <Menu.Item key="4">Ikuti Kami</Menu.Item>
          </Menu>
        </Col>
        <Col
          span={12}
          style={{
            color: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Menu
            className="menu-list"
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ color: "white", border: "none" }}
          >
            <Menu.Item key="1">
              <IoMdNotificationsOutline style={{ fontSize: "1rem" }} />
              Notifikasi
            </Menu.Item>
            <Menu.Item key="2">
              <BiHelpCircle style={{ fontSize: "1rem" }} />
              Bantuan
            </Menu.Item>
            <Menu.Item key="3">Login</Menu.Item>
          </Menu>
        </Col>
      </Row>
      <Header
        className="header"
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#db0000",
          justifyContent: "space-between",
        }}
      >
        <Link to={"/app/home"}>
          <div
            className="logo"
            style={{
              fontFamily: "Anton",
              border: "2px solid",
              display: "flex",
              alignItems: "center",
              height: "3rem",
              marginTop: "0.5rem",
              backgroundColor: "brown",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            Market Place
          </div>
        </Link>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "15px",
            width: "40rem",
          }}
        >
          <Search
            placeholder="Cari toko, produk, dan merek"
            onSearch={onSearch}
            enterButton
            style={{ height: "2rem" }}
          />
        </div>
        <Link
          to={"/app/cart"}
          style={{
            marginRight: "5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Badge
            count={100}
            style={{ backgroundColor: "rgb(165 13 13)", border: "none" }}
          >
            <ShoppingCartOutlined
              style={{
                color: "white",
                fontSize: "2.5rem",
              }}
            />
          </Badge>
        </Link>
      </Header>

      <Breadcrumb style={{marginTop: "1.5rem", marginLeft: "2rem"}}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href={"/app/detail"}>Detail Produk</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href={"/app/detail"}>Produk</a>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Layout style={{ padding: "0 24px 24px" }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <AppRoute />
        </Content>
      </Layout>
    </Layout>
  );
};
export default DekstopLayout;
