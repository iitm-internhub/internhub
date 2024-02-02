import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 max-w-screen-xl mx-auto">
      <Link className="flex items-center" href="/">
        {/* <VeganIcon className="h-6 w-6" /> */}
        <span className="ml-2 text-lg font-semibold">InternHub</span>
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
          href="#"
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
          href="#"
        >
          Team
        </Link>
        <Link
          className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="#"
        >
          About
        </Link>
      </nav>
      <div className="flex gap-2">
        <Button asChild>
          <Link href="/signup">Signup</Link>
        </Button>
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
