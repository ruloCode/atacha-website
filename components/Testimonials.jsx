import React from "react";
import MaxWidthWrapper from "./maxWidthWrapper/MaxWidthWrapper";

const Testimonials = () => {
  return (
    <div className="px-4 md:px-0 flex items-center justify-center bg-black py-12 ">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row items-between justify-center md:items-center">
          <div className="md:w-1/2 ">
            <img
              src="https://images.ctfassets.net/2d5q1td6cyxq/57sNyREY4sbPu4sWX1qvr5/be56d2e8f1742ae707e87dc4808f8da4/PD03546_-_peasant_pie_quote.png?w=1120&h=840&fm=avif&q=85&fit=scale"
              alt="A wooden board with baked pies, herbs, and baking tools"
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 p-4 text-white">
            <p className="text-xl md:text-2xl lg:text-3xl font-light mb-4">
              “La experiencia con este equipo ha sido excelente. Transformaron
              nuestro branding y nos ayudaron a crecer en ventas con contenido
              audiovisual. Seguimos trabajando de la mano y contamos siempre con
              ellos para futuros proyectos.”
            </p>
            <p className="text-sm md:text-base lg:text-lg font-light">
              Álvaro y Leopoldo Pérez, dueños de Clandestine
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Testimonials;
