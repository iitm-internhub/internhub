import React from "react";
import menuIcon from "@/public/icons/menu.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";

import HomeIcon from "@/public/icons/home-2.svg";
import EventsIcon from "@/public/icons/events.svg";
import PodcastsIcon from "@/public/icons/podcast-2.svg";
import TeamIcon from "@/public/icons/team.svg";
import AboutIcon from "@/public/icons/about.svg";
import ContactIcon from "@/public/icons/contact.svg";

interface MobileNavigationProps {
  isLoggedIn: boolean;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isLoggedIn }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          src={menuIcon}
          alt="menu"
          height={25}
          width={25}
          className="cursor-pointer dark:invert"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Naviagate</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <div className="flex items-center justify-between">
              <Link href="/">Home</Link>
              <Image
                src={HomeIcon}
                alt="home_icon"
                height={1000}
                width={1000}
                className="h-4 w-4"
              />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <div className="flex items-center justify-between">
              <Link href="/events">Events</Link>
              <Image
                src={EventsIcon}
                alt="event_icon"
                height={1000}
                width={1000}
                className="h-4 w-4"
              />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <div className="flex items-center justify-between">
              <Link href="/podcasts">Podcasts</Link>
              <Image
                src={PodcastsIcon}
                alt="podcast_icon"
                height={1000}
                width={1000}
                className="h-4 w-4"
              />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <div className="flex items-center justify-between">
              <Link href="/team">Team</Link>
              <Image
                src={TeamIcon}
                alt="team_icon"
                height={1000}
                width={1000}
                className="h-4 w-4"
              />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <div className="flex items-center justify-between">
              <Link href="/about">About</Link>
              <Image
                src={AboutIcon}
                alt="about_icon"
                height={1000}
                width={1000}
                className="h-4 w-4"
              />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <div className="flex items-center justify-between">
              <Link href="/contact">Contact US</Link>
              <Image
                src={ContactIcon}
                alt="profile_icon"
                height={1000}
                width={1000}
                className="h-4 w-4"
              />
            </div>
          </DropdownMenuItem>

          {!isLoggedIn && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/signup">Sign Up</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/login">Login</Link>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNavigation;
