import React from "react";
import HeaderIcons from "./HeaderIcons";
import {
  BoltIcon,
  CheckBadgeIcon,
  CircleStackIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderIcons title="HOME" Icon={HomeIcon} />
        <HeaderIcons title="TRENDING" Icon={BoltIcon} />
        <HeaderIcons title="VERIFIED" Icon={CheckBadgeIcon} />
        <HeaderIcons title="COLLECTIONS" Icon={CircleStackIcon} />
        <HeaderIcons title="SEARCH" Icon={MagnifyingGlassIcon} />
        <HeaderIcons title="ACCOUNT" Icon={UserIcon} />
      </div>
      <div>
        <Image
          src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
          alt="Logo"
          width={200}
          height={100}
        />
      </div>
    </header>
  );
};

export default Header;
