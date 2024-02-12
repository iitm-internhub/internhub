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
import SignupIcon from "@/public/icons/signup.svg";
import LoginIcon from "@/public/icons/login.svg";

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
        <DropdownMenuLabel>Navigate to</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/" className="flex items-center justify-between">
              <p>Home</p>
              <Image
                src={HomeIcon}
                alt="home_icon"
                height={1000}
                width={1000}
                className="h-4 w-4"
              />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/events" className="flex items-center justify-between">
              <p>Events</p>
              <Image
                src={EventsIcon}
                alt="event_icon"
                height={1000}
                width={1000}
                className="h-4 w-4"
              />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link
              href="/podcasts"
              className="flex items-center justify-between"
            >
              <p>Podcasts</p>
              <Image
                src={PodcastsIcon}
                alt="podcast_icon"
                height={1000}
                width={1000}
                className="h-4 w-4"
              />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/team" className="flex items-center justify-between">
              <p>Team</p>
              <Image
                src={TeamIcon}
                alt="team_icon"
                height={1000}
                width={1000}
                className="h-4 w-4"
              />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/about" className="flex items-center justify-between">
              <p>About</p>
              <Image
                src={AboutIcon}
                alt="about_icon"
                height={1000}
                width={1000}
                className="h-4 w-4"
              />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/contact" className="flex items-center justify-between">
              <p>Contact US</p>
              <Image
                src={ContactIcon}
                alt="profile_icon"
                height={1000}
                width={1000}
                className="h-4 w-4"
              />
            </Link>
          </DropdownMenuItem>

          {!isLoggedIn && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link
                  href="/signup"
                  className="flex items-center justify-between bg-green-600"
                >
                  <p>Signup</p>
                  <Image
                    src={SignupIcon}
                    alt="signup_icon"
                    height={1000}
                    width={1000}
                    className="h-4 w-4"
                  />
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="mt-1">
                <Link
                  href="/login"
                  className="flex items-center justify-between bg-green-600"
                >
                  <p>Login</p>
                  <Image
                    src={LoginIcon}
                    alt="login_icon"
                    height={1000}
                    width={1000}
                    className="h-4 w-4 dark:invert"
                  />
                </Link>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNavigation;
