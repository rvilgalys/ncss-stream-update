export default dateArg => {
  const date = new Date(dateArg); // make sure our date is valid, and then reset the time to 0s
  date.setUTCHours(0);
  date.setUTCMinutes(0);
  date.setUTCSeconds(0);
  date.setUTCMilliseconds(0);
  return date;
};
