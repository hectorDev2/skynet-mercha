"use client";
import { JacketIcon, ShoeIcon, TshirtIcon } from "@/app/assets/icons";
import { Button } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import Link from "next/link";

const sidebarLinks = [
  {
    title: "Agregar Polo",
    href: "/dashboard/tshirts",
    icon: TshirtIcon(),
  },
  {
    title: "lista de polos",
    href: "/dashboard/tshirts/list",
    icon: TshirtIcon(),
  },
  {
    title: "Agregar Zapatilla",
    href: "/dashboard/shoes",
    icon: ShoeIcon(),
  },
  {
    title: "lista de zapatillas",
    href: "/dashboard/shoes/list",
    icon: ShoeIcon(),
  },
  {
    title: "Agregar casaca",
    href: "/dashboard/jackets",
    icon: JacketIcon(),
  },
  {
    title: "lista de Casacas",
    href: "/dashboard/jackets/list",
    icon: JacketIcon(),
  },
];

const Sidebar = async () => {
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {sidebarLinks.map(({ title, icon, href }) => (
              <Link
                href={`${href}`}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                {icon}
                <span className="ms-3">{title}</span>
              </Link>
            ))}
            <li onClick={() => signOut()}>
              <Button
                type="button"
                className="flex w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currently"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-logout"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                  <path d="M9 12h12l-3 -3" />
                  <path d="M18 15l3 -3" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Salir</span>
              </Button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
