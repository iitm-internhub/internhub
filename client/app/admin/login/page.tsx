/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CHxuDLh2DGg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AdminLogin = () => {
  return (
    <div className="flex items-center min-h-screen px-4">
      <div className="w-full max-w-md mx-auto space-y-8 bg-blue-400 p-4 rounded-lg backdrop-blur-lg shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Admin Panel</h1>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Username" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="Password"
              required
              type="password"
            />
          </div>
          <Button className="w-full">Login</Button>
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
