import React from "react";

import HomeIcon from "@/public/icons/home.svg";
import EventIcon from "@/public/icons/event.svg";
import PodcastIcon from "@/public/icons/podcast.svg";
import CompanyIcon from "@/public/icons/building.svg";
import Image from "next/image";

interface AsideNavAdminProps {
  setIsActiveTab: (tab: string) => void;
}

const AsideNavAdmin: React.FC<AsideNavAdminProps> = ({ setIsActiveTab }) => {
  const navLinks = [
    { image: HomeIcon, title: "Home" },
    { image: EventIcon, title: "Events" },
    { image: PodcastIcon, title: "Podcasts" },
    { image: CompanyIcon, title: "Companies" },
  ];

  return (
    <nav className="flex flex-col space-y-6">
      {navLinks.map((nav) => (
        <div
          key={nav.title}
          className="flex items-center p-4 border rounded-lg gap-2 cursor-pointer"
          onClick={() => setIsActiveTab(`${nav.title.toLowerCase()}`)}
        >
          <Image src={nav.image} alt="nav" height={30} width={30} />
          <p className="font-medium text-xs md:text-sm">{nav.title}</p>
        </div>
      ))}
    </nav>
  );
};

export default AsideNavAdmin;
