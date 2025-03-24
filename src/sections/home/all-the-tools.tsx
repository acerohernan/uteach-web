import React from "react";

export const HomeAllTheTools = (): React.ReactElement => {
  return (
    <div className="relative my-12 lg:my-20 -mx-4">
      <div className="mx-4 relative z-10">
        {/* Subtitle */}
        <div className="relative">
          {/* Mobile line */}
          <img
            className="absolute top-[24px] left-[75px] lg:hidden w-[55px]"
            src="/images/title-line.svg"
            alt="title line"
          />
          <h2 className="text-[24px] font-bold relative z-10">All the tools that you need</h2>
        </div>
        <p className="mt-6">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu
          imperdiet ipsum ultrices amet, dui sit suspendisse.
        </p>
        <img className="w-full mt-8" src="/images/uteach-page-2.svg" alt="title line" />
      </div>
      <div className="ml-4 relative z-10">
        <img className="w-full mt-8" src="/images/uteach-tools.svg" alt="title line" />
      </div>
      {/* Background */}
      <div className="absolute w-full h-full top-0 z-0">
        <img className="w-auto absolute left-[0px] top-[197px]" src="/images/bg-tools-1.svg" alt="title line" />
        <img className="w-auto absolute right-[0px] top-[41px]" src="/images/bg-tools-2.svg" alt="title line" />
      </div>
    </div>
  );
};
