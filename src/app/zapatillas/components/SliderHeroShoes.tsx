"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Autoplay, Pagination } from "swiper/modules";

interface Props {
  shoes: {
    color: string;
    image: string;
    title: string;
    description: string;
  }[];
}

export const SliderHeroShoes = ({ shoes = [] }: Props) => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {shoes?.map(({ color, image, title, description }) => (
          <SwiperSlide>
            <div
              style={{ background: `${color}` }}
              className={`w-[80%] rounded-2xl   relative`}
            >
              <h2 className="text-[300px] z-0 text-[black] font-bold filter opacity-10 absolute top-[5%] left-[1%]">
                SKYNET
              </h2>
              <img
                className="absolute z-[1] w-16 md:w-32 top-[10%] left-[5%] translate-x-[-50%] translate-y-[-50%]"
                src="/logo.png"
                alt="logo skynet"
              />
              <div className="absolute bottom-[10%] left-[2%]">
                <h2
                  style={{
                    textShadow: "1px 1px 1px black,  0 0 0.1em black",
                  }}
                  className="font-medium   text-left text-2xl md:text-6xl"
                >
                  {title}
                </h2>
                <p className="text-sm text-left md:text-base">{description} </p>
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
              <div className="absolute right-[3%] bottom-[5%]">
                <h2>SKYNET </h2>
              </div>

              <img
                className="w-[700px]  z-10 mx-auto"
                src={`${image}`}
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
