import Image from "next/image";
import React from "react";
import { data } from "@/components/data/Data";

function Products() {
  return (
    <div className="flex justify-evenly items-center bg-white mt-2 mx-4 p-5">
      {data.map((product, index) => {
        return (
          <div
            key={index}
            className="flex justify-center items-center flex-col"
          >
            <Image src={product.img} alt="" width={64} height={64} />
            <p className="font-medium mt-1">{product.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
