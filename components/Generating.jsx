import Image from "next/image";
import { loading } from "./assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] bg-black p-4 rounded-lg ${
        className || ""
      } text-base`}
    >
      <Image className="w-5 h-5 mr-4" src={loading} alt="Loading" />
      La IA está generando una respuesta...
    </div>
  );
};

export default Generating;
