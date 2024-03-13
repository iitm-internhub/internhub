"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Loader from "@/components/shared/Loader";

import axiosInstance from "@/lib/axios-instance";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

const AdminRootCompany = dynamic(() => import("@/components/admin/AdminRootCompany"), {
  loading: Loader,
});
const AdminLoginCompany = dynamic(() => import("@/components/admin/AdminLoginCompany"), {
  loading: Loader,
});

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState<Boolean>(false);
  const [username, setUsername] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  useEffect(() => {
    const checkIsAuthenticated = () => {
      const admin_access_token = localStorage.getItem("admin_access_token");
      if (admin_access_token) {
        setIsAdmin(true);
      }
    };

    checkIsAuthenticated();
  }, []);

  const handleSubmit = async () => {
    try {
      if (!username || !password) {
        return toast.error("please provide username and password");
      }

      const { data } = await axiosInstance.post("/api/v1/auth-admin-company/login", {
        username: username,
        password: password,
      });


      if (data?.success) {
        localStorage.setItem("admin_access_token", data?.authToken);
        toast.success(`${data.message}`);
        setIsAdmin(true);
        return;
      }
      toast.error(`${data.message}`);
    } catch (error) {
      const err = error as AxiosError;
      const data: any = err?.response?.data;
      if (data?.message) {
        toast.error(data?.message);
        return;
      }

      toast.error(err.response?.data as string);
    }
  };

  return (
    <>
      {!isAdmin ? (
        <AdminLoginCompany
          setUsername={setUsername}
          setPassword={setPassword}
          username={username}
          password={password}
          handleSubmit={handleSubmit}
        />
      ) : (
        <AdminRootCompany />
      )}
    </>
  );
};

export default Admin;
