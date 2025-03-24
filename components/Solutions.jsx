import React from "react";
import MaxWidthWrapper from "./maxWidthWrapper/MaxWidthWrapper";
import Solutions1 from "../public/svgs/solution_1.svg";
import Solutions2 from "../public/svgs/solution_2.svg";
import Solutions3 from "../public/svgs/solution_3.svg";
import Solutions4 from "../public/svgs/solution_4.svg";
import Image from "next/image";

export const Solutions = () => {
  return (
    <div className="py-12 flex flex-col items-center px-4 ">
      <MaxWidthWrapper>
        <h1 id="solutions" className="text-2xl font-bold text-center mb-12 relative text-black py-12">
          Solutions to Drive Your Company&apos;s Growth
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-black">
          <div className="flex flex-col items-center text-center ">
            <Image
              src={Solutions1}
              alt="Icon representing online store setup"
              className="mb-4"
            />
            <h2 className="text-lg font-bold mb-2 ">Audiovisual Production</h2>
            <p className="text-gray-600 mb-4">
              Enhance your brand presence with videos, photos, and stunning drone footage.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src={Solutions2}
              alt="Icon representing marketing and search"
              className="mb-4"
            />
            <h2 className="text-lg font-bold mb-2">Integrated Marketing</h2>
            <p className="text-gray-600 mb-4">
              Boost your results with SEO, social media, and digital marketing strategies.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src={Solutions3}
              alt="Icon representing branding and web design"
              className="mb-4"
            />
            <h2 className="text-lg font-bold mb-2">Branding and Web</h2>
            <p className="text-gray-600 mb-4">
              Creation and redesign of websites that reflect your corporate identity.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src={Solutions4}
              alt="Icon representing custom development"
              className="mb-4"
            />
            <h2 className="text-lg font-bold mb-2">Innovative Development</h2>
            <p className="text-gray-600 mb-4">
              Development of custom apps and chatbots to enhance customer experience.
            </p>
          </div>
        </div>
      
      </MaxWidthWrapper>
    </div>
  );
};

export default Solutions;
