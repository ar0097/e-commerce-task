"use client";
import { electronicsData } from "@/components/data/Data";
import Image from "next/image";
import React, { useState, useRef } from "react";

function Category() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handlescrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 500;
    }
  };

  const handlescrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 500;
    }
  };

  return (
    <div className="my-4 mx-4 bg-slate-100">
      <div className="">
        {electronicsData.map((data, idx) => {
          return (
            <div key={idx} className="bg-white px-5 relative">
              <div>
                <h1 className="text-2xl py-3">{data.category}</h1>
              </div>
              <div
                className="flex gap-4 overflow-hidden scroll-smooth"
                ref={containerRef}
              >
                {data.items.map((ele, idx) => {
                  return (
                    <div
                      key={idx}
                      className="min-w-[200px] border-[1px] border-gray-200 rounded-md flex justify-between items-center flex-col p-1"
                    >
                      <div className="w-[180px] m-auto">
                        {/*eslint-disable-next-line @next/next/no-img-element*/}
                        <img src={ele.img} alt={ele.alt} className=" m-auto" />
                      </div>
                      <div className="text-center">
                        <h1>
                          {ele.title.length > 16
                            ? ele.title.slice(0, 18) + "..."
                            : ele.title}
                        </h1>
                        <p>{ele.price}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button
                onClick={handlescrollLeft}
                className="bg-white w-10 h-20 text-gray-400 px-2 border-l-slate-200 border-l-[1px] rounded-r-md absolute left-[20px] top-[57%] transform -translate-y-1/2"
              >
                {data.prev}
              </button>
              <button
                onClick={handlescrollRight}
                className="bg-white w-10 h-20 text-gray-400 px-2 rounded-l-md border-l-slate-200 border-r-[1px] absolute right-[20px] top-[57%] transform -translate-y-1/2"
              >
                {data.next}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
