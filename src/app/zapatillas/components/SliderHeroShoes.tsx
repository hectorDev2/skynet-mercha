"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const slider = [
  {
    color: "#CB493E",
    image: "shoes/slider/red.png",
    title: "Hombre Casual ",
    description: "Zapatilla Premium para gente premium como tu",
  },
  {
    color: "#337FA4",
    image: "shoes/slider/blue.png",
    title: "Hombre Frozzen ",
    description: "Zapatilla Premium para gente premium como tu",
  },
  {
    color: "#47B558",
    image: "shoes/slider/green.png",
    title: "Hombre Atrevido ",
    description: "Zapatilla Premium para gente premium como tu",
  },
  {
    color: "#2B64AD",
    image: "shoes/slider/blue-2.png",
    title: "Hombre Blue ",
    description: "Zapatilla Premium para gente premium como tu",
  },
];

export const SliderHeroShoes = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slider.map(({ color, image, title, description }) => (
          <SwiperSlide>
            <div
              style={{ background: `${color}` }}
              className={`w-[80%] rounded-2xl   relative`}
            >
              <img
                className="absolute w-16 md:w-32 top-[10%] left-[5%] translate-x-[-50%] translate-y-[-50%]"
                src="logo.png"
                alt="logo skynet"
              />
              <div className="absolute bottom-[15%] left-[2%]">
                <h2 className="font-medium text-left text-6xl">{title}</h2>
                <p>{description} </p>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#ffec6f"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#ffec6f"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#ffec6f"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#ffec6f"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#ffec6f"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                  </svg>
                </div>
              </div>
              <img className="w-[700px] mx-auto" src={`${image}`} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
