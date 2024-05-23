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
        <h1 className="text-2xl font-bold text-center mb-12 relative text-black py-12">
          Soluciones para Impulsar el Crecimiento de tu Empresa.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-black">
          <div className="flex flex-col items-center text-center ">
            <Image
              src={Solutions1}
              alt="Icon representing online store setup"
              className="mb-4"
            />
            <h2 className="text-lg font-bold mb-2 ">Producción Audiovisual</h2>
            <p className="text-gray-600 mb-4">
              Mejora la presencia de tu marca con videos, fotos y tomas de drone
              impactantes.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src={Solutions2}
              alt="Icon representing marketing and search"
              className="mb-4"
            />
            <h2 className="text-lg font-bold mb-2">Marketing Integral</h2>
            <p className="text-gray-600 mb-4">
              Incrementa tus resultados con SEO, redes sociales y estrategias de
              marketing digital.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src={Solutions3}
              alt="Icon representing branding and web design"
              className="mb-4"
            />
            <h2 className="text-lg font-bold mb-2">Branding y Web</h2>
            <p className="text-gray-600 mb-4">
              Creación y rediseño de sitios web que reflejan tu identidad
              corporativa.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src={Solutions4}
              alt="Icon representing custom development"
              className="mb-4"
            />
            <h2 className="text-lg font-bold mb-2">Desarrollo Innovador</h2>
            <p className="text-gray-600 mb-4">
              Desarrollo de apps y chatbots personalizados para mejorar la
              experiencia del cliente.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center py-8">
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-bold rounded ">
            Explorar Todos los Servicios
          </button>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Solutions;
