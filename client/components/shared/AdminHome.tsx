"use client";

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
import axiosInstance from "@/lib/axios-instance";
import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Badge } from "../ui/badge";

import exportFromJson from "export-from-json";
import { Button } from "../ui/button";

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
  const [users, setUsers] = useState<Array<userInterface>>();

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const admin_token = localStorage.getItem("admin_access_token");
        const { data } = await axiosInstance.post(
          "/api/v1/info-admin/all-users",
          {},
          { headers: { Authorization: `Bearer ${admin_token}` } }
        );

        // const normalUsers = data?.users.filter(
        //   (user: userInterface) => user.isAdmin === false
        // );
        setUsers(data?.users);
      } catch (error) {
        const err = error as AxiosError;
        const data: any = err?.response?.data;
        toast.error(data?.message);
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

  return (
    <>
      <Button className="w-full my-4" onClick={handleDownloadCsv}>
        Export to CSV
      </Button>
      <Table>
        <TableCaption>All the users on Internhub website.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Role</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead className="text-right">Joined On</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((user) => (
            <TableRow
              key={user._id}
              className={`${user.isAdmin && "dark:bg-red-700 bg-red-500"}`}
            >
              <TableCell>
                <Badge>{user?.isAdmin ? "admin" : "user"}</Badge>
              </TableCell>
              <TableCell className="font-medium">{user?.username}</TableCell>
              <TableCell>{user?.email}</TableCell>
              <TableCell>{user?.phone_number}</TableCell>
              <TableCell className="text-right">
                {new Date(user?.createdAt).toDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">{users?.length} Users</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
};
export default AdminHome;
