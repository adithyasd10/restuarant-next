"use client";

import React, { useEffect, useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  return (
    <div className="flex flex-col gap-6 p-6 bg-white rounded-xl shadow-md">
      {/* Total Price */}
      <h2 className="text-3xl font-bold text-gray-800">
        ${total.toFixed(2)}
      </h2>

      {/* Options */}
      {options && (
        <div className="flex flex-wrap gap-4">
          {options.map((option, index) => (
            <button
              key={option.title}
              className={`
                min-w-[6rem] py-2 px-4 rounded-full border
                transition-all duration-300
                ${
                  selected === index
                    ? "bg-amber-500 border-amber-500 text-white shadow-sm"
                    : "bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100"
                }
              `}
              onClick={() => setSelected(index)}
            >
              {option.title}
            </button>
          ))}
        </div>
      )}

      {/* Quantity and Add Button Container */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
        {/* Quantity Selector */}
        <div className="flex justify-between w-full sm:w-auto items-center px-4 py-3 border border-gray-300 rounded-md bg-gray-50">
          <span className="text-gray-700 font-medium">Quantity</span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              className="text-gray-500 hover:text-gray-700 transition"
            >
              &lt;
            </button>
            <span className="text-gray-700 font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
              className="text-gray-500 hover:text-gray-700 transition"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="uppercase w-full sm:w-56 py-3 bg-amber-500 text-white font-bold rounded-md hover:bg-amber-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
