import { getAllPost } from "@/actions/post-actions";
import { BugReportForm } from "@/components/tanstack-form";

const page = async () => {
  const res = await getAllPost();
  console.log(res);

  return (
    <div>
      <BugReportForm />
    </div>
  );
};

export default page;
