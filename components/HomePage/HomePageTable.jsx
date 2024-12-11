import React from 'react'

export default function HomePageTable({ label, subLabel, subject, subjectDescription, description }) {
  return (
    <div className="lg:mx-15 sm:mx-auto sm:my-8 sm:w-full md:my-12 md:flex md:w-[700px] md:flex-col md:text-sm lg:flex lg:flex-col lg:text-9xl">
        <div className="flex h-auto w-[700px] flex-col rounded-xl border sm:w-auto sm:flex-col">
          <div className="ml-6 md:ml-0 md:flex md:items-center md:gap-8">
            <p className="py-2 text-3xl sm:text-2xl md:pl-6 md:text-4xl">
              {label}
            </p>
            <p className="py-2 text-xl text-white sm:text-base md:ml-80 md:text-2xl">
              {subLabel}
            </p>
          </div>
          <div className="border-b border-t">
            <p className="mx-6 py-2 text-lg text-white sm:text-base md:mx-0 md:pl-6 md:text-xl">
              {subject}
            </p>
          </div>
          <div>
            <p className="mx-6 mt-4 py-2 text-xl text-white sm:text-base md:mx-0 md:pl-6 md:text-2xl">
              {subjectDescription}
            </p>
          </div>
          <p className="mx-6 py-4 text-lg text-white sm:text-base md:mx-0 md:px-6 md:text-xl">
            {description}
          </p>
        </div>
      </div>
  )
}
