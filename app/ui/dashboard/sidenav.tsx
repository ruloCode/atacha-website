import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import { UserButton } from "@clerk/nextjs";

import AcmeLogo from "@/app/ui/acme-logo";
import { PowerIcon } from "@heroicons/react/24/outline";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col p-2  md:px-2  ">
      <div className="flex justify-between items-center">
        <Link
          className=" flex h-20  justify-start rounded-md items-center "
          href="/"
        >
          <div className="w-32 text-white ">
            <AcmeLogo />
          </div>
        </Link>
        <div className="md:hidden flex items-center">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      <div className=" hidden md:flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div> */}
        <form>
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <UserButton afterSignOutUrl="/" />
          </button>
        </form>
      </div>
    </div>
  );
}
