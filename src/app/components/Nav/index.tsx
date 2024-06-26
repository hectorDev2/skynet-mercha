import { Container } from "./style";
import { forwardRef, Fragment } from "react";
import Link from "next/link";
import React from "react";
import { useMenu } from "@/hooks/useMenu";

interface NavProps {
  handleExpandMenu: (expanded: boolean) => void;
  handleSelectMenu: (
    type: "games" | "varios" | "shoes" | "jackets" | null
  ) => void;
  selectedMenu: "games" | "varios" | "shoes" | "jackets" | null;
  menuExpanded: boolean;
}

const Nav = forwardRef<null, NavProps>(
  ({ handleExpandMenu, handleSelectMenu, menuExpanded, selectedMenu }, ref) => {
    const { Links } = useMenu();

    return (
      <Container
        className="gap-[10px] w-[100%] md:gap-10 flex justify-evenly flex-wrap"
        ref={ref}
      >
        {Links?.map((link) => (
          <Fragment key={link.label}>
            {link.isDropdown ? (
              <button
                className={`text-lg md:text-2xl flex gap-2   items-center ${
                  selectedMenu === link.id ? "active" : ""
                }`}
                onClick={() => {
                  if (selectedMenu === link.id && menuExpanded) {
                    handleExpandMenu(false);
                  } else if (!menuExpanded && selectedMenu !== link.id) {
                    handleExpandMenu(true);
                  }
                  handleSelectMenu(
                    link.id === selectedMenu
                      ? null
                      : (link.id as NavProps["selectedMenu"])
                  );
                }}
              >
                <p className="">{link.label}</p>
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.6"
                    d="M1 1L6 6L11 1"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            ) : (
              <Link href={link.href as string}>{link.label}</Link>
            )}
          </Fragment>
        ))}
      </Container>
    );
  }
);

Nav.displayName = "Nav";
export { Nav };
