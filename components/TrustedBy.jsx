import React from "react";
import MaxWidthWrapper from "./maxWidthWrapper/MaxWidthWrapper";
import Image from "next/image";
import Brand1 from "../public/brand/brand_1.png";
import Brand2 from "../public/brand/brand_2.png";
import Brand3 from "../public/brand/brand_3.png";
import Brand4 from "../public/brand/brand_4.png";
import Brand5 from "../public/brand/brand_5.png";
import Brand6 from "../public/brand/brand_6.png";
import Brand7 from "../public/brand/brand_7.png";
import Brand8 from "../public/brand/brand_8.png";

const TrustedBy = () => {
  return (
    <div className="text-center  text-black py-12">
      <MaxWidthWrapper>
        <div className="bg-gray-200 p-4 md:p-8 rounded-lg">
         <div id="roadmap" className="flex justify-center flex-col items-start text-left py-4 md:px-8 px-4">
             <h1 className="text-3xl font-bold mb-4">
               Trust and Quality at Your Reach
             </h1>
             <p className="text-gray-600 mb-8">
               Each project is an opportunity to demonstrate our quality and
               commitment. <br /> Save time by choosing our services and receive
               exceptional results at the best price.
             </p>
         </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 items-center   ">
            <Image
              src={Brand1}
              alt="99designs logo"
              className="mx-auto"
            />
            <Image
              src={Brand2}
              alt="99designs logo"
              className="mx-auto"
            />
            <Image
              src={Brand3}
              alt="99designs logo"
              className="mx-auto"
            />
            <Image
              src={Brand4}
              alt="99designs logo"
              className="mx-auto"
            />
            <Image
              src={Brand5}
              alt="99designs logo"
              className="mx-auto"
            />
            <Image
              src={Brand6}
              alt="99designs logo"
              className="mx-auto"
            />
            <Image
              src={Brand7}
              alt="99designs logo"
              className="mx-auto"
            />
            <Image
              src={Brand8}
              alt="99designs logo"
              className="mx-auto"
            />
            
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default TrustedBy;
