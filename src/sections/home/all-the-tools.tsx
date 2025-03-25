import React from "react";

export const HomeAllTheTools = (): React.ReactElement => {
  return (
    <div className="lg:bg-[var(--blue-gray-100)]">
      <div className="home-container relative my-12 lg:my-20 -mx-4 ">
        <div className="mx-4 relative z-10">
          {/* Subtitle */}
          <div className="relative">
            {/* Mobile line */}
            <img
              className="absolute top-[24px] left-[75px] w-[55px] lg:w-[130px] lg:top-[54px] lg:mx-auto lg:left-0 lg:right-45"
              src="/images/title-line.svg"
              alt="title line"
            />
            <h2 className="text-[24px] font-bold relative z-10 lg:text-[56px] lg:text-center">
              All the tools that you need
            </h2>
          </div>
          <p className="mt-6 lg:text-[20px] lg:text-center lg:max-w-[850px] lg:mx-auto">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu
            imperdiet ipsum ultrices amet, dui sit suspendisse.
          </p>
        </div>
        {/* Image and background containter */}
        <div className="relative lg:hidden">
          <img className="w-full p-4 z-10 relative" src="/images/uteach-page-2.svg" alt="title line" />
          <img className="-mt-4 w-[19%] ml-[34.6%]" src="/images/tools-line.svg" alt="title line" />
          <img className="w-full pl-4" src="/images/uteach-tools.svg" alt="title line" />
          {/* Background */}
          <img className="w-[30%] absolute top-0 left-0" src="/images/bg-tools-1.svg" alt="title line" />
          <img className="w-[32.56%] absolute right-0 top-[-47%]" src="/images/bg-tools-2.svg" alt="title line" />
        </div>
      </div>
    </div>
  );
};
