"use client";
import React, { JSX, SVGProps, useState } from "react";
import AdminHome from "./AdminHome";
import AdminEventPanel from "./AdminEvent";
import AdminPodcastPanel from "./AdminPodcast";
import AdminCompanyPanel from "./AdminCompany";
const AsideNavAdmin = () => {
  const [activeComponent, setActiveComponent] = useState<string>("home");

  const renderComponent = () => {
    switch (activeComponent) {
      case "home":
        return <AdminHome />;
      case "events":
        return <AdminEventPanel />;
      case "podcasts":
        return <AdminPodcastPanel />;
      case "companies":
        return <AdminCompanyPanel />;
      default:
        return <AdminHome />;
    }
  };

  return (
    <main className="flex flex-row h-screen no-scrollbar">
      <div className="w-1/4 h-full overflow-hidden  fixed">
        <div className="flex items-stretch h-screen ">
          <nav className="py-4">
            <div
              onClick={() => setActiveComponent("home")}
              className="flex flex-col items-center gap-4 text-center py-2"
            >
              <HomeIcon className="w-6 h-6" />

              <span className="text-xs font-medium leading-none">Home</span>
            </div>
            <div
              onClick={() => setActiveComponent("events")}
              className="flex flex-col items-center gap-1 text-center py-2"
            >
              <CalendarIcon className="w-6 h-6" />
              <span className="text-xs font-medium leading-none">Events</span>
            </div>
            <div
              onClick={() => setActiveComponent("podcasts")}
              className="flex flex-col items-center gap-1 text-center py-2"
            >
              <MicIcon className="w-6 h-6" />
              <span className="text-xs font-medium leading-none">Podcasts</span>
            </div>
            <div
              onClick={() => setActiveComponent("companies")}
              className="flex flex-col items-center gap-1 text-center py-2"
            >
              <UsersIcon className="w-6 h-6" />
              <span className="text-xs font-medium leading-none">
                Companies
              </span>
            </div>
          </nav>
        </div>
      </div>

      <div className="w-full h-full overflow-auto ml-[10em]">
        <div className="flex">
          <main className="flex-1 p-8">{renderComponent()}</main>
        </div>
      </div>
    </main>
  );
};

function CalendarIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MicIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  );
}

function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default AsideNavAdmin;
