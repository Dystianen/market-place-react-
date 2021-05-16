import React from "react";
import {Link} from "react-router-dom";
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
import ori from "../../component/image/ori.png";
import instagram from "../../component/image/instagram.png";
import youtube from "../../component/image/youtube.png";
import jordan from "../../component/image/jordan.png";
import {
  createFromIconfontCN,
  DownOutlined,
  HeartOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiTruck } from "react-icons/gi";
import { RiCoinsLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
const { Title, Paragraph, Text } = Typography;
const IconFont = createFromIconfontCN({
  scriptUrl: [
    "//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js", // icon-shoppingcart, icon-python
  ],
});

export const DetailCard = (props) => {
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
    <>
      <Card>
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
                      style={{ width: "2rem", marginLeft: "1rem" }}
                      src={img.logo}
                    />
                  );
                })}
              </Col>
              <Col
                style={{
                  borderLeft: "1px solid grey",
                  marginLeft: "1rem",
                  fontSize: "14px",
                }}
              >
                <HeartOutlined style={{ color: "red", marginLeft: "1rem" }} />
                <Text style={{ marginLeft: "0.5rem" }}>Favorit(15RB)</Text>
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
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "1rem",
                }}
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
                    marginTop: "0.5rem",
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
                  size="large"
                  style={{
                    alignItems: "center",
                    borderRadius: 0,
                    color: "red",
                    border: "1px solid red",
                    backgroundColor: "rgba(208, 1, 27, 0.08)",
                  }}
                  icon={<AiOutlineShoppingCart />}
                >
                  &nbsp; Masukkan Keranjang
                </Button>
                <Button
                  size="large"
                  type="primary"
                  style={{
                    borderRadius: 0,
                    marginLeft: "1rem",
                  }}
                >
                  Beli Sekarang
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>

      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "1rem",
        }}
      >
        <Row>
          <Col>
            <div
              className="brand-toko"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={jordan}
                style={{ width: "3rem", borderRadius: "50%" }}
              />
              <Button type="primary" size="small">
                Market Mall
              </Button>
            </div>
          </Col>
          <Col
            style={{ borderRight: "1px solid #e3e3e3", paddingRight: "2rem" }}
          >
            <div
              className="toko"
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "1rem",
              }}
            >
              <Text style={{ fontSize: "1rem"}}>Nike Official</Text>
              <Text>active 17 minute ago</Text>
              <div style={{ marginTop: "3px" }}>
                <Button
                  type="default"
                  style={{
                    backgroundColor: "rgba(208, 1, 27, 0.08)",
                    borderRadius: 0,
                    color: "red",
                    border: "1px solid red",
                  }}
                  size="middle"
                  icon={<WechatOutlined />}
                >
                  Chat Sekarang
                </Button>
                <Button
                  type="default"
                  style={{ borderRadius: 0, marginLeft: "3px" }}
                  size="middle"
                  icon={<FaHome />}
                >
                  &nbsp; Kunjungi Toko
                </Button>
              </div>
            </div>
          </Col>

          <Col
            style={{
              marginLeft: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Text>Penilaian</Text>
              <Text style={{ color: "red" }}>&nbsp; 95.5RB</Text>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "1rem",
              }}
            >
              <Text>Produk</Text>
              <Text style={{ color: "red" }}>&nbsp; 1RB</Text>
            </div>
          </Col>

          <Col
            style={{
              marginLeft: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Text>Persentase Chat Dibalas</Text>
              <Text style={{ color: "red" }}>&nbsp; 100%</Text>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "1rem",
              }}
            >
              <Text>Waktu Chat Dibalas</Text>
              <Text style={{ color: "red" }}>&nbsp; Hitungan Jam</Text>
            </div>
          </Col>

          <Col
            style={{
              marginLeft: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Text>Bergabung</Text>
              <Text style={{ color: "red" }}>&nbsp; 2 tahun lalu</Text>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "1rem",
              }}
            >
              <Text>Pengikut</Text>
              <Text style={{ color: "red" }}>&nbsp; 95.5RB</Text>
            </div>
          </Col>
        </Row>
      </Card>

      <Card style={{
        marginTop: "1rem"
      }}>
        <Card style={{display: "flex", alignItems: "center",width: "100%", backgroundColor: "#fafafa", border: "none"}}>
          <h2 style={{margin: 0, fontFamily: "Anton"}}>Spesifikasi Produk</h2>
        </Card>

        <Row style={{marginLeft: "2rem", fontSize: "14px"}}>
          <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
            <Col style={{display: "flex", flexDirection: "column"}}>
              <Text style={{color: "#8c8c8c"}}>Kategori</Text>
              <Text style={{color: "#8c8c8c"}}>Merek</Text>
              <Text style={{color: "#8c8c8c"}}>Model</Text>
              <Text style={{color: "#8c8c8c"}}>Kapasitas</Text>
            </Col>
            <Col style={{display: "flex", flexDirection: "column", marginLeft: "3rem"}}>
              <Link><Text style={{color: "blue"}}>Market - Sepatu</Text></Link>
              <Text>Nike Air Jordan</Text>
              <Text>KQ2134</Text>
              <Text>43</Text>
            </Col>
          </div>
        </Row>

        <Card style={{display: "flex", alignItems: "center",width: "100%", backgroundColor: "#fafafa", border: "none", marginTop: "3rem"}}>
          <h2 style={{margin: 0, fontFamily: "Anton"}}>Deskripsi Produk</h2>
        </Card>

        <Row style={{marginLeft: "2rem", fontSize: "14px"}}>
          <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
            <Col style={{display: "flex", flexDirection: "column"}}>
              <ul>
                <li>Hanya menjual kualitas terbaik</li>
                <li>Real picture 100%</li>
                <li>Kualitas premium quality original / kualitas terbaik</li>
                <li>Sudah termasuk box dan paperbag</li>
                <li>Apabila barang tidak sesuai dengan foto boleh di retur </li>
              </ul>
              <Text>Note :</Text>
              <ul>
                <li>Welcome Reseller</li>
                <li>Harap tanyakan stok dulu sebelum order</li>
              </ul>
            </Col>
          </div>
        </Row>
      </Card>
    </>
  );
};
