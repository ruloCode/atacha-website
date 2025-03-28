import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function AcmeLogo() {
  return (
    <div className={` flex flex-row items-center leading-none text-white`}>
      <Image alt="logo" src="/Atacha_logo.svg" width={28} height={28} />
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <p className="text-lg"> Atacha</p>
    </div>
  );
}
