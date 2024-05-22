import React from "react";
import MaxWidthWrapper from "./maxWidthWrapper/MaxWidthWrapper";

export const Alfa = () => {
  return (
    <div className="px-4 md:px-0 py-12 flex flex-col items-between justify-center  bg-black   ">
      <MaxWidthWrapper >
        <h1 className="text-4xl font-semibold mb-12 text-left py-4">
          Potencia tu negocio.
        </h1>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0  md:justify-between gap-4">
          <div className="bg-gray-800 p-6 rounded-lg ">
            <img
              src="https://images.ctfassets.net/2d5q1td6cyxq/39El2vAcwSNhvPtd41NPmt/b9a8a8360ce439246e5c433595654c78/PD04292_-_Work_with_experts_Prettybird_Office.png?w=1140&h=712&fm=avif&q=85&fit=scale"
              alt="Two people discussing work with laptops"
              className="rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">
              Trabaja con Expertos Creativos.
            </h2>
            <p className="text-gray-400 mb-4">
              Ofrecemos soluciones audiovisuales que impulsan resultados.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg  overflow-hidden">
            <img
              src="https://images.ctfassets.net/2d5q1td6cyxq/76bK2W2yhOwot6o02Xip3Z/33b2dea141ca52d461404ff0c3edd2de/PD04293_-_USEN_Joao_Muchacho_Macbook_Sales_Summary.png?w=1140&h=712&fm=avif&q=85&fit=scale"
              alt="Two people discussing work with laptops"
              className="rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">
              Desarrollo y Soporte Personalizado.
            </h2>
            <p className="text-gray-400 mb-4">
              De la mano con tu negocio, garantizamos logros excepcionales.
            </p>
          </div>
        </div>
        
      </MaxWidthWrapper>
    </div>
  );
};

export default Alfa;
