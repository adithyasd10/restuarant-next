import React from 'react';

const Notification = () => {
  return (
    <div
      className="
        h-12 
        bg-gradient-to-r from-red-400 via-red-500 to-red-700 
        text-white 
        px-4 
        flex justify-center items-center text-center 
        text-sm md:text-base 
        font-medium 
        cursor-pointer 
        hover:brightness-110 
        transition-all duration-300
      "
    >
      🎉 Enjoy FREE delivery on orders over $50 — Treat yourself today!
    </div>
  );
};

export default Notification;
