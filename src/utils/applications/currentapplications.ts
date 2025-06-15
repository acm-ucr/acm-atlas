import {
  GoogleEventProps,
  TypedGoogleEventProps,
  calendarSources,
} from "@/components/events/calendarcall";
import { useQuery } from "@tanstack/react-query";

const getCurrentApps = () => {
  return useQuery<{
    currentApps: TypedGoogleEventProps[];
  }>({
    queryKey: ["googleCalendarApplications"],
    queryFn: async () => {
      const now = new Date();
      const tenWeeksAgo = new Date(
        now.getTime() - 60 * 60 * 24 * 7 * 10 * 1000,
      ).toISOString();
      const tenWeeksAhead = new Date(
        now.getTime() + 60 * 60 * 24 * 7 * 10 * 1000,
      ).toISOString();

      const results = await Promise.all(
        calendarSources.map(async ({ id, eventType }) => {
          try {
            const res = await fetch(
              `https://www.googleapis.com/calendar/v3/calendars/${id}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${tenWeeksAgo}&timeMax=${tenWeeksAhead}`,
            );

            if (!res.ok) {
              console.warn(`Failed to fetch ${eventType} calendar`);
              return [];
            }

            const data = await res.json();

            return (data.items || []).map((item: GoogleEventProps) => ({
              description: item.description,
              eventType,
              start: item.start,
              end: item.end,
              location: item.location,
            }));
          } catch (err) {
            console.error(`Error fetching ${eventType} events`, err);
            return [];
          }
        }),
      );

      const allEvents: TypedGoogleEventProps[] = results.flat();
      const currentApps = allEvents.filter((event) =>
        event.description?.includes("Application:"),
      );
      return { currentApps };
    },
  });
};

export default getCurrentApps;
