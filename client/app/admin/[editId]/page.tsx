import AddCompany from "@/components/admin/CompanyAdd";
import AddPodcast from "@/components/admin/PodcastAdd";
import AddEvent from "@/components/admin/EventAdd";

const EditPage = ({ params }: { params: { editId: string } }) => {
  const editId = params.editId;
  console.log(params);
  switch (editId) {
    case "company":
      return <AddCompany />;
    case "podcast":
      return <AddPodcast />;
    case "event":
      return <AddEvent />;
    default:
      return <p>Invalid editId</p>;
  }
};

export default EditPage;
