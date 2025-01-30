import { DateTime } from "luxon";

export const formatDate = (date) => {
  if (!date) return;
  const formattedDate = DateTime.fromISO(date);
  const dateTime = formattedDate.toFormat("MMM dd, yyyy");
  return dateTime;
};
