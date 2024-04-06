"use client";
import { useEffect, useState } from "react";
import { About } from "../components/shared/landing/About";
import { ClientSection } from "../components/shared/landing/ClientSection";
import { Features } from "../components/shared/landing/Main";
import { features } from "../escultura/Data";
import { Hero } from "../components/shared/Hero";
import { Layout } from "../layout/Layout";
import { getTshirtsParams } from "@/utils/fetch";
import { Products } from "../components/containers/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polos Inka",
};
const GamerPage = () => {
  const [products, setProducts] = useState<any>();

  // getTshirts()
  useEffect(() => {
    getTshirtsParams(4).then((res) => {
      console.log(res);

      setProducts(res.tshirts);
    });
    return () => {
      setProducts([]);
    };
  }, []);

  return (
    <Layout>
      <Hero
        title="Polos Gamers"
        userLabel="generacion gamer"
        subtitle="explora nuestra gran variadad de modelos para gamers."
        theme="secondary"
      >
        <img src="polos/inka/inka-background.png" alt="pareja polos" />
      </Hero>
      <Features
        theme="secondary"
        subtitle="Nuestras polos divertidos y originales"
        title="Todo tipo de modelos de "
        stringColor="polos para parejas"
        features={features}
      />
      <ClientSection
        color="red"
        image="polos/inka/inka-background-2.png"
        theme="secondary"
        title="Clientes satisfechos"
      />
      <Products tshirts={products} color="black" />
      <About
        title="Sobre Nosotros"
        image="/shoes/preview-woman.png"
        content="Emprendimiento de Zapatillas femeninas confeccionadas personalizadas segun el gusto del cliente"
      />
    </Layout>
  );
};

export default GamerPage;
