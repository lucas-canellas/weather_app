export const convertUnixToDate = (unix: number) => {
  const date = new Date(unix * 1000);
  const day = date.getDate();

  const current = new Date();
  const tomorrow = current.getDate() + 1;

  const weekDay = date.toLocaleString("en-us", {
    weekday: "long",
  });

  const monthName = date.toLocaleString("en-us", {
    month: "long",
  });

  return day === tomorrow
    ? "Tomorrow"
    : ` ${weekDay.substring(0, 3)}, ${day} ${monthName.substring(0, 3)}`;
};
