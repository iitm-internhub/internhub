"use client";

import React, { useState } from "react";
import AsideNavAdmin from "./AsideNavAdmin";
import AdminHome from "./AdminHome";
import AdminEventPanel from "./AdminEvent";
import AdminPodcastPanel from "./AdminPodcast";
import AdminCompanyPanel from "./AdminCompany";

const AdminRoot = () => {
  const [isActiveTab, setIsActiveTab] = useState<string>("home");

  return (
    <section className="flex flex-row justify-evenly max-w-screen-xl mt-10 gap-10 mx-auto">
      <div className="w-1/6">
        <AsideNavAdmin setIsActiveTab={setIsActiveTab} />
      </div>
      <div className="w-5/6">
        {isActiveTab === "home" && <AdminHome />}
        {isActiveTab === "events" && <AdminEventPanel />}
        {isActiveTab === "podcasts" && <AdminPodcastPanel />}
        {isActiveTab === "companies" && <AdminCompanyPanel />}
      </div>
    </section>
  );
};

export default AdminRoot;
