import React from "react";

import { useVideoDispatch } from "data/Video/Context";
import { getVideoToken } from "data/Video/Actions";
import { useRouter } from "next/router";

export default function Item({ item }) {
  const dispatch = useVideoDispatch();
  const router = useRouter();

  const onRoomClick = async () => {
    await getVideoToken(
      dispatch,
      "usuario_" + parseInt(Math.random() * 10000),
      item.slug
    );
    router.push("/rooms/" + item.slug);
  };

  return (
    <li onClick={onRoomClick}>
      <a
        href="#"
        className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
      >
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="text-sm leading-5 font-medium text-red-600 truncate">
              {item.title}
            </div>
            <div className="ml-2 flex-shrink-0 flex">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Click para ingresar
              </span>
            </div>
          </div>
          <div className="mt-2 sm:flex sm:justify-between">
            <div className="sm:flex">
              <div className="mr-6 flex items-center text-sm leading-5 text-gray-500">
                <svg
                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                Comercio
              </div>
              <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                <svg
                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Virtual
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}
