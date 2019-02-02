import dateRange from "./helpers/dateRange";
import fetchDate from "./helpers/fetchDate";

const fetchDateRange = async (start, end, action) => {
  const dates = dateRange(start, end);

  try {
    let cache = [];
    for (const date of dates) {
      const data = await fetchDate(date);
      const output = calculateDiffs(data, cache);

      // do something with our data here like put it in the database ? woah!

      cache = [...data];
    }
  } catch (err) {
    console.log(err);
  }
};

const calculateDiffs = (data, cache) => {
  return data.map(entry => {
    let diff = 0;
    if (cache.length === 0) {
      diff = 0;
    } else {
      let cacheMatch = cache.find(cacheEntry => cacheEntry.ncid === entry.ncid);
      let cacheBalance = entry.balance;
      if (cacheMatch === undefined) {
        console.log(
          `possible new entry for ${
            entry.ncid
          }, balance is ${cacheBalance}, whole entry follows`
        );

        cacheBalance = entry.balance;
      } else {
        cacheBalance = cacheMatch.balance;
      }
      diff = entry.balance - cacheBalance;
      if (diff > 0) {
        console.log(`positive diff detected of ${diff}`);
        console.log(entry);
      }
    }
    return {
      ncid: entry.ncid,
      balance: entry.balance,
      diff: diff
    };
  });
};

(async () => {
  const start = new Date("1/9/2019");
  const end = new Date();
  const results = await fetchDateRange(start, end);
})();
