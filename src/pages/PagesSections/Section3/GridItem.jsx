import React from "react";

const GridItem = ({ icon, title, desc }) => {
  return (
    <div className="border hover:-translate-y-3 duration-300 rounded-md p-5 hover:scale-100 hover:shadow-md hover:shadow-slate-300 px-4 py-4 cursor-pointer">
      <div className="flex flex-col gap-2">
        <div className="border border-blue-700 rounded-full px-2 py-2 w-[40px] md:w-[50px] object-cover">{icon}</div>
        <div>
          <h1 className="font-bold md:text-[20px] sm:text-base text-[15px]">{title}</h1>
        </div>
        <div>
          <p className="text-gray-400 text-[10px] sm:flex sm:text-xs md:text-xs whitespace-pre-wrap">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
