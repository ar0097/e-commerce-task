"use client";
import React, { useEffect, useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const carouselData = [
  "/assets/advertise/acer.webp",
  "/assets/advertise/earlybirddeals.webp",
  "/assets/advertise/flights.webp",
  "/assets/advertise/flipkart.webp",
  "/assets/advertise/fly.webp",
  "/assets/advertise/samsung.webp",
];

function Product() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const previousImage = () => {
    if (index == 0) {
      setIndex(5);
    } else {
      setIndex(index - 1);
    }
  };

  const nextImage = () => {
    if (index == carouselData.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${carouselData[index]})`,
      }}
      className="relative mt-4 mx-4 bg-repeat-round h-56 flex justify-between items-center"
    >
      <button
        onClick={previousImage}
        className="bg-white w-10 h-20 text-gray-400 px-2 rounded-r-md"
      >
        <GrFormPrevious size={20} />
      </button>
      <button
        onClick={nextImage}
        className="bg-white w-10 h-20 text-gray-400 px-2 rounded-l-md"
      >
        <GrFormNext size={20} />
      </button>
      <div className="absolute bottom-1 right-0 left-0">
        <div className="flex items-center justify-center gap-2 m-auto bg-black w-24 p-0.5 rounded-lg bg-opacity-15 ">
          {carouselData.map((image, i) => (
            <div
              key={i}
              className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${
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
