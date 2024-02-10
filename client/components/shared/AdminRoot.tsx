"use client";

import React, { useState } from "react";
import AsideNavAdmin from "./AsideNavAdmin";
import AdminHome from "./AdminHome";
import AdminEventPanel from "./AdminEvent";
import AdminPodcastPanel from "./AdminPodcast";
import AdminCompanyPanel from "./AdminCompany";
import { Button } from "../ui/button";

const AdminRoot = () => {
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
        <Button variant="destructive" onClick={handleAdminLogout}>
          Logout Admin
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
