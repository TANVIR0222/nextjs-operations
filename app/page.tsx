import { getAllPost } from "@/actions/post-actions";
import CalendarEvents from "@/feature/calendar/components/calendar-events";

const page = async () => {
  // const res = await getAllPost();
  // console.log(res);

  return (
    <div>
      <CalendarEvents />
    </div>
  );
};

export default page;
