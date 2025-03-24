import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Component() {
  return (
    <section className="bg-white min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 py-12 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-12">
        <div className="space-y-6 md:w-1/2">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#737373] md:text-5xl">
            Visual Excellence
            <br />
            <span className="text-3xl md:text-4xl text-[#1a1a1a]">
              Make your business vision
            </span>
            <br />
            <span className="text-3xl md:text-4xl text-[#1a1a1a]">
              a reality with our
            </span>
            <br />
            <span className="text-3xl text-[#ff644c] md:text-4xl underline">
              Marketing Professionals.
            </span>
          </h1>
          <p className="text-base text-[#1a1a1a] md:text-lg">
            Effortlessly capture the essence of your business, <br /> with our team of
            experts.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
              Connect with our team
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
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
        </div>
      </div>
    </section>
  );
}
