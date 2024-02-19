"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";

import UsersTable from "./UsersTable";

import axiosInstance from "@/lib/axios-instance";
import { AxiosError } from "axios";

import toast from "react-hot-toast";
import exportFromJson from "export-from-json";

import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";

import DownloadIcon from "@/public/icons/download.svg";
import Loader from "../shared/Loader";

interface userInterface {
  _id: string;
  username: string;
  email: string;
  phone_number: string;
  isAdmin: boolean;
  semester: string;
  batch: string;
  college: string;
  createdAt: Date;
  updatedAt: Date;
}

const AdminHome: React.FC = () => {
  const [users, setUsers] = useState<Array<userInterface>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAdminSortOrder, setIsAdminSortOrder] = useState(true);
  const [refresh, setRefresh] = useState<number>(0);
  const totalUsers = useMemo(() => users.length, [users]);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        setIsLoading(true);
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
          batch: user.batch,
          isAdmin: user.isAdmin,
          college: user.college,
          semester: user.semester,
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
      } finally {
        setIsLoading(false);
      }
    };

    getAllUsers();
  }, [refresh]);

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

  const handleRefresh = () => {
    setRefresh((prev) => prev + 1);
  };

  const toggleSortOrder = () => {
    setIsAdminSortOrder(!isAdminSortOrder);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center gap-2">
        <Loader />
        <p>Fetching all users, Please be patience</p>
      </div>
    );
  }

  return (
    <>
      {!users ? (
        <p className="text-2xl font-medium text-center ">No User Found</p>
      ) : (
        <div className="shadow-lg shadow-gray-800 backdrop-blur-lg rounded-sm px-3 my-2">
          <div className="flex items-center justify-start gap-2">
            <Button
              className="cursor-pointer"
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
            <Button className="cursor-pointer" onClick={handleRefresh} asChild>
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs">Refresh</span>
              </div>
            </Button>

            <div>
              <div className="flex items-center border border-black dark:border-white rounded-md h-fit w-fit sm:px-6 px-4 py-2 gap-2">
                <p className="font-semibold text-sm sm:text-md">Total Users</p>
                <p className="font-semibold text-sm sm:text-md">
                  {" "}
                  {totalUsers}
                </p>
              </div>
            </div>
          </div>
          <Table >
            <TableCaption>All the users on Internhub website.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead onClick={toggleSortOrder}>Role</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone Number</TableHead>
                <TableHead>College</TableHead>
                <TableHead>Batch</TableHead>
                <TableHead>Semester</TableHead>
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
                    batch={user?.batch}
                    semester={user?.semester}
                    college={user?.college}
                  />
                ))}
            </TableBody>
          </Table>
        </div>
      )}
    </>
  );
};
export default AdminHome;
