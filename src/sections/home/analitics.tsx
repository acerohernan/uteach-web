import { analitycsList } from "@/constants/analytics";
import { formatToKebabCase } from "@/lib/format";
import React from "react";

export const HomeAnalitics = (): React.ReactElement => {
  return (
    <div className="bg-[var(--blue-gray-900)]">
      <div className="home-container grid gap-12 py-12 lg:py-20 lg:grid-cols-3">
        {analitycsList.map((item) => (
          <div className="w-full grid gap-2 text-center" key={formatToKebabCase(item.title)}>
            <img src={item.icon} alt={`${item.title}-icon`} className="w-16 h-16 mx-auto" />
            <h3 className="text-[48px] leading-14 text-[var(--yellow-400)] font-extrabold lg:text-[72px] lg:leading-20">
              {item.title}
            </h3>
            <span className="leading-6 text-[var(--yellow-400)] lg:text-[24px]">{item.description}</span>
          </div>
        ))}
      </div>
      ;
    </div>
  );
};
