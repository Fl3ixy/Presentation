"use client";

import React from "react";
import clsx from "clsx";

export default function HomePageSection({ children, isFlexCol, sectionStyles }) {
  return (
    <section className={clsx("flex justify-center sm:text-center",sectionStyles)}>
      <div
        className={clsx(
          "my-12 flex w-[1300px] justify-center text-9xl text-white sm:mx-0 sm:mb-14 sm:w-[520px] sm:flex-col sm:gap-5 sm:text-9xl md:mx-16 md:flex-col md:gap-5",
          {
            "flex-row": !isFlexCol,
            "flex-col": isFlexCol,
          },
        )}
      >
        {children}
      </div>
    </section>
  );
}
