"use client";

import React from "react";

export default function HomePageSection({ children }) {
  return (
    <section className="flex justify-center">
      <div className="my-12 flex w-[1300px] justify-center text-9xl text-white sm:mx-0 sm:mb-14 sm:flex-col sm:gap-5 sm:text-9xl md:mx-16 md:flex-col md:gap-5">
        {children}
      </div>
    </section>
  );
}
