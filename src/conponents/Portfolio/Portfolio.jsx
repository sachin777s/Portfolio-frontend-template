import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import Sidebar from "../../img/sidebar.png";
import { themeContext } from '../../Context'

export const Portfolio = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" name="Portfolio">
      {/* heading  */}
      <span style={{color:darkMode?"white":""}}> Recent Projects</span>
      <span>Portfolio</span>

      {/* Slider */}
      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className="portfolio-slider"
      >
        <SwiperSlide className=".swiper-slide">
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
                <img src={HOC} alt="" />
            </SwiperSlide>
      </Swiper>
    </div>
  );
};
