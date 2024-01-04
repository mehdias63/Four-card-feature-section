import React from "react";

export default function Card({ title, icon, description, color }) {
  return (
    <div className="count"> 
      <div
        className="w-[19.4375rem] h-[13.875rem] bg-[#FFF] px-7 py-[1.69rem] mt-8 border-t-[0.222rem] text-left shadow-2xl rounded-md md:w-[ 21.875rem] md:h-[15.625rem]"
        style={{ borderColor: color }}
      >
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="mb-4 text-[#8d8d97] text-[0.8125rem] mt-2">
          {description}
        </p>
        <img src={icon} alt={title} className="ml-[12rem] mt-8 md:mt-12" />
      </div>
    </div>
  );
}
