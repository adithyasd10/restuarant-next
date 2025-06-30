import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="flex flex-wrap text-gray-800 bg-gray-50">
      {pizzas.map((item) => (
        <Link
          className="w-full h-[60vh] border-r border-b border-gray-200 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-white even:bg-gray-100 hover:bg-amber-50 transition"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="relative h-[80%] shadow-sm rounded-lg overflow-hidden bg-white">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-between font-semibold">
            <h1 className="text-2xl uppercase p-2 text-gray-700">
              {item.title}
            </h1>
            <h2 className="group-hover:hidden text-xl text-gray-500">
              ${item.price}
            </h2>
            <button className="hidden group-hover:block uppercase bg-amber-500 text-white p-2 rounded-md hover:bg-amber-600 transition">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
