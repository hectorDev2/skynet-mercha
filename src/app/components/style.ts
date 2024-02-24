import Background from "../assets/images/background-section-download.png";

import { keyframes, styled } from "@stitches/react";

export const ContainerAnimation = keyframes({
  "0%": {
    transform: "translateY(0)",
  },
  "100%": {
    transform: "translateY(-120%)",
  },
});

export const Container = styled("div", {
  width: "100vw",
  height: "100vh",
  display: "grid",
  placeItems: "center",
  position: "fixed",
  background: `url(${Background.src}) no-repeat center`,
  backgroundSize: "cover",
  top: 0,
  left: 0,
  backgroundColor: "$black",
  zIndex: 100000,
  animation: `${ContainerAnimation} 1s ease 2s forwards`,
  svg: {
    maxWidth: "300px",
  },
});
