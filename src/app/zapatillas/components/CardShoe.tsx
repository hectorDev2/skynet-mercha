import { ProductInterfaceSlider } from "@/app/types";
import React from "react";

export const CardShoe = ({
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
      className={`flex-shrink-0  my-7 h-[400px] m-6 relative overflow-hidden border-5  border-[var(--${theme})] rounded-xl max-w-xs shadow-lg`}
    >
      <div className="absolute top-0 w-full overflow-hidden leading-0">
        <svg
          data-name="Layer 1"
          className="h-[200px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          fill={`var(--${theme})`}
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="relative flex items-center justify-center">
        <div
          className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
          style={{
            background:
              "radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2",
          }}
        ></div>
        <img
          className="relative w-[300px] hover:scale-150 transition-all ease-linear hover:rotate-3"
          src={`${item.tagline}/${item.id}.png`}
          alt=""
        />
      </div>
      <div className="relative text-white px-6 pb-6 ">
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
