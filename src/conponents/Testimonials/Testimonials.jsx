import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";

const Testimonials = () => {
  const client = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At magnam voluptatem fugit possimus expedita voluptatibus iste aperiam nobis animi hic. Nam, adipisci.",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At magnam voluptatem fugit possimus expedita voluptatibus iste aperiam nobis animi hic. Nam, adipisci.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At magnam voluptatem fugit possimus expedita voluptatibus iste aperiam nobis animi hic. Nam, adipisci.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At magnam voluptatem fugit possimus expedita voluptatibus iste aperiam nobis animi hic. Nam, adipisci.",
    },
  ];

  return (
    <div className="t-wrapper" name="Testomonials">
      <div className="t-heading">
        <span>Client always get</span>
        <span> Exectional Work</span>
        <span> from me...</span>
      </div>
      {/* slider  */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {client.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
