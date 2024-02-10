"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Loader from "./Loader";

import { Button } from "../ui/button";
import LogoutIcon from "@/public/icons/logout.svg";
import Image from "next/image";

const AsideNavAdmin = dynamic(() => import("./AsideNavAdmin"), {
  loading: Loader,
});
const AdminCompanyPanel = dynamic(() => import("./AdminCompany"), {
  loading: Loader,
});
const AdminEventPanel = dynamic(() => import("./AdminEvent"), {
  loading: Loader,
});
const AdminPodcastPanel = dynamic(() => import("./AdminPodcast"), {
  loading: Loader,
});
const AdminHome = dynamic(() => import("./AdminHome"), { loading: Loader });

const AdminRoot: React.FC = () => {
  const [isActiveTab, setIsActiveTab] = useState<string>("home");

  const handleAdminLogout = () => {
    localStorage.removeItem("admin_access_token");
    location.reload();
  };

  return (
    <section className="grid grid-cols-1 max-w-screen-xl mt-10 gap-6 mx-auto px-6">
      <div className="">
        <AsideNavAdmin
          setIsActiveTab={setIsActiveTab}
          isActiveTab={isActiveTab}
        />
      </div>
      <div className="text-right my-0">
        <Button
          variant="destructive"
          onClick={handleAdminLogout}
          asChild
          className="cursor-pointer"
        >
          <div className="flex items-center justify-center gap-2">
            <span>Logout Admin</span>
            <Image
              src={LogoutIcon}
              alt="logout_icon"
              height={50}
              width={50}
              className="h-4 w-4 invert"
            />
          </div>
        </Button>
      </div>
      <div className="">
        {isActiveTab === "home" && <AdminHome />}
        {isActiveTab === "events" && <AdminEventPanel />}
        {isActiveTab === "podcasts" && <AdminPodcastPanel />}
        {isActiveTab === "companies" && <AdminCompanyPanel />}
      </div>
    </section>
  );
};

export default AdminRoot;
