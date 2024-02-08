import { useEffect } from "react";
import { useRouter } from "next/router";
import AsideNavAdmin from "@/components/shared/AsideNavAdmin";
import { useAuth } from "./../../components/context/auth";

const Admin = () => {
  const router = useRouter();

  const { userId } = useAuth();
  useEffect(() => {
    // Replace this with your actual logic for checking if the user is an admin
    const isAdmin = userId;

    if (!isAdmin) {
      router.push("/admin/login");
    }
  }, []);

  return <AsideNavAdmin />;
};

export default Admin;
