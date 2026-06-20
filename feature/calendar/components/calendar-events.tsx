"use client";
import { useQuery } from "@tanstack/react-query";

export default function CalendarEvents() {
  const {
    data: events,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["calendar-events"],
    queryFn: async () => {
      const res = await fetch("/api/calendar");
      if (!res.ok) throw new Error("Failed to fetch events");
      return res.json();
    },
  });

  if (isLoading) return <p>Loading calendar events...</p>;
  if (error) return <p>Error loading events</p>;


  console.log(events)

  return (
    <div>
      <h2>Your Upcoming Events</h2>
      {/* <ul>
        {events?.map(({ event }: any) => (
          <li key={event.id}>
            <strong>{event.summary}</strong> -{" "}
            {new Date(
              event.start.dateTime || event.start.date,
            ).toLocaleString()}
          </li>
        ))}
      </ul> */}
    </div>
  );
}
