import React from "react";
import { Layout } from "../layout/Layout";
import Link from "next/link";
import { About } from "../components/shared/landing/About";
import { Features } from "../components/shared/landing/Main";
import { features, products } from "./Data";
import { ClientSection } from "../components/shared/landing/ClientSection";
import DemoSlider from "../components/shared/landing/DemoSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Escultura",
};
export default function sculpture() {
  return (
    <Layout>
      <main className="mt-[100px] mx-auto z-0">
        <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
          <div className="text-center lg:text-start space-y-6">
            <main className="text-5xl md:text-6xl font-bold">
              <h1 className="inline">
                <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
                  Esculturas
                </span>
              </h1>
              <h2>
                para{" "}
                <span className=" bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                  la
                </span>
              </h2>

              <h2>gente gamer</h2>
            </main>
            <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
              Explora la Belleza en 3D: Esculturas Únicas a tu Alcance
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full md:w-1/3">
                Consultar
              </button>
              <Link
                href="https://api.whatsapp.com/send?phone=51978738423&text=Hola%20te%20escribo%20desde%20skynet%20%20%F0%9F%91%80%20"
                target="_blank"
                className="w-full md:w-1/3 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                Contacto
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon w-[20px] ml-5 icon-tabler icon-tabler-brand-whatsapp"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="z-0">
            <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <div className="space-y-1.5 p-6 flex flex-row items-center gap-4 pb-2">
                  <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <img
                      className="aspect-square h-full w-full"
                      alt=""
                      src="https://github.com/shadcn.png"
                    />
                  </span>
                  <div className="flex flex-col">
                    <h3 className="font-semibold tracking-tight text-lg">
                      John Doe
                    </h3>
                    <p className="text-sm text-muted-foreground">@john_doe</p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  Cada pieza ha sido cuidadosamente seleccionada para llevar la
                  belleza y la emoción a tu espacio personal.
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <div className="flex-col space-y-1.5 p-6 mt-8 flex justify-center items-center pb-2">
                  <img
                    src="https://i.pravatar.cc/150?img=58"
                    alt="user avatar"
                    className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                  />
                  <h3 className="text-2xl font-semibold leading-none tracking-tight text-center">
                    Leo Miranda
                  </h3>
                  <p className="text-sm font-normal text-primary">
                    Frontend Developer
                  </p>
                </div>
                <div className="p-6 pt-0 text-center pb-2">
                  <p>Disfruto de la creacion de esculturas en skynet</p>
                </div>
                <div className="flex items-center p-6 pt-0">
                  <div>
                    <a
                      href="https://github.com/leoMirandaa"
                      target="_blank"
                      className="inline-flex items-center justify-center whitespace-nowrap  text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                    >
                      <span className="sr-only">Github icon</span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                      >
                        <path
                          d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/leo_mirand4"
                      target="_blank"
                      className="inline-flex items-center justify-center whitespace-nowrap  text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                    >
                      <span className="sr-only">X icon</span>
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-foreground w-5 h-5"
                      >
                        <title>X</title>
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      className="inline-flex items-center justify-center whitespace-nowrap  text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                    >
                      <span className="sr-only">Linkedin icon</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-linkedin "
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="rounded-lg  bg-card text-card-foreground shadow-sm absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <img
                  className="mt-[-20px] mr-[-10px]"
                  src="escultura/bg.png"
                  alt="escultura Kratos"
                />
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <div className="flex-col p-6 space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 128 128"
                      className="w-12 fill-primary"
                    >
                      <title>Free Icons</title>
                      <g id="Layer_49" data-name="Layer 49">
                        <path
                          className="cls-1"
                          d="M62,109a23.62,23.62,0,0,1-5.73-.76,13.32,13.32,0,0,1-2.07-.71A9.7,9.7,0,0,1,51,105.18a9.6,9.6,0,0,1-1.13-1.6,5.1,5.1,0,0,1-.63-2,4.81,4.81,0,0,1,.13-1.85,5.67,5.67,0,0,1,.8-1.66,4.54,4.54,0,0,1,3.94-1.88c.46,0,.39.26.1.62a10.79,10.79,0,0,1-1.2,1.32,5.51,5.51,0,0,0-1,1.12,2.9,2.9,0,0,0-.51,1.22,2.83,2.83,0,0,0-.05,1.33,4.84,4.84,0,0,0,.64,1.48,5.59,5.59,0,0,0,1.51,1.56,11,11,0,0,0,2,1,16.87,16.87,0,0,0,5.12,1,28.47,28.47,0,0,0,3.33,0,21.14,21.14,0,0,0,5-.8,16.56,16.56,0,0,0,3.48-1.48c.25-.13.47-.28.71-.42.89-.52,1.22-.62,1.62-.47a2.14,2.14,0,0,1,.27.09c.22.11.06.62-.56,1.2a14.07,14.07,0,0,1-3.13,2.2,16,16,0,0,1-1.79.8c-.63.2-1.27.36-1.91.5a27.47,27.47,0,0,1-5.77.52Z"
                        ></path>
                        <path
                          className="cls-1"
                          d="M67.12,109.72a30,30,0,0,1-3.11.63l-1.15.15a19.19,19.19,0,0,1-4.08-.12c-.6-.08-1.2-.18-1.79-.31a5.83,5.83,0,0,1-2.17-.87c-.2-.15,0-.33.25-.44a1.56,1.56,0,0,1,1,0,16.18,16.18,0,0,0,4.28.85,12.74,12.74,0,0,0,2.75-.16,24.16,24.16,0,0,0,3-.57c.61-.15,1.21-.35,1.81-.54l1.36-.48,1.31-.56c.67-.33,1.28-.72,1.93-1.07L73,106c.53-.29.74-.31,1-.22l.14.06c.12.08,0,.31-.38.62a13.85,13.85,0,0,1-3.55,2.23,18.67,18.67,0,0,1-3,1.1Z"
                        ></path>
                        <path
                          className="cls-1"
                          d="M69.12,116.17a4.5,4.5,0,0,0,.86-1.08c.1-.15.13-.34.22-.49a18,18,0,0,0,.87-1.82c.13-.27.23-.57.34-.86a2,2,0,0,1,.66-1.1c.12-.1.25.09.38.32s.27.44.23.63a7.41,7.41,0,0,1-.71,2.15c-.25.42-.35.93-.57,1.4a8.7,8.7,0,0,1-.88,1.49,5.23,5.23,0,0,1-.78.78l-.32.27-.38.2a3.72,3.72,0,0,1-.77.33,3.42,3.42,0,0,1-.61.22,4.64,4.64,0,0,1-.64.17,1.31,1.31,0,0,1-.28,0c-.35,0-.45-.15-.48-.5,0-.08,0-.15,0-.22a.72.72,0,0,1,.36-.58c.63-.31,1.09-.41,1.54-.63a3.77,3.77,0,0,0,.94-.7Z"
                        ></path>
                        <path
                          className="cls-1"
                          d="M53.37,98.52a3.31,3.31,0,0,0-.81.42c-.09.07-.14.17-.24.25a4.46,4.46,0,0,0-.91.93,1,1,0,0,0-.13.52c0,.23.08.36-.1.54a2.13,2.13,0,0,1-.88.29c-.41.07-1-.13-1-.41a2.07,2.07,0,0,1,.13-1.28,2.6,2.6,0,0,1,.65-.93c.33-.3.48-.7.77-1A5.77,5.77,0,0,1,51.93,97a5.23,5.23,0,0,1,.79-.38c.2-.09.44-.13.65-.2s.46-.07.69-.09.37-.05.56-.05a2.84,2.84,0,0,1,.58.05.4.4,0,0,1,.23.1c.25.19.26.37.08.73a1.71,1.71,0,0,1-.13.23,1.54,1.54,0,0,1-.56.53c-.56.31-.59.4-.82.46a2.36,2.36,0,0,0-.6.22Z"
                        ></path>
                        <path
                          className="cls-1"
                          d="M36.22,81.71a49.21,49.21,0,0,1-6.29-9c-.33-.59-.62-1.2-.9-1.81a17.8,17.8,0,0,1-.8-1.85,31.33,31.33,0,0,1-2.14-13.93c.06-1,.23-2.09.36-3.13s.35-2.06.64-3.06a20.29,20.29,0,0,1,3.16-7.33c.49-.68.53-.51.29.16S29.88,43.6,29.33,45c-.25.61-.46,1.23-.65,1.86s-.33,1.28-.52,1.92a18,18,0,0,0-.45,1.93c-.12.65-.29,1.29-.36,2a31.09,31.09,0,0,0-.19,8A28.89,28.89,0,0,0,29.84,70a44.29,44.29,0,0,0,5.7,9.21,58.71,58.71,0,0,0,4.43,5,99.8,99.8,0,0,0,7.48,6.92c2,1.7,4,3.27,6.07,4.91.44.37.89.71,1.32,1.1,1.62,1.42,2,2,2.21,2.47a2.21,2.21,0,0,1,.12.32c0,.25-.7-.25-1.91-1.23-3.6-2.88-7.51-5.87-11.22-9.15a82.77,82.77,0,0,1-7.84-7.83Z"
                        ></path>
                        <path
                          className="cls-1"
                          d="M31.45,39.67a31.31,31.31,0,0,1,5.45-5.58,36.26,36.26,0,0,1,6.63-4A33.3,33.3,0,0,1,64.1,27.69c.91.18,1.83.4,2.73.67s1.79.64,2.68,1a22.87,22.87,0,0,1,8,5.93,27.22,27.22,0,0,1,5,8.49A39.66,39.66,0,0,1,84.41,63a59.78,59.78,0,0,1-1.69,8.4A77.05,77.05,0,0,1,80,79.42a80,80,0,0,1-4.59,9.85,79.92,79.92,0,0,1-5.8,9.16c-1.33,1.82-1.39,1.39-.64-.38.38-.88.93-2.12,1.62-3.59s1.5-3.18,2.45-5c1.69-3.21,3.14-6.53,4.52-9.86A76.26,76.26,0,0,0,81,69.37a44.2,44.2,0,0,0,.63-21.22,30.27,30.27,0,0,0-2.18-6.06,23.37,23.37,0,0,0-3.62-5.34,19.76,19.76,0,0,0-5-4.06,23.39,23.39,0,0,0-6-2.34,31.52,31.52,0,0,0-27.15,6.22A24.28,24.28,0,0,0,32,43.27c-.33.66-.68,1.31-1,2l-.76,2.07a34.32,34.32,0,0,0-1,4.36l-.14.83-.07.85-.13,1.69v2.54l.08.84a29.74,29.74,0,0,0,1.3,6.66,37.55,37.55,0,0,0,2.63,6.28,52.37,52.37,0,0,0,3.63,5.78c4.18,5.72,9.32,10.48,14.6,15.14,1.16,1,2.32,2,3.48,3.08,4.32,3.91,5.49,5.63,5.71,7a3.87,3.87,0,0,1,.08.89c0,.16-.12.15-.29,0s-.36-.41-.73-.77c-.69-.71-1.83-1.83-3.41-3.22-4.74-4.07-9.84-8.2-14.5-13A58.44,58.44,0,0,1,29.61,69.75a37.92,37.92,0,0,1-2.42-7.4,32,32,0,0,1-.62-7.82,33.6,33.6,0,0,1,1.3-7.73,25.94,25.94,0,0,1,3.52-7.16Z"
                        ></path>
                        <path
                          className="cls-1"
                          d="M57.3,107.39a23.41,23.41,0,0,0,7.92,0c1-.17,1.94-.44,2.87-.64a19,19,0,0,0,4.64-2,12.83,12.83,0,0,0,3.76-3.28,3.43,3.43,0,0,0,.28-3.76,6,6,0,0,0-2-1.84,15.3,15.3,0,0,0-2.61-1.25c-.57-.19-.49-.38.1-.54a4.65,4.65,0,0,1,2.94.22,7.54,7.54,0,0,1,2.9,2.11,5.67,5.67,0,0,1,.94,1.79,4.41,4.41,0,0,1,.07,2.08,7.14,7.14,0,0,1-1.73,3.32,11.69,11.69,0,0,1-2.6,2.19,31.12,31.12,0,0,1-3.48,2,19.59,19.59,0,0,1-1.88.79c-.31.12-.66.21-1,.31l-1,.21a29,29,0,0,1-8.63.71,19.64,19.64,0,0,1-5.27-1.19A12.61,12.61,0,0,1,50,106.36a7.81,7.81,0,0,1-2.32-3.53,5.91,5.91,0,0,1,0-3.41,6.7,6.7,0,0,1,1.94-2.78,9,9,0,0,1,1.18-.87,4.55,4.55,0,0,1,1.79-.65,1.23,1.23,0,0,1,.94.27,1.34,1.34,0,0,1,.31.26c.24.32-.32.79-1.25,1.38a6,6,0,0,0-2.85,3.28,3.6,3.6,0,0,0,0,1.9,5.63,5.63,0,0,0,1,1.88,11,11,0,0,0,6.51,3.25Z"
                        ></path>
                        <path
                          className="cls-1"
                          d="M54.63,102.66a17.26,17.26,0,0,0,4.6,1.17c.59.07,1.18.06,1.77.08a21.85,21.85,0,0,0,6.29-.58,13.07,13.07,0,0,0,2.62-1,11.85,11.85,0,0,0,2.77-2c.26-.24.45-.1.49.33a2.16,2.16,0,0,1-.72,1.75,13,13,0,0,1-7.37,3,37.89,37.89,0,0,1-4.79.34,18.87,18.87,0,0,1-5.25-.83,12.92,12.92,0,0,1-3-1.4,8.26,8.26,0,0,1-1.92-1.72,7.11,7.11,0,0,1-.71-1.1A2.85,2.85,0,0,1,49,99.23a3.87,3.87,0,0,1,.69-2.06,5.75,5.75,0,0,1,1.44-1.47,4.81,4.81,0,0,1,.78-.48c1.07-.48,1.56-.29,1.8.13a1.34,1.34,0,0,1,.15.29c.08.32-.27.62-.78.9a5,5,0,0,0-1.93,1.79,1.7,1.7,0,0,0-.27.91.8.8,0,0,0,.09.3c0,.11.2.35.29.53a7.08,7.08,0,0,0,3.37,2.54Z"
                        ></path>
                        <path
                          className="cls-1"
                          d="M60.39,111.81a13.18,13.18,0,0,0,4.18.23,13.75,13.75,0,0,0,1.56-.27,22.55,22.55,0,0,0,5.42-1.64,12.09,12.09,0,0,0,2.16-1.29,18.65,18.65,0,0,0,2.3-2.12c.24-.22.45-.09.56.33a1.92,1.92,0,0,1,0,.81,2.68,2.68,0,0,1-.44.9,13.29,13.29,0,0,1-6,3.88,38.18,38.18,0,0,1-4.19,1.22,17.44,17.44,0,0,1-4.84.23,13.45,13.45,0,0,1-3-.68A11.5,11.5,0,0,1,54.26,111,10.73,10.73,0,0,1,52,108.27c-.12-.24-.24-.47-.34-.71-.29-1-.12-1.31.28-1.6a2.14,2.14,0,0,1,.26-.19c.28-.15.7.14,1.07.65.54.76,1,1.48,1.55,2.14a8.56,8.56,0,0,0,1.89,1.71,10.4,10.4,0,0,0,3.67,1.49Z"
                        ></path>
                        <path
                          className="cls-1"
                          d="M71.89,116a8.26,8.26,0,0,1-2,2.11,4.18,4.18,0,0,1-1,.57,3.78,3.78,0,0,1-2,.23,5.32,5.32,0,0,1-1.76-.61c-.46-.25-.91-.5-1.34-.78-.27-.18-.55-.36-.8-.56a3.51,3.51,0,0,1-.61-.77c-.11-.18.08-.33.39-.42a1.71,1.71,0,0,1,1,0,14.14,14.14,0,0,0,2.91,1.62,2.06,2.06,0,0,0,1.75-.26,5.27,5.27,0,0,0,1.63-1.54,12.8,12.8,0,0,0,.81-1.29c.37-.69.75-1.4,1.07-2.14.25-.57.42-1.18.69-1.77.06-.13.11-.26.18-.39.29-.45.53-.5.95-.33.09,0,.18.06.25.1a.82.82,0,0,1,.34.86,13.34,13.34,0,0,1-1.19,3.06c-.39.76-.82,1.55-1.32,2.34Z"
                        ></path>
                        <path
                          className="cls-1"
                          d="M54.88,50.43a11.27,11.27,0,0,1,0-1.54l.06-.81L55,47.5c.06-.22.14-.42.2-.63a2.28,2.28,0,0,1,1.7-1.54,2.59,2.59,0,0,1,2.21.68,4.89,4.89,0,0,1,.44.47,2.59,2.59,0,0,1,.32.44,6.82,6.82,0,0,1,.41.74,10.84,10.84,0,0,1,.58,1.44,15.9,15.9,0,0,1,.69,3,20.62,20.62,0,0,1-1.84,11.56,14.49,14.49,0,0,1-1.11,1.9,10.25,10.25,0,0,1-.73.93,8.06,8.06,0,0,1-.93.81,5.94,5.94,0,0,1-4.7.9,11.15,11.15,0,0,1-3.64-1.53,15.38,15.38,0,0,1-2.95-2.44A14,14,0,0,1,43.48,61a13.19,13.19,0,0,1-1.3-3.61,6.59,6.59,0,0,1,.34-4,4.84,4.84,0,0,1,1.3-1.71A3.3,3.3,0,0,1,46,51a5.56,5.56,0,0,1,3.61,1.84,16,16,0,0,1,2.33,3c2.33,3.73,3.64,7.92,4.87,11.94a61,61,0,0,1,2,8A30,30,0,0,1,59,83.93c-.2,1.71-.46,1.44-.72,0L57.73,81c-.26-1.19-.53-2.57-.78-4.06a61.71,61.71,0,0,0-2-7.86c-.79-2.64-1.57-5.26-2.53-7.76a22.33,22.33,0,0,0-3.8-6.84,7.79,7.79,0,0,0-1.32-1.22,2.66,2.66,0,0,0-1.36-.49,1.49,1.49,0,0,0-1.12.48,3.31,3.31,0,0,0-.8,1.34,6.73,6.73,0,0,0,.5,4.3,13,13,0,0,0,2.53,4,13.34,13.34,0,0,0,3.89,2.76,5.33,5.33,0,0,0,4.21.33,4.41,4.41,0,0,0,1.74-1.46,14.17,14.17,0,0,0,1.28-2.29,18.2,18.2,0,0,0,1.36-5.16,18,18,0,0,0-.15-5.34,15,15,0,0,0-.74-2.53,7.69,7.69,0,0,0-.57-1.11,1.15,1.15,0,0,0-.47-.5.46.46,0,0,0-.64.26,1.3,1.3,0,0,0-.11.37,4,4,0,0,0-.11.75A14.08,14.08,0,0,0,57,52.26a16.47,16.47,0,0,0,.93,3.19A5.91,5.91,0,0,0,59.63,58a2.81,2.81,0,0,0,2,.41,4.5,4.5,0,0,0,2-1,8.69,8.69,0,0,0,2.66-4,5.47,5.47,0,0,0,.14-2.32,3.32,3.32,0,0,0-.85-1.92,1,1,0,0,0-1.45.09,5.81,5.81,0,0,0-1.23,2A9.82,9.82,0,0,0,62.4,53,17.79,17.79,0,0,0,62,55a31.91,31.91,0,0,0-.34,3.9,39.91,39.91,0,0,0,.59,7.8c.21,1.13.45,2.23.74,3.35.51,2.09,1,3.43,1.2,4.4a5.33,5.33,0,0,1,.22,2.1,5.43,5.43,0,0,1-.1.72c-.16.55-1.4-.9-2.51-4a40,40,0,0,1-2.19-14.83,36.34,36.34,0,0,1,.4-3.86c.12-.64.2-1.3.35-1.94l.21-1c.1-.37.21-.7.33-1a10,10,0,0,1,1-2,4.22,4.22,0,0,1,2.29-1.84,2.83,2.83,0,0,1,1.84.12,3.2,3.2,0,0,1,1.38,1,5.2,5.2,0,0,1,1.13,2.4,7.88,7.88,0,0,1-.05,3.48,10.15,10.15,0,0,1-1.4,3,10.67,10.67,0,0,1-2.22,2.39,6.26,6.26,0,0,1-3.31,1.36,5.35,5.35,0,0,1-1,0c-.33-.05-.64-.15-1-.23s-.58-.26-.86-.4a4.66,4.66,0,0,1-.83-.64,8.68,8.68,0,0,1-1.73-2.83,20,20,0,0,1-1.37-5.87Z"
                        ></path>
                        <path
                          className="cls-1"
                          d="M94.5,52.85c0,.17-.26.1-.62-.11a1.5,1.5,0,0,1-.39-.42,1.71,1.71,0,0,1,0-.38,11.77,11.77,0,0,1,.62-1,2.41,2.41,0,0,1,.56-.63,11.71,11.71,0,0,1,1.36-1,1.14,1.14,0,0,1,.36-.15,4.31,4.31,0,0,0,1.2-.53c.07,0,.14-.06.18-.16a3.35,3.35,0,0,1,1.36-.6,9.8,9.8,0,0,1,1.22,0c.06,0,.11,0,.18,0a.33.33,0,0,0,.37.13,1.73,1.73,0,0,1,.5.07,1,1,0,0,1,.25.22.66.66,0,0,1,0,.41c-.06.1,0,.23,0,.36a.57.57,0,0,1,0,.13,6.13,6.13,0,0,1-.8.71s-.28.11-.55.21a4,4,0,0,0-.61.29c-.06,0-.14,0-.21,0s-.81.46-.84.48c-.18.06-.31.2-.56.13,0,0-.08,0-.11,0a6.56,6.56,0,0,1-.89.41,2.44,2.44,0,0,0-.43.28l-.1,0a.35.35,0,0,0-.11,0,5.82,5.82,0,0,0-1,.72c-.06.06-.53.21-.6.3S94.5,52.78,94.5,52.85Z"
                        ></path>
                        <path
                          className="cls-1"
                          d="M84.86,30.57c0,.18-.27.1-.64-.12a1.48,1.48,0,0,1-.41-.43,1.94,1.94,0,0,1,0-.4c0-.07.43-.84.58-1.12a2.69,2.69,0,0,1,.53-.7c.42-.4.86-.77,1.3-1.13a.91.91,0,0,1,.34-.17,2.78,2.78,0,0,0,1.09-.65c.06-.05.12-.08.13-.18s.91-.84,1.05-.87c.37-.08.71-.21,1.06-.32.06,0,.08-.07.18,0s.29,0,.39,0a2,2,0,0,1,.45-.16,1,1,0,0,1,.35.08c.11,0,.29.31.3.35s.15.22.24.32l.1.11a4.6,4.6,0,0,1-.37,1.2s-1,.94-1.11,1.06-.15.07-.24.08-.81.75-.85.76c-.19.1-.32.29-.61.24-.06,0-.09,0-.12.05a5.22,5.22,0,0,1-1,.53c-.16.09-.29.22-.44.32a.38.38,0,0,1-.1,0,.33.33,0,0,0-.13,0,9.42,9.42,0,0,0-1,.76,6.13,6.13,0,0,0-.64.3S84.87,30.49,84.86,30.57Z"
                        ></path>
                        <path
                          className="cls-1"
                          d="M58.4,19.23c.11.16-.11.3-.5.43a1.33,1.33,0,0,1-.56,0,2.12,2.12,0,0,1-.31-.26c-.05-.05-.35-.9-.5-1.17a3.71,3.71,0,0,1-.26-.82c-.12-.56-.29-1.1-.39-1.65a1.21,1.21,0,0,1,0-.38,2.52,2.52,0,0,0-.13-1.28c0-.07,0-.15-.13-.2a2.76,2.76,0,0,1-.38-1.39,8.58,8.58,0,0,0,.19-1.22c0-.06,0-.11,0-.18s.13-.27.14-.4a2,2,0,0,1,.08-.53c.06-.1.18-.22.25-.32a.42.42,0,0,1,.31-.09c.1.06.19,0,.28-.06l.1,0a3.65,3.65,0,0,1,1.09.85s.15.34.31.7a7.8,7.8,0,0,0,.37.8c.05.08,0,.18,0,.27s.39,1.14.39,1.19c0,.24.13.47,0,.74a.16.16,0,0,0,0,.15,6.51,6.51,0,0,1,.05,1.25c0,.22,0,.42,0,.64a.84.84,0,0,1,0,.12,1,1,0,0,0,0,.14c0,.5-.06,1,0,1.5,0,.12-.2.67-.17.8S58.35,19.17,58.4,19.23Z"
                        ></path>
                        <path
                          className="cls-1"
                          d="M26,21c-.21,0-.1-.32.21-.74a2.42,2.42,0,0,1,.56-.46l.44-.06c.07,0,.8.4,1.08.48a2.35,2.35,0,0,1,.67.39l1.28.9a.78.78,0,0,1,.25.26,2.21,2.21,0,0,0,1,.78c.07,0,.12.08.22.05a3.43,3.43,0,0,1,1.25.66,11.21,11.21,0,0,0,.77.91s.11,0,.1.16.1.28.19.36a1.55,1.55,0,0,1,.35.37,1.09,1.09,0,0,1,.07.36c0,.12-.21.4-.25.42s-.15.23-.22.36a.57.57,0,0,1-.08.13,4.23,4.23,0,0,1-1.24.07L32,26.11c-.34-.14-.7-.28-.78-.3s-.13-.11-.18-.18-1.09-.43-1.13-.47-.43-.19-.52-.5c0-.05-.06-.07-.1-.09a5.07,5.07,0,0,1-1-.77,6.13,6.13,0,0,0-.51-.38s0-.07-.07-.1a.29.29,0,0,0-.08-.13c-.4-.31-.7-.73-1.12-1-.11-.06-.32-.64-.43-.72S26.1,21,26,21Z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">
                      Creacion Creativa de nuestros artistas
                    </h3>
                    <p className="text-muted-foreground text-md mt-2">
                      Nuestras creaciones pasaron por un proceso de creatividad
                      e innovacion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow"></div>
        </section>
      </main>
      <Features
        theme="primary"
        subtitle="Nuestras tazas divertidas y originales"
        title="Todo tipo de modelos de "
        stringColor="tazas"
        features={features}
      />
      <ClientSection
        image="escultura/escultura.png"
        theme="primary"
        color="#309FFF"
        title="Clientes satisfechos"
      />
      <DemoSlider tag="Arte y escultura" theme="primary" products={products} />
      <About
        title="Sobre Nosotros"
        image="/shoes/preview-woman.png"
        content="Emprendimiento de Zapatillas femeninas confeccionadas personalizadas segun el gusto del cliente"
      />
    </Layout>
  );
}
