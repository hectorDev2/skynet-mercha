"use client"; // <===== REQUIRED
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import { A11y, Navigation, Pagination } from "swiper/modules";
import SlideNavButtons from "@/app/components/shared/landing/SlideNavButtons";
import { CardShoe } from "./CardShoe";
import { ProductInterfaceSlider } from "@/app/types";

const SliderShoes = ({
  products,
  theme = "secondary",
  tag,
}: {
  products: ProductInterfaceSlider[];
  theme: string;
  tag: string;
}) => {
  return (
    <div className="my-7">
      <h1 className="text-center">
        Nuestros <span className={`text-[var(--${theme})]`}>trabajos</span>{" "}
      </h1>
      <Swiper
        loop={true}
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        spaceBetween={15}
        breakpoints={{
          480: { slidesPerView: 2 },
          740: { slidesPerView: 3 },
          1275: { slidesPerView: 3 },
        }}
      >
        {products?.map((item: ProductInterfaceSlider) => (
          <SwiperSlide
            key={item.id}
            className=" !flex justify-center items-center"
          >
            <CardShoe tag={tag} theme={theme} item={item} />
          </SwiperSlide>
        ))}

        <SlideNavButtons theme={theme} />
      </Swiper>
    </div>
  );
};

export default SliderShoes;
