import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className=" bg-[#130921]  flex items-center justify-between w-full">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image alt="logo" src="./assets/Atacha_logo.svg" fill />
        </div>

        <h1 className="text-2xl font-bold text-white">Atacha IA</h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href="/">
          <Button variant="outline" className="rounded-full">
            Contacto
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
