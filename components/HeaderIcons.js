import React from "react";
import { useRouter } from "next/router";

const HeaderIcons = ({ Icon, title }) => {
  const router = useRouter();
  const handleClick = () => {
    if (title === "HOME" || title === "TRENDING") {
      router.push("/?genre=fetchTrending");
    }
  };
  return (
    <div
      className="flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white group"
      onClick={() => handleClick()}
    >
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
    </div>
  );
};

export default HeaderIcons;
