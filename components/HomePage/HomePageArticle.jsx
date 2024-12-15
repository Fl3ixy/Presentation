import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePageArticle({
  label,
  description,
  imageSource,
  linkinfos,
  type,
}) {
  return type == "paragraphe" ? (
    <div className="my-10 w-auto text-center md:mx-16">
      <div className="font-semibold">
        <h2 className=" text-3xl text-white sm:text-3xl md:text-4xl">
          {label}
        </h2>
      </div>
      <div className="mx-20 md:mx-20">
        <p className="text-red my-9 text-xl sm:my-9 sm:text-center sm:text-xl md:text-xl">
          {description}
        </p>
      </div>
    </div>
  ) : type === "card" ? (
    <div className="flex h-auto flex-row sm:mx-4 sm:flex-col sm:items-center sm:gap-5 md:w-[700px] md:flex-col md:gap-5">
      <div>
        <Image
          className="sm:size-[100px] md:size-[150px]"
          src={imageSource}
          alt="Logo D'image"
          height={700}
          width={700}
        />
      </div>
      <div className="ml-4">
        <div className="flex w-auto items-center font-semibold sm:justify-center">
          <p className="text-2xl text-white sm:text-2xl md:text-4xl">{label}</p>
        </div>
        <p className="py-6 text-lg text-white sm:text-lg md:py-6 md:text-xl">
          {description}
        </p>
      </div>
    </div>
  ) : type === "info" ? (
    <div className="sm:mx- my-32 w-[1100px] text-center text-white sm:my-32 sm:w-auto sm:flex-col md:mx-16">
      <div className="font-semibold">
        <h2 className="text-3xl sm:text-3xl md:text-4xl">{label}</h2>
      </div>
      <div className="mx-20 sm:mx-10 md:mx-20">
        <p className="my-9 text-xl sm:my-9 sm:text-center sm:text-xl md:text-xl">
          {description}
        </p>
        <div className="mx-10 my-7 flex w-auto flex-row items-center justify-center gap-4 text-center sm:mx-10 sm:my-7 sm:flex-col sm:gap-2">
          {linkinfos.map((info, index) => (
            <Link
              key={index}
              href={info.href}
              className={`${
                info.className ? info.className : "hover:-rotate-3"
              } z-20 flex h-14 w-[182px] items-center justify-center rounded-[2rem] border-2 bg-black text-lg duration-200 hover:scale-110 active:scale-100 active:duration-75 sm:mb-3 sm:h-14 sm:w-[182px] sm:rounded-[2rem] sm:text-lg`}
            >
              {info.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  ) : type === "intro" ? (
    <div className="mt-10 h-auto min-w-[500px] max-w-[500px] border-l-4">
      <div className="w-full md:w-2/3">
        <div className="m-5 w-auto text-center sm:my-5 sm:mr-10 md:m-10 md:text-start">
          <p className="text-start text-5xl font-bold leading-tight text-white md:text-7xl">
            {label}
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="mx-5 w-auto text-center md:mx-10 md:text-start">
          <p className="text-start text-lg text-white sm:text-start md:w-96 md:text-start md:text-2xl">
            {description}
          </p>
        </div>
        <div className="mx-5 my-7 flex w-auto flex-row gap-4 text-start sm:flex-col sm:gap-2 sm:text-start md:mx-10 md:my-7 md:text-start">
          {linkinfos.map((info, index) => (
            <Link
              key={index}
              href={info.href}
              className={`${
                info.className ? info.className : ""
              } z-20 flex h-14 w-[182px] items-center justify-center rounded-[2rem] border-2 bg-black text-lg duration-200 hover:-rotate-3 hover:scale-110 active:scale-100 active:duration-75 sm:mb-3 sm:h-14 sm:w-[182px] sm:rounded-[2rem] sm:text-lg`}
            >
              {info.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
