import React from "react";
import Content from "./Content";

export default function Image(props) {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />

        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative mb-8 lg:mb-0 lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="relative pb-7/12 lg:pb-0">
                  <img
                    src={props.presentation.image}
                    alt
                    width={1184}
                    height={1376}
                    className="rounded-lg shadow-lg object-cover object-center absolute inset-0 w-full h-full lg:static lg:h-auto"
                  />
                </div>
                <figcaption className="flex mt-3 text-sm text-gray-500">
                  <svg
                    className="flex-none w-5 h-5 mr-2 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Photograph by Marcus O’Leary
                </figcaption>
              </figure>
            </div>
          </div>
          <div>
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <Content content={props.presentation.introduction} />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto text-center text-base max-w-screen-lg ">
        <p className="text-base leading-6 text-red-600 font-semibold tracking-wide uppercase">
          {props.presentation.text}
        </p>
        <h1 className="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          {props.presentation.title}
        </h1>
      </div>
    </div>
  );
}
