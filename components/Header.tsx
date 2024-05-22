"use client";
import React, { useState } from "react";

import { usePathname, useRouter } from "next/navigation";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import LOGO from "../public/Atacha_logo.svg";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "./assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-black lg:bg-white lg:backdrop-blur-sm text-black ${
        openNavigation ? "bg-white" : "bg-white backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="w-[12rem] xl:mr-8 flex items-center gap-2" href="#hero">
          <Image src={LOGO} width={42} height={42} alt="Brainwave" />

          <h1 className="text-2xl font-bold">Atacha</h1>
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-white lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-black transition-colors hover:text-black ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname
                    ? "z-2 lg:text-black"
                    : "lg:text-black/50"
                } lg:leading-5 lg:hover:text-black xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <Link
          href="/sign-up"
          className="button hidden mr-8 text-black/50 transition-colors hover:text-black lg:block"
        >
          Crea tu cuenta
        </Link>

        <button
          onClick={() => {
            router.push("/dashboard");
          }}
          className="button hidden mr-8 text-black/50 transition-colors hover:text-black lg:block"
        >
          Ingresa
        </button>

        <Button
          className="ml-auto lg:hidden "
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
