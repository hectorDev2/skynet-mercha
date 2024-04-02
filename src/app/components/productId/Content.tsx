/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ProductGallery } from "./ProductGallery";
import { ProductInfo } from "./ProductInfo";
import { tShirt } from "../../../types/index";

export const Content = ({ tShirt }: { tShirt: tShirt }) => {
  return (
    <main>
      {/* <!-- product section --> */}
      <section className="section-center product-section my-[150px] text-white">
        <section className="product-component">
          {/* <!-- image gallery --> */}
          <ProductGallery images={tShirt?.images} />
          {/* <!--product description --> */}
          <ProductInfo info={tShirt} />
        </section>
      </section>
      {/* <!-- end of product section --> */}
    </main>
  );
};
