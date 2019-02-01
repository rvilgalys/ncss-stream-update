import StandardDate from "./standardizeDate";

const dateRange = (start, end) => {
  const startDate = StandardDate(Math.min(start, end));
  const endDate = StandardDate(Math.max(start, end));

  let day = startDate;
  const range = new Array();

  while (day <= endDate) {
    range.push(new Date(day));
    day.setDate(day.getDate() + 1);
  }
  return range;
};

export default dateRange;
