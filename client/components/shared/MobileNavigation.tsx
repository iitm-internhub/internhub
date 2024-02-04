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
          <DropdownMenuItem>
            <Link href="/">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/events">Events</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/contact">Contact us</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/team">Team</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/about">About</Link>
          </DropdownMenuItem>

          {!isLoggedIn && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/signup">Sign Up</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/login">Login</Link>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNavigation;
