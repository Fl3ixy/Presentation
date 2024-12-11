"use client";

import React from "react";

export default function HomePageVideo() {
  return (
    <div className="absolute left-0 top-0 h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000e3] to-black"></div>
      <video className="h-full w-full object-cover" autoPlay loop muted>
        <source src="/video/13495-248644905.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
