import React from "react";
import MaxWidthWrapper from "./maxWidthWrapper/MaxWidthWrapper";

const HowItWorks = () => {
  return (
    <div className="py-12 px-4 md:px-0">
      <MaxWidthWrapper>
        <div className="text-left">
          <h2  id="how-to-use" className="text-3xl font-extrabold text-gray-900">
            Get to Know Our Process
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Our approach is designed to provide you with exceptional results.
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
                  Contact Us
                </p>
              </div>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Start a conversation with our team to discuss your needs and expectations.
              </dd>
            </div>
            <div className="relative">
              <div>
                <div className=" flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                  <span className="text-xl font-bold">2</span>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  We Develop the Strategy
                </p>
              </div>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Collaborate with our team to develop a customized strategy that fits your needs.
              </dd>
            </div>
            <div className="relative">
              <div>
                <div className=" flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                  <span className="text-xl font-bold">3</span>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Drive Your Growth
                </p>
              </div>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Watch as our collaboration achieves remarkable and sustainable growth for your business.
              </dd>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HowItWorks;
