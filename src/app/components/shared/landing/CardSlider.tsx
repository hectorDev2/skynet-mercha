import { ProductInterfaceSlider } from "@/app/types";
import React from "react";

export const CardSlider = ({
  theme,
  item,
  tag,
}: {
  theme: string;
  item: ProductInterfaceSlider;
  tag: string;
}) => {
  return (
    <div
      className={`flex-shrink-0 my-7 h-[400px] m-6 relative overflow-hidden border-5  border-[var(--${theme})] rounded-xl max-w-xs shadow-lg`}
    >
      <svg
        className="absolute bottom-0 left-0 mb-8"
        viewBox="0 0 375 283"
        fill="none"
        style={{ transform: "scale(1.5) opacity: 0.1" }}
      >
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>
      <div className="relative pt-10 px-10 flex items-center justify-center">
        <div
          className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
          style={{
            background:
              "radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2",
          }}
        ></div>
        <img
          className="relative w-56 h-[260px] hover:scale-125 transition-all ease-linear hover:rotate-3"
          src={`${item.tagline}/carousel/${item.id}.png`}
          alt=""
        />
      </div>
      <div className="relative text-white px-6 pb-6 mt-6">
        <span className="block opacity-75 -mb-1">{tag}</span>
        <div className="flex justify-between">
          <span className="block font-semibold text-xl">{item.title}</span>
          <span className=" bg-white rounded-full text-[var(--${theme})] text-xs font-bold px-3 leading-none flex items-center">
            {item.tagline}
          </span>
        </div>
      </div>
    </div>
  );
};
