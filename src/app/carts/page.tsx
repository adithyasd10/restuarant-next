import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col lg:flex-row bg-gradient-to-br from-red-50 via-amber-50 to-orange-100 text-gray-800 animate-fade-in">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-6 flex flex-col justify-center gap-4 overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-white rounded-xl shadow-md p-4 transition hover:scale-[1.015] hover:shadow-lg duration-300"
          >
            <Image
              src="/temporary/p1.png"
              alt="Sicilian Pizza"
              width={100}
              height={100}
              className="rounded-md"
            />
            <div className="flex flex-col ml-4 flex-1">
              <h1 className="uppercase text-xl font-bold text-gray-700">
                Sicilian
              </h1>
              <span className="text-gray-500">Large</span>
            </div>
            <h2 className="font-bold text-gray-700">$79.90</h2>
            <span className="cursor-pointer text-red-400 hover:text-red-600 transition">
              ✕
            </span>
          </div>
        ))}
      </div>

      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-6 bg-white bg-opacity-80 backdrop-blur-md rounded-t-3xl shadow-xl flex flex-col gap-5 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl">
        <div className="flex justify-between text-gray-700 font-medium">
          <span>Subtotal (3 items)</span>
          <span>$239.70</span>
        </div>
        <div className="flex justify-between text-gray-700 font-medium">
          <span>Service Cost</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between text-gray-700 font-medium">
          <span>Delivery Cost</span>
          <span className="text-green-600 font-semibold">FREE!</span>
        </div>
        <hr className="my-2 border-gray-300" />
        <div className="flex justify-between text-gray-800 font-bold text-lg">
          <span>Total (incl. VAT)</span>
          <span>$239.70</span>
        </div>
        <button className="w-full sm:w-1/2 self-end bg-gradient-to-r from-red-500 via-amber-500 to-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
