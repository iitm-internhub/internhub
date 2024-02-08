import AdminLogin from "@/components/shared/AdminLogin";
import AdminRoot from "@/components/shared/AdminRoot";

const Admin = () => {
  const isAdmin = true;

  return <>{!isAdmin ? <AdminLogin /> : <AdminRoot />}</>;
};

export default Admin;
