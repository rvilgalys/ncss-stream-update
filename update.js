import fetchDate from "./helpers/fetchDate";

(async () => {
  try {
    const date = new Date();
    const csv = await fetchDate(date);
    console.log(csv);
  } catch (err) {
    console.log("ERROR:");
    console.log(err);
  }
})();
