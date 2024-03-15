"use client"
import { useRouter } from "next/navigation";
import AddCompany from "@/components/admin/CompanyAdd";
import AddPodcast from "@/components/admin/PodcastAddForm";
import AddEvent from "@/components/admin/EventAddForm";
import { useEffect, useState } from "react";

const EditPage = ({ params }: { params: { editId: string } }) => {
  const [isAdmin, setIsAdmin] = useState<Boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const checkIsAuthenticated = () => {
      const admin_access_token = localStorage.getItem("admin_access_token");
      if (admin_access_token) {
        setIsAdmin(true);
      }
    };

    checkIsAuthenticated();
  }, []);

  const editId = isAdmin ? params.editId : "";

  switch (editId) {
    case "companyAdd":
      return <AddCompany />;
    case "podcast":
      return <AddPodcast />;
    case "event":
      return <AddEvent />;
    default:
      useEffect(() => {
        router.push("/");
        window.location.href='/admin'
        return
      }, []);
      
  }
};

export default EditPage;
