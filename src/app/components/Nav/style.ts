import { styled } from "@stitches/react";

export const Container = styled("nav", {
  color: "$white",
  fontSize: "1.4rem",
  fontWeight: "500",
  p: {
    fontWeight: "500",
  },
  svg: {
    transition: "transform ease 0.3s",
  },
  button: {
    fontWeight: "500",
    background: "none",
    "&.active": {
      color: "$blue",
      svg: {
        transform: "rotate(180deg)",
      },
    },
  },
  "button , a": {
    transition: "all 0.6s ease",
  },
  "button:hover, a:hover": {
    filter: "brightness(0.6)",
  },
  "@lg": {
    display: "none",
  },
});
