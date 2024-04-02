import React from "react";

export const Banner = ({
  children,
  image = "mario.png",
  bgImage = "https://cdn.wallpapersafari.com/87/90/GjYlhA.jpg",
}: {
  children: React.ReactNode;
  image?: string;
  bgImage?: string;
}) => {
  return (
    <>
      <section className="w-full">
        <div
          className="bg-yellow-50 h-full w-full rounded-primary relative flex flex-col gap-y-8 lg:p-24 p-8"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            alt="model"
            loading="lazy"
            decoding="async"
            data-nimg="1"
            className="w-[300px] lg:absolute bottom-0 left-0 order-2"
            style={{ color: "transparent" }}
            src={`${image}`}
          />
          <article className="flex flex-col justify-start items-end order-1">
            {children}
          </article>
        </div>
      </section>
    </>
  );
};
