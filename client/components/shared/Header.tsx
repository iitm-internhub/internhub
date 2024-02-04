import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import DarkmodeToggle from "./ToggleDarkmode";
import ProfileButton from "./ProfileButton";
import MobileNavigation from "./MobileNavigation";

const Header: React.FC = () => {
  const isLoggedIn = true;

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-[#09090b] max-w-screen-xl mx-auto">
      <Link className="flex items-center justify-center" href="/">
        {/* <VeganIcon className="h-6 w-6" /> */}
        <Image
          src={logo}
          alt="internhub_logo"
          height={200}
          width={200}
          className="rounded-full sm:h-8 sm:w-8 h-6 w-6"
        />
        <span className="ml-2 sm:text-lg text-sm font-semibold">InternHub</span>
      </Link>
      <nav className="hidden md:flex gap-4">
        <Link
          className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="/events"
        >
          Events
        </Link>
        <Link
          className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="/contact"
        >
          Contact Us
        </Link>
        <Link
          className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="/team"
        >
          Team
        </Link>
        <Link
          className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="/about"
        >
          About
        </Link>
      </nav>
      <div className="flex gap-2 items-center justify-center">
        <DarkmodeToggle />
        <div className="md:hidden block">
          <MobileNavigation isLoggedIn={isLoggedIn} />
        </div>
        {isLoggedIn ? (
          <>
            <ProfileButton />
          </>
        ) : (
          <div className="hidden md:flex gap-2">
            <Button asChild>
              <Link href="/signup">Signup</Link>
            </Button>
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
