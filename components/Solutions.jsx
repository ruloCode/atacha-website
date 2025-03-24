import React from "react";
import MaxWidthWrapper from "./maxWidthWrapper/MaxWidthWrapper";
import Solutions1 from "../public/svgs/solution_1.svg";
import Solutions2 from "../public/svgs/solution_2.svg";
import Solutions3 from "../public/svgs/solution_3.svg";
import Solutions4 from "../public/svgs/solution_4.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export const Solutions = () => {
  const solutions = [
    {
      icon: Solutions1,
      title: "Audiovisual Production",
      description: "Enhance your brand presence with videos, photos, and stunning drone footage.",
    },
    {
      icon: Solutions2,
      title: "Integrated Marketing",
      description: "Boost your results with SEO, social media, and digital marketing strategies.",
    },
    {
      icon: Solutions3,
      title: "Branding and Web",
      description: "Creation and redesign of websites that reflect your corporate identity.",
    },
    {
      icon: Solutions4,
      title: "Innovative Development",
      description: "Development of custom apps and chatbots to enhance customer experience.",
    },
  ];

  return (
    <div className="py-12 flex flex-col items-center px-4">
      <MaxWidthWrapper>
        <motion.h1 
          id="solutions" 
          className="text-2xl font-bold text-center mb-12 relative text-black py-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Solutions to Drive Your Company&apos;s Growth
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-black">
          {solutions.map((solution, index) => (
            <motion.div 
              key={solution.title}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
              >
                <Image
                  src={solution.icon}
                  alt={`Icon representing ${solution.title.toLowerCase()}`}
                  className="mb-4"
                />
              </motion.div>
              <motion.h2 
                className="text-lg font-bold mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
              >
                {solution.title}
              </motion.h2>
              <motion.p 
                className="text-gray-600 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
              >
                {solution.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Solutions;
