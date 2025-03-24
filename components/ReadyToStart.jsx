import React from "react";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "./maxWidthWrapper/MaxWidthWrapper";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const ReadyToStart = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col lg:flex-row items-center justify-center h-screen bg-white p-4 lg:p-0 gap-4">
        <motion.div 
          className="order-2 lg:order-1 lg:text-left lg:mr-8 text-center md:text-left min-w-[400px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl font-bold text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to stand out <br /> with our services?
          </motion.h1>
          <br />
          <motion.div 
            className="flex flex-col md:flex-row gap-2 items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="https://api.whatsapp.com/send?phone=573007438588&text=Hi%2C+I+want+to+know+more+about+Atacha%27s+online+services" target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                Connect with our team
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div 
          className="order-1 lg:order-2 mb-8 lg:mb-0 max-w-[400px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: .8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: .8 }}
          >
            <Image
              className="rounded-lg w-full lg:w-auto"
              src="https://images.ctfassets.net/2d5q1td6cyxq/14AjhCg4Oqrzyr8gtN2bYs/f4b4d4ce441573bd267c19cdadcad0fd/PD04295_-_USEN_Prettybird_Laptop_Website_Builder.png?w=1170&h=782&fm=avif&q=85&fit=scale"
              alt="A person showing a laptop screen to another person in a business setting"
              width={1170}
              height={782}
            />
          </motion.div>
        </motion.div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ReadyToStart;
