import React from "react";
import MaxWidthWrapper from "./maxWidthWrapper/MaxWidthWrapper";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Contact Us",
    description: "Start a conversation with our team to discuss your needs and expectations.",
  },
  {
    number: "2",
    title: "We Develop the Strategy",
    description: "Collaborate with our team to develop a customized strategy that fits your needs.",
  },
  {
    number: "3",
    title: "Drive Your Growth",
    description: "Watch as our collaboration achieves remarkable and sustainable growth for your business.",
  },
];

const HowItWorks = () => {
  return (
    <div className="py-12 px-4 md:px-0">
      <MaxWidthWrapper>
        <motion.div 
          className="text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 id="how-to-use" className="text-3xl font-extrabold text-gray-900">
            Get to Know Our Process
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Our approach is designed to provide you with exceptional results.
          </p>
        </motion.div>
        <div className="mt-10">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            {steps.map((step, index) => (
              <motion.div 
                key={step.number}
                className="relative flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <span className="text-xl font-bold">{step.number}</span>
                  </div>
                  <motion.p 
                    className="ml-16 text-lg leading-6 font-medium text-gray-900"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                  >
                    {step.title}
                  </motion.p>
                </motion.div>
                <motion.dd 
                  className="mt-2 ml-16 text-base text-gray-500"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
                >
                  {step.description}
                </motion.dd>
              </motion.div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HowItWorks;
