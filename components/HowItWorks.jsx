import React from "react";
import MaxWidthWrapper from "./maxWidthWrapper/MaxWidthWrapper";

const HowItWorks = () => {
  return (
    <div className="py-12 px-4 md:px-0">
      <MaxWidthWrapper>
        <div className="text-left">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Conoce Nuestro Proceso
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Nuestro enfoque está diseñado para proporcionarte resultados
            excepcionales.
          </p>
        </div>
        <div className="mt-10">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="relative flex flex-col">
              <div>
                <div className=" flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                  <span className="text-xl font-bold">1</span>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Contáctanos
                </p>
              </div>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Inicia una conversación con nuestro equipo para discutir tus
                necesidades y expectativas.
              </dd>
            </div>
            <div className="relative">
              <div>
                <div className=" flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                  <span className="text-xl font-bold">2</span>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Desarrollamos la Estrategia
                </p>
              </div>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Colabora con nuestro equipo para desarrollar una estrategia
                personalizada que se ajuste a tus necesidades.
              </dd>
            </div>
            <div className="relative">
              <div>
                <div className=" flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                  <span className="text-xl font-bold">3</span>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Impulsa tu Crecimiento.
                </p>
              </div>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Observa cómo nuestra colaboración logra un crecimiento notable y
                sostenible en tu negocio.
              </dd>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HowItWorks;
