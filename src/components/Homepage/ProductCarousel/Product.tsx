"use client";
import React, { useEffect, useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { carouselData } from "@/components/data/Data";
import Image from "next/image";

function Product() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const previousImage = () => {
    setIndex(index === 0 ? carouselData.length - 1 : index - 1);
  };

  const nextImage = () => {
    setIndex(index === carouselData.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="relative mt-4 mx-4 bg-repeat-round h-56 overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {carouselData.map((item, idx) => (
          <div key={idx} className="flex-shrink-0 w-full h-full">
            <Image
              src={item}
              alt={`Slide ${idx}`}
              layout="responsive"
              width={1000}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={previousImage}
        className="bg-white w-10 h-20 text-gray-400 px-2 rounded-r-md absolute left-0 top-1/2 transform -translate-y-1/2"
      >
        <GrFormPrevious size={20} />
      </button>
      <button
        onClick={nextImage}
        className="bg-white w-10 h-20 text-gray-400 px-2 rounded-l-md absolute right-0 top-1/2 transform -translate-y-1/2"
      >
        <GrFormNext size={20} />
      </button>
      <div className="absolute bottom-2 right-0 left-0 flex justify-center">
        <div className="flex items-center gap-2 bg-black w-[85px] py-0.5 px-2 rounded-lg bg-opacity-15">
          {carouselData.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`transition-all w-1.5 h-1.5 cursor-pointer bg-white rounded-full ${
                index === i ? "p-0.5" : "bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
