import React from "react";
import MaxWidthWrapper from "./maxWidthWrapper/MaxWidthWrapper";
import Image from "next/image";
import { motion } from "framer-motion";
import Brand1 from "../public/brand/brand_1.png";
import Brand2 from "../public/brand/brand_2.png";
import Brand3 from "../public/brand/brand_3.png";
import Brand4 from "../public/brand/brand_4.png";
import Brand5 from "../public/brand/brand_5.png";
import Brand6 from "../public/brand/brand_6.png";
import Brand7 from "../public/brand/brand_7.png";
import Brand8 from "../public/brand/brand_8.png";

const brands = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7, Brand8];

const TrustedBy = () => {
  return (
    <div className="text-center text-black py-12">
      <MaxWidthWrapper>
        <div className="bg-gray-200 p-4 md:p-8 rounded-lg">
          <motion.div 
            id="roadmap" 
            className="flex justify-center flex-col items-start text-left py-4 md:px-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Trust and Quality at Your Reach
            </motion.h1>
            <motion.p 
              className="text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Each project is an opportunity to demonstrate our quality and
              commitment. <br /> Save time by choosing our services and receive
              exceptional results at the best price.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  className="max-w-full h-auto"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default TrustedBy;
