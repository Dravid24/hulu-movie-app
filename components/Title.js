import React from "react";
import requests from "../common/requests";
import { useRouter } from "next/router";

const Title = () => {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title }]) => {
          return (
            <h2
              className="cursor-pointer transition duration-100 hover:scale-125 hover:text-white last:pr-24"
              key={key}
              onClick={() => router.push(`/?genre=${key}`)}
            >
              {title}
            </h2>
          );
        })}
      </div>
    </nav>
  );
};

export default Title;
