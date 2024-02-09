import React from "react";

import HomeIcon from "@/public/icons/home.svg";
import EventIcon from "@/public/icons/event.svg";
import PodcastIcon from "@/public/icons/podcast.svg";
import CompanyIcon from "@/public/icons/building.svg";
import Image from "next/image";

interface AsideNavAdminProps {
  setIsActiveTab: (tab: string) => void;
  isActiveTab: string;
}

const AsideNavAdmin: React.FC<AsideNavAdminProps> = ({
  setIsActiveTab,
  isActiveTab,
}) => {
  const navLinks = [
    { image: HomeIcon, title: "Home" },
    { image: EventIcon, title: "Events" },
    { image: PodcastIcon, title: "Podcasts" },
    { image: CompanyIcon, title: "Companies" },
  ];

  return (
    <nav className="grid gap-4 grid-cols-2">
      {navLinks.map((nav) => (
        <div
          key={nav.title}
          className={`flex items-center md:p-4 p-2 border border-gray-400 rounded-lg gap-2 cursor-pointer w-full ${
            isActiveTab === nav.title.toLocaleLowerCase() &&
            "bg-blue-500 text-white border-none"
          }`}
          onClick={() => setIsActiveTab(`${nav.title.toLowerCase()}`)}
        >
          <Image
            src={nav.image}
            alt="nav"
            height={30}
            width={30}
            className="h-6 w-6"
          />
          <p className="font-medium text-xs md:text-sm line-clamp-1">
            {nav.title}
          </p>
        </div>
      ))}
    </nav>
  );
};

export default AsideNavAdmin;
