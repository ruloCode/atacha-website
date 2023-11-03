import Image from "next/image";

import styles from "./ui/global.module.css";
import HeroImage from "../public/hero-desktop.png";
import HeroImageMobile from "../public/hero-mobile.png";

import Link from "next/link";
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Rulo testing Next.js 14.</strong> This is the
            example for the{" "}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src={HeroImage}
            alt="hero"
            width={1000}
            height={760}
            className="hidden md:block"
          />
          <Image
            src={HeroImageMobile}
            alt="hero"
            width={1000}
            height={760}
            className="block md:hidden"
          />
          {/* Add Hero Images Here */}
        </div>
      </div>
    </main>
  );
}
