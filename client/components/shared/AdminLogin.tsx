import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface AdminLoginProps {
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
  username: string | undefined;
  password: string | undefined;
  handleSubmit: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({
  setPassword,
  setUsername,
  username,
  password,
  handleSubmit,
}) => {
  return (
    <div className="flex items-center min-h-screen px-4">
      <div className="w-full max-w-md mx-auto space-y-8 p-4 rounded-lg backdrop-blur-lg shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Admin Panel</h1>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder="Username"
              required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={username}
              className="dark:text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="Password"
              required
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="dark:text-white"
            />
          </div>
          <Button className="w-full" onClick={handleSubmit}>
            Login
          </Button>
        </div>
        <div className="text-center text-sm">
          <Link className="underline" href="#">
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
