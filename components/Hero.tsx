import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Component() {
  return (
    <section className="bg-white min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 py-12 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-12">
        <motion.div 
          className="space-y-6 md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl font-bold leading-tight tracking-tight text-[#737373] md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Visual Excellence
            <br />
            <motion.span 
              className="text-3xl md:text-4xl text-[#1a1a1a]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Make your business vision
            </motion.span>
            <br />
            <motion.span 
              className="text-3xl md:text-4xl text-[#1a1a1a]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              a reality with our
            </motion.span>
            <br />
            <motion.span 
              className="text-3xl text-[#ff644c] md:text-4xl underline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Marketing Professionals.
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-base text-[#1a1a1a] md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Effortlessly capture the essence of your business, <br /> with our team of
            experts.
          </motion.p>
          <motion.div 
            className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
              Connect with our team
            </Button>
          </motion.div>
        </motion.div>
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            alt="Two people discussing over a tablet"
            className="mt-6 rounded-lg shadow-lg md:mt-0"
            height="400"
            src="https://images.ctfassets.net/2d5q1td6cyxq/3vgbIHH34Jq6MQZvcubd2H/33eecef7f4a093dea5f914a388600aad/square-specialists-lp-rotation-designers.png"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width="600"
          />
        </motion.div>
      </div>
    </section>
  );
}
