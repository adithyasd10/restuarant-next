import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 lg:px-20 xl:px-40 min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-9rem)]">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="relative group rounded-xl overflow-hidden shadow-lg h-72 md:h-96"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${category.img})` }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-500"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-start h-full p-6 text-white">
            <h1 className="uppercase font-extrabold text-3xl drop-shadow-lg">
              {category.title}
            </h1>
            <p className="mt-4 text-sm text-gray-200 max-w-xs">
              {category.desc}
            </p>
            <button
              className={`
                mt-6 hidden 2xl:inline-block
                bg-${category.color}
                ${
                  category.color === "black"
                    ? "text-white"
                    : "text-black"
                }
                py-2 px-5 rounded-full
                hover:opacity-80 transition
              `}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
