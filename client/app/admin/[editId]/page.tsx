import AddCompany from "@/components/admin/CompanyAdd";
import AddPodcast from "@/components/admin/PodcastAddForm";
import AddEvent from "@/components/admin/EventAddForm";

const EditPage = ({ params }: { params: { editId: string } }) => {
  const editId = params.editId;
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
