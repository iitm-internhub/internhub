"use client";
import { useRouter } from "next/navigation";
import AddCompany from "@/components/admin/CompanyAdd";
import AddPodcast from "@/components/admin/PodcastAddForm";
import AddEvent from "@/components/admin/EventAddForm";
import { useEffect, useState } from "react";

const EditPage = ({ params }: { params: { editId: string } }) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(true);
  const [isLoadingAuth, setIsLoadingAuth] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const isAdminTokenPresent = () => {
      try {
        setIsLoadingAuth(true);
        const isAdminValue = localStorage.getItem("admin_access_token");
        if (isAdminValue) {
          setIsAdmin(true);
          return;
        }
        setIsAdmin(false);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoadingAuth(false);
      }
    };

    isAdminTokenPresent();
  }, []);

  const editId = params.editId;

  if (isLoadingAuth) return <p>Loading..</p>;
  if (isAdmin) {
    switch (editId) {
      case "company":
        return <AddCompany />;
      case "podcast":
        return <AddPodcast />;
      case "event":
        return <AddEvent />;
    }
  } else return router.push("/admin");
};

export default EditPage;
