import React from "react";
import { Link } from "react-router-dom";
import { Card, Rate } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import jordan from "../../component/image/jordan.png";
import arei from "../../component/image/arei.jpg";
import monitor from "../../component/image/monitor.jpg";
import apple from "../../component/image/apple.jpg";
import "./CardList.css";

const { Meta } = Card;

export const CardList = () => {
  const loopingCard = [
    {
      key: 1,
      img: jordan,
      title: "Nike Air Jordan",
      harga: "Rp. 2.000.000",
      kota: "KOTA Tangerang",
      terjual: "1,3RB Terjual",
      value: 4,
    },
    {
      key: 2,
      img: arei,
      title: "Arei 25L",
      harga: "Rp. 1.000.000",
      kota: "KOTA Depok",
      terjual: "2RB Terjual",
      value: 3.5,
    },
    {
      key: 3,
      img: monitor,
      title: "Monitor Kualitas Full HD",
      harga: "Rp. 200.000",
      kota: "KOTA Bekasi",
      terjual: "2RB Terjual",
      value: 5,
    },
    {
      key: 4,
      img: apple,
      title: "Macbook 2016",
      harga: "Rp. 20.000",
      kota: "Jakarta Pusat",
      terjual: "2RB Terjual",
      value: 4.5,
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        fontFamily: 'Lato',
      }}
    >
      {loopingCard.map((card) => {
        return (
          <Link to={"/app/detail"}>
            <Card
              hoverable
              style={{ width: 240, margin: "5px" }}
              cover={
                <img className="card-image" alt="example" src={card.img} />
              }
            >
              <div>
                <h3>{card.title}</h3>
                <h4 style={{ color: "red" }}>{card.harga}</h4>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <div
                    className="icon"
                    style={{
                      marginRight: "10px",
                      float: "left",
                    }}
                  >
                    <HeartOutlined />
                  </div>
                  <Rate
                    style={{
                      fontSize: "10px",
                    }}
                    allowHalf
                    defaultValue={card.value}
                  />
                  <span className="ant-rate-text">{card.terjual}</span>
                </div>
                <h3
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "15px",
                    marginBottom: "-5px"
                  }}
                >
                  {card.kota}
                </h3>
              </div>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};
