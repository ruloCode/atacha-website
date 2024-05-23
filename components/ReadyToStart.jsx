import React from "react";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "./maxWidthWrapper/MaxWidthWrapper";

const ReadyToStart = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col lg:flex-row items-center justify-center h-screen bg-white p-4 lg:p-0 gap-4">
        <div className="order-2 lg:order-1 lg:text-left lg:mr-8 text-center md:text-left">
          <h1 className="text-4xl font-bold text-black mb-6">
            ¿Listo para destacar <br /> con nuestros servicios?
          </h1>
          <div className="flex flex-col md:flex-row  gap-2 items-center justify-center">
            <Button className="bg-blue-600 text-white  rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
              Explora nuestros servicios
            </Button>
            <Button className="bg-gray-100 text-gray-900   rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50">
              Conéctate con nuestro equipo
            </Button>
          </div>
        </div>
        <div className="order-1 lg:order-2 mb-8 lg:mb-0">
          <img
            className="rounded-lg w-full lg:w-auto"
            src="https://images.ctfassets.net/2d5q1td6cyxq/14AjhCg4Oqrzyr8gtN2bYs/f4b4d4ce441573bd267c19cdadcad0fd/PD04295_-_USEN_Prettybird_Laptop_Website_Builder.png?w=1170&h=782&fm=avif&q=85&fit=scale"
            alt="A person showing a laptop screen to another person in a business setting"
          />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ReadyToStart;
