import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";

interface UsersTableProps {
  _id: string;
  username: string;
  email: string;
  phone_number: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UsersTable: React.FC<UsersTableProps> = ({
  _id,
  username,
  isAdmin,
  email,
  phone_number,
  createdAt,
}) => {
  return (
    <>
      <TableRow
        key={_id}
        className={`${isAdmin && "dark:bg-red-700 bg-red-500"}`}
      >
        <TableCell>
          <Badge>{isAdmin ? "admin" : "user"}</Badge>
        </TableCell>
        <TableCell className="font-medium">{username}</TableCell>
        <TableCell>{email}</TableCell>
        <TableCell>{phone_number}</TableCell>
        <TableCell className="text-right">
          {new Date(createdAt).toDateString()}
        </TableCell>
      </TableRow>
    </>
  );
};

export default UsersTable;
