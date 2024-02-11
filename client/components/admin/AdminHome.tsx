"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Loader from "../shared/Loader";

const UsersTable = dynamic(() => import("./UsersTable"), { loading: Loader });

import axiosInstance from "@/lib/axios-instance";
import { AxiosError } from "axios";

import toast from "react-hot-toast";
import exportFromJson from "export-from-json";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";

import DownloadIcon from "@/public/icons/download.svg";

interface userInterface {
  _id: string;
  username: string;
  email: string;
  phone_number: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const AdminHome: React.FC = () => {
  const [users, setUsers] = useState<Array<userInterface>>([]);
  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const admin_token = localStorage.getItem("admin_access_token");
        const { data } = await axiosInstance.post(
          "/api/v1/info-admin/all-users",
          {},
          { headers: { Authorization: `Bearer ${admin_token}` } }
        );

        const filteredUsers = data?.users.map((user: any) => ({
          _id: user.id,
          username: user.username,
          email: user.email,
          phone_number: user.phone_number,
          createdAt: user.createdAt,
          isAdmin: user.isAdmin,
        }));

        setUsers(filteredUsers);
        localStorage.setItem("users", JSON.stringify(filteredUsers));
      } catch (error) {
        const err = error as AxiosError;
        const data: any = err?.response?.data;
        if (data) {
          toast.error(data?.message);
        } else {
          toast.error("session timeout: you need to login again");
        }
      }
    };

    getAllUsers();
  }, []);
  const handleDownloadCsv = () => {
    if (!users) {
      toast.error(
        "either you don't have access to this data or there are no users on internhub site"
      );
      return;
    }

    const data = users;
    const fileName = "internhub-users-list";
    const exportType = exportFromJson.types.csv;

    exportFromJson({ data, fileName, exportType });
  };
  const [isAdminSortOrder, setIsAdminSortOrder] = useState(true);

  const toggleSortOrder = () => {
    setIsAdminSortOrder(!isAdminSortOrder);
  };

  return (
    <>
      {!users ? (
        <p className="text-2xl font-medium text-center">No User Found</p>
      ) : (
        <>
          <Button
            className="mb-4 cursor-pointer"
            onClick={handleDownloadCsv}
            asChild
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-xs">Export to CSV</span>
              <Image
                src={DownloadIcon}
                alt="download_icon"
                height={50}
                width={50}
                className="w-4 invert dark:invert-0"
              />
            </div>
          </Button>
          <Table>
            <TableCaption>All the users on Internhub website.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead onClick={toggleSortOrder}>Role</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone Number</TableHead>
                <TableHead className="text-right">Joined On</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users
                ?.sort((a, b) =>
                  isAdminSortOrder
                    ? Number(b.isAdmin) - Number(a.isAdmin)
                    : Number(a.isAdmin) - Number(b.isAdmin)
                )
                .map((user) => (
                  <UsersTable
                    key={user._id}
                    _id={user._id}
                    username={user?.username}
                    email={user?.email}
                    phone_number={user?.phone_number}
                    createdAt={user?.createdAt}
                    updatedAt={user?.updatedAt}
                    isAdmin={user?.isAdmin}
                  />
                ))}
            </TableBody>
          </Table>
          <div className="my-4">
            <div className="flex items-center border border-black dark:border-white rounded-md h-fit w-fit sm:px-6 px-4 py-2 gap-2">
              <p className="font-semibold text-sm sm:text-md">Total Users</p>
              <p className="font-semibold text-sm sm:text-md">
                {" "}
                {users?.length}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default AdminHome;
