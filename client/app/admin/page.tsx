"use client";

import AdminLogin from "@/components/shared/AdminLogin";
import AdminRoot from "@/components/shared/AdminRoot";
import axiosInstance from "@/lib/axios-instance";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

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

      const { data } = await axiosInstance.post("/api/v1/auth-admin/login", {
        username: username,
        password: password,
      });

      if (data?.success) {
        localStorage.setItem("admin_access_token", data?.authToken);
        toast.success(`${data.message}`);
      } else {
        toast.error(`${data.message}`);
      }
    } catch (error) {
      const err = error as AxiosError;
      const data: any = err?.response?.data;
      toast.error(data?.message);
    }
  };

  return (
    <>
      {!isAdmin ? (
        <AdminLogin
          setUsername={setUsername}
          setPassword={setPassword}
          username={username}
          password={password}
          handleSubmit={handleSubmit}
        />
      ) : (
        <AdminRoot />
      )}
    </>
  );
};

export default Admin;
