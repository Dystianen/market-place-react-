import React from "react";
import { Carousel } from "antd";
import img1 from "../image/apple.jpg";
import img2 from "../image/arei.jpg";
import img3 from "../image/jordan.png";
import img4 from "../image/monitor.jpg";

const Sliders = [
  {
    key: 1,
    img: "https://cf.shopee.co.id/file/e27471f86b97121da2271d8f8a661ca8_xxhdpi",
    active: true,
  },
  {
    key: 2,
    img: "https://cf.shopee.co.id/file/ac50d089cbbf2db65db3192fa584341d_xxhdpi",
  },
  {
    key: 3,
    img: "https://cf.shopee.co.id/file/613b933876fcda4f8dd322c111055a05_xxhdpi",
  },
  {
    key: 4,
    img: "https://cf.shopee.co.id/file/dad5d207b98917efb067347f8f3b2812_xxhdpi"
  },
  {
    key: 5,
    img: "https://cf.shopee.co.id/file/cec34e7d490dc8df320e726430b42f97_xxhdpi"
  },
  {
    key: 6,
    img: "https://cf.shopee.co.id/file/f38b506db20ed6aff725206341004752_xxhdpi",
  }
];

export const Slider = () => {
  return (
    <Carousel autoplay>
      {Sliders.map((slide) => {
        const isDataActive = slide.active ? "active" : "";
        return (
          <div className={isDataActive} key={slide.key}>
            <img
              src={slide.img}
              style={{ width: "100%", height: "15rem", display: "flex", justifyContent: "center" }}
            ></img>
          </div>
        );
      })}
    </Carousel>
  );
};
