import React from "react";

export default function Header() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-0">
        <svg
          className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
          width={640}
          height={784}
          fill="none"
          viewBox="0 0 640 784"
        >
          <defs>
            <pattern
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
              x={118}
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
            y={72}
            width={640}
            height={640}
            className="text-gray-50"
            fill="currentColor"
          />
          <rect
            x={118}
            width={404}
            height={784}
            fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
          />
        </svg>
      </div>
      <div className="relative pt-6">
        <nav className="relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="#" aria-label="Home">
                <img
                  className="h-20 w-auto sm:h-32"
                  src="logo.png"
                  alt="Logo"
                />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  id="main-menu"
                  aria-label="Main menu"
                  aria-haspopup="true"
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="hidden md:block md:ml-10">
              <a
                href="#"
                className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              >
                Product
              </a>
              <a
                href="#"
                className="ml-10 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              >
                Features
              </a>
              <a
                href="#"
                className="ml-10 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              >
                Marketplace
              </a>
              <a
                href="#"
                className="ml-10 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              >
                Company
              </a>
            </div>
          </div>
          <div className="hidden md:block text-right">
            <span className="inline-flex rounded-md shadow-md">
              <span className="inline-flex rounded-md shadow-xs">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-red-600 bg-white hover:bg-gray-50 focus:outline-none focus:border-red-300 focus:shadow-outline-red transition duration-150 ease-in-out"
                >
                  Log in
                </a>
              </span>
            </span>
          </div>
        </nav>
        {/*
Mobile menu, show/hide based on menu open state.

Entering: "duration-150 ease-out"
  From: "opacity-0 scale-95"
  To: "opacity-100 scale-100"
Leaving: "duration-100 ease-in"
  From: "opacity-100 scale-100"
  To: "opacity-0 scale-95"
    */}
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right hidden">
          <div className="rounded-lg shadow-md">
            <div
              className="rounded-lg bg-white shadow-xs overflow-hidden"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                    alt
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    aria-label="Close menu"
                  >
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  role="menuitem"
                >
                  Product
                </a>
                <a
                  href="#"
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  role="menuitem"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  role="menuitem"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  role="menuitem"
                >
                  Company
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="block w-full px-5 py-3 text-center font-medium text-red-600 bg-gray-50 hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:bg-gray-100 focus:text-red-700 transition duration-150 ease-in-out"
                  role="menuitem"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100vw",
            height: "40vh",
            left: 0,
            overflow: "hidden",
          }}
          className="vimeo-wrapper"
        >
          <iframe
            style={{
              widht: "100vw",
              height: "50vh",
            }}
            src="https://player.vimeo.com/video/454816589?background=1&autoplay=1&loop=1&byline=0&title=0"
            frameBorder={0}
            webkitallowfullscreen
            mozallowfullscreen
            allowFullScreen
          />
        </div>

        <div className="max-w-2xl text-center text-gray-800 text-lg mx-auto mt-20">
          <span className="text-xl">
            Find us where the jungle meets the beach with nothing and no one
            around.
          </span>
          <br />
          You'll feel like you're renting an area of a national park all for
          yourself. A private beach, a jungle filled with wildlife and hotel
          amenities for 1 to 25 people.
        </div>

        <main className="mt-6 mx-auto max-w-3xl sm:mt-16  ">
          <div className="text-center max-w-3xl">
            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-green-800 sm:text-5xl sm:leading-none md:text-6xl">
              Nature's retreat
              <br className="xl:hidden" />
              <span className="text-yellow-600"> for family and friends</span>
            </h2>
          </div>
        </main>
      </div>
    </div>
  );
}
