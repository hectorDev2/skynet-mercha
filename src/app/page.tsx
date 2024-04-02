import Head from "next/head";
import { Download } from "./components/containers/Download";
import { Hero } from "./components/containers/Hero";
import { Layout } from "./layout/Layout";
import { Banner } from "./components/shared/Banner";
import { ProductContainer } from "./components/ProductContainer";

export default async function Home() {
  return (
    <Layout>
      <Head>
        <title>Skynet M</title>
      </Head>
      <main>
        <Hero />
        <ProductContainer />
        <Banner
          image="mario.png"
          bgImage="https://cdn.wallpapersafari.com/87/90/GjYlhA.jpg"
        >
          <div className="flex flex-col gap-y-4 z-50  ">
            <h1 className="md:text-6xl drop-shadow-lg text-4xl">
              Especiales ofertas por lanzamiento
            </h1>
            <p className="flex flex-row gap-x-0.5 items-center text-lg text-[#04ADFF]">
              Exclusivos para gente gammer
            </p>
            <button className="px-8 py-4 border border-black rounded-secondary bg-black hover:bg-black/90 text-white transition-colors drop-shadow w-fit mt-4">
              Descubre nuestros modelos
            </button>
          </div>
        </Banner>
        <Download />
      </main>
    </Layout>
  );
}
