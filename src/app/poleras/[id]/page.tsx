"use client";
import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Content } from "../../components/productId/Content";
import { tShirt } from "@/types";

import { useEffect, useState } from "react";
import { getJacketId } from "@/utils/fetch";

export default async function Home({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<tShirt>();

  const { id } = params;

  useEffect(() => {
    getJacketId(id).then((res: any) => {
      setProduct(res.jacket);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Skynet {product?.name}</title>
      </Head>
      <main>
        <Header />
        {product && (
          <div className="text-center mt-[100px] md:mt-[200px] mb-[120px]">
            <Content tShirt={product} />
            <img
              className="absolute bottom-0 opacity-10 right-0 z-[-1]"
              src={`/categories/${product?.id}.png`}
              alt={`image ${product?.name}`}
            />
          </div>
        )}
        <Footer />
      </main>
    </>
  );
}
