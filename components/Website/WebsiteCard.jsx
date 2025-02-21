"use client"
import React, { useState } from "react";

export function WebsiteCard({ title, description, imageSource }) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  return (
    <div 
      className={`flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-white bg-black p-2 py-3 text-center text-white cursor-pointer hover:-translate-y-2 hover:scale-105 hover:ease-in-out hover:shadow-[0_0_8px_5px_rgba(0,114,255,0.8)] active:scale-100 hover:duration-300 transition-all duration-300
      ${isDescriptionVisible ? 'sm:h-52 sm:w-40 md:h-64 md:w-48' : 'sm:h-40 sm:w-40 md:h-48 md:w-48'}`}
      onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
    >
      <div className="flex items-center justify-center rounded-full bg-blue-500 p-3 sm:h-16 sm:w-16 sm:rounded-lg md:h-20 md:w-20 md:rounded-lg">
        <img className="h-10 w-10" src={imageSource} alt="logo" />
      </div>
      <h1 className="text-lg font-semibold">{title}</h1>
      <p className="text-sm font-light lg:block md:hidden sm:hidden">
        {description}
      </p>
      {isDescriptionVisible && (
        <p className="text-sm font-light hidden md:block sm:block animate-[fadeIn_0.3s_ease-in-out]">
          {description}
        </p>
      )}
    </div>
  );
}
