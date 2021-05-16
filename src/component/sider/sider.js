import React from "react";
import {Layout, Menu, Checkbox} from "antd";
import { FilterOutlined } from "@ant-design/icons";
const {SubMenu} = Menu;
const {Sider} = Layout;

export const SiderComponent = () => {
    return(
        <Sider
          width={250}
          className="sider"
          theme="light"
          style={{ backgroundColor: "#e3e8ee", borderRight: "1px solid white" }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1", "sub2", "sub3"]}
            style={{
              height: "100%",
              borderRight: 0,
              marginTop: "20px",
            }}
          >
            <SubMenu
              key="sub1"
              icon={<FilterOutlined style={{ fontSize: "16px" }} />}
              title="Filter"
              style={{ fontSize: "16px", backgroundColor: "#e3e8ee" }}
            >
              <Menu.Item key="1" style={{ color: "#000" }}>
                Lokasi
              </Menu.Item>
              <Menu.Item key="2">
                <Checkbox>Jabodetabek</Checkbox>
              </Menu.Item>
              <Menu.Item key="3">
                <Checkbox>DKI Jakarta</Checkbox>
              </Menu.Item>
              <Menu.Item key="4">
                <Checkbox>Jawa Timur</Checkbox>
              </Menu.Item>
              <Menu.Item key="5">
                <Checkbox>Jawa Barat</Checkbox>
              </Menu.Item>
            </SubMenu>
            <hr
              style={{ width: "80%", marginTop: "1rem", marginBottom: "1rem" }}
            />
            <Menu style={{ marginLeft: "1.3rem", width: "91%" }}>
              <Menu.Item key="1" style={{ color: "#000" }}>
                Metode Pembayaran
              </Menu.Item>
              <Menu.Item key="1">
                <Checkbox>COD (Bayar di Tempat)</Checkbox>
              </Menu.Item>
            </Menu>
            <hr style={{ marginTop: "1rem", marginBottom: "1rem" }} />
            <Menu style={{ width: "91%", marginLeft: "1.3rem" }}>
              <Menu.Item key="1" style={{ color: "#000" }}>
                Berdasarkan Kategori
              </Menu.Item>
              <Menu.Item key="2">
                <Checkbox>Laptop Konsumer</Checkbox>
              </Menu.Item>
              <Menu.Item key="3">
                <Checkbox>Monitor</Checkbox>
              </Menu.Item>
              <Menu.Item key="4">
                <Checkbox>Keyboard</Checkbox>
              </Menu.Item>
              <Menu.Item key="5">
                <Checkbox>Tshirt</Checkbox>
              </Menu.Item>
            </Menu>
            <hr
              style={{ width: "80%", marginTop: "1rem", marginBottom: "1rem" }}
            />
          </Menu>
        </Sider>
    )
}