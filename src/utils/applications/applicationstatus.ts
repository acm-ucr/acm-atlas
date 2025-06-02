import { TypedGoogleEventProps } from "@/components/events/calendarcall";

export const getAppStatus = (
  programName: string,
  currentApps: TypedGoogleEventProps[],
) => {
  if (currentApps?.some((event) => event.eventType === programName)) {
    const appStatus = currentApps?.find(
      (event) => event.eventType === programName,
    );
    const startDate = appStatus?.start?.dateTime || appStatus?.start?.date;
    const startAppDate = new Date(startDate as string);
    startAppDate.setHours(0, 0, 0, 0);
    const today = new Date();

    const difference = startAppDate.getTime() - today.getTime();
    const daysApart = Math.ceil(difference / (1000 * 60 * 60 * 24));

    if (daysApart > 0) {
      return { status: `OPENING IN ${daysApart} DAYS`, appLink: "/" };
    }

    const endDate = appStatus?.end?.dateTime || appStatus?.end?.date;
    const endAppDate = new Date(endDate as string);
    endAppDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    if (endAppDate < today) {
      return { status: "APPLICATION CLOSED", appLink: "/" };
    }

    return {
      status: getSeason(startDate as string),
      appLink: appStatus?.location as string, // The location field holds the link
    };
  } else {
    return { status: "APPLICATION CLOSED", appLink: "/" };
  }
};

const getSeason = (startDate: string) => {
  const date = new Date(startDate);

  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1) as number;
  console.log(date);
  console.log(month);

  if (month >= 2 && month <= 4) {
    return `SPRING '${year}`;
  } else if (month >= 5 && month <= 7) {
    return `SUMMER '${year}`;
  } else if (month >= 8 && month <= 10) {
    return `FALL '${year}`;
  }

  return `WINTER '${year + 1}`;
};
