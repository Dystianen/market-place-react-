import React from "react";
import {
  Row,
  Col,
  Typography,
  Image,
  Rate,
  Card,
  Badge,
  Dropdown,
  Menu,
  Button,
} from "antd";
import "./DetailCard.css";
import ori from "../../component/image/ori.png";
import instagram from "../../component/image/instagram.png";
import youtube from "../../component/image/youtube.png";
import jordan from "../../component/image/jordan.png";
import { createFromIconfontCN, DownOutlined } from "@ant-design/icons";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiTruck } from "react-icons/gi";
import { RiCoinsLine } from "react-icons/ri";
const { Title, Paragraph, Text } = Typography;
const IconFont = createFromIconfontCN({
  scriptUrl: [
    "//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js", // icon-shoppingcart, icon-python
  ],
});

export const DetailCard = () => {
  const [show, setShow] = React.useState(true);

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  const loopingImage = [
    {
      key: 1,
      img: jordan,
      logo: instagram,
    },
    {
      key: 2,
      img: jordan,
      logo: youtube,
    },
    {
      key: 3,
      img: jordan,
      logo: instagram,
    },
    {
      key: 4,
      img: jordan,
      logo: youtube,
    },
  ];
  return (
    <Row>
      <Col span={10}>
        <Image
          style={{
            width: "90%",
          }}
          src={jordan}
        />
        <Col
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "1rem",
          }}
        >
          {loopingImage.map((img) => {
            return (
              <img
                style={{ width: "4rem", marginRight: "1rem" }}
                src={img.img}
              />
            );
          })}
        </Col>

        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <Col>
            <Text style={{ fontSize: "14px" }}>Share : </Text>
          </Col>
          <Col>
            {loopingImage.map((img) => {
              return (
                <img
                  style={{ width: "2.5rem", marginLeft: "1rem" }}
                  src={img.logo}
                />
              );
            })}
          </Col>
        </Row>
      </Col>
      <Col span={12}>
        <Typography>
          <Title style={{ fontFamily: "Lato" }}>Nike Air Jordan</Title>
          <div style={{ color: "red", margin: 0 }}>
            <span className="ant-rate-text">5.0</span>
            <Rate
              style={{
                fontSize: "15px",
              }}
              allowHalf
              defaultValue={4}
            />
            <span
              className="ant-rate-text"
              style={{
                borderRight: "1px solid grey",
                borderLeft: "1px solid grey",
                paddingRight: "5px",
                paddingLeft: "5px",
              }}
            >
              8RB Terjual
            </span>
            <span className="ant-rate-text" style={{ margin: 0 }}>
              8RB Penilaian
            </span>
          </div>
        </Typography>
        <Card style={{ backgroundColor: "#fafafa", border: "none" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Text delete style={{ fontFamily: "Lato" }}>
              Rp. 20.000
            </Text>
            <Title
              style={{
                color: "#d0011b",
                margin: 0,
                marginLeft: "1rem",
                marginRight: "1rem",
                fontFamily: "Lato",
              }}
            >
              Rp. 2.000.000
            </Title>
            <Badge
              className="site-badge-count-109"
              count={show ? 109 : 0}
              style={{ backgroundColor: "red" }}
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "1rem" }}
          >
            <img src={ori} alt="Original" style={{ width: "30px" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "10px",
              }}
            >
              <Text style={{ color: "#d0011b", fontWeight: "700" }}>
                Market place Garansi 100% Ori
              </Text>
              <Text>Garansi uang kembali jika produk tidak ori</Text>
            </div>
          </div>
        </Card>
        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "2rem",
            marginLeft: "1rem",
          }}
        >
          <Col>
            <Text>Koin</Text>
          </Col>
          <Col
            style={{
              marginLeft: "1rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <RiCoinsLine style={{ fontSize: "26px", color: "#ffdd00" }} />
            <Text style={{ marginLeft: "0.5rem" }}>
              Beli dan dapatkan 7.539 Koin Shopee
            </Text>
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "2rem",
            marginLeft: "1rem",
          }}
        >
          <Col>
            <Text>Pengiriman</Text>
          </Col>
          <Col>
            <div
              style={{
                marginLeft: "2rem",
                display: "flex",
                alignItems: "center",
                marginTop: "0.5rem"
              }}
            >
              <AiOutlineShoppingCart
                style={{ fontSize: "24px", color: "#d0011b" }}
              />
              <Text style={{ marginLeft: "1rem" }}>
                Dikelola Market Place | Dikemas dan Dikirim Market Place
              </Text>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: "2rem",
                marginTop: "1rem",
              }}
            >
              <img
                style={{ width: 25 }}
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/1cdd37339544d858f4d0ade5723cd477.png"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "0.5rem",
                }}
              >
                <Text
                  style={{
                    marginLeft: "0.5rem",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Gratis Ongkir
                </Text>
                <Text style={{ marginLeft: "0.5rem" }}>
                  Gratis Ongkir dengan min. belanja Rp30.000
                </Text>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "start",
                marginLeft: "2rem",
                marginTop: "1rem",
              }}
            >
              <GiTruck style={{ fontSize: "24px", color: "#d0011b" }} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "0.5rem",
                }}
              >
                <Text style={{ marginLeft: "0.5rem" }}>Pengiriman ke</Text>
                <Text style={{ marginLeft: "0.5rem", marginTop: "0.5rem" }}>
                  Ongkos kirim
                </Text>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  marginLeft: "3rem",
                }}
              >
                <Dropdown
                  overlay={menu}
                  trigger={["click"]}
                  style={{ backgroundColor: "white" }}
                >
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                    style={{
                      color: "#000",
                      fontWeight: "bold",
                      backgroundColor: "white",
                    }}
                  >
                    KOTA JAKARTA PUSAT <DownOutlined />
                  </a>
                </Dropdown>

                <Dropdown
                  overlay={menu}
                  trigger={["click"]}
                  style={{ backgroundColor: "white" }}
                >
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                    style={{
                      marginTop: "0.5rem",
                      color: "#000",
                      backgroundColor: "white",
                    }}
                  >
                    Rp.0 - 4000 <DownOutlined />
                  </a>
                </Dropdown>
              </div>
            </div>
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "2rem",
            justifyContent: "center",
          }}
        >
          <Col>
            <Button
              style={{
                alignItems: "center",
                height: "2.5rem",
                borderRadius: 0,
                color: "red",
                border: "1px solid red",
              }}
              icon={<AiOutlineShoppingCart />}
            >
              &nbsp; Masukkan Keranjang
            </Button>
            <Button
              type="primary"
              style={{ height: "2.5rem", borderRadius: 0, marginLeft: "1rem" }}
            >
              Beli Sekarang
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
