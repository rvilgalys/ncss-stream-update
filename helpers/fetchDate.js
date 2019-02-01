import fetchCSV from "./fetchCSV";
import parse from "csv-parse";
import csvToBrand from "./csvToBrand";

const fetchDate = async date => {
  const day = new Date(date);
  const output = [];
  const errors = [];
  const parser = parse({
    relax: true
  });

  console.log("streaming warehouse csv data");

  parser.on("readable", () => {
    let line;
    while ((line = parser.read())) {
      const brand = csvToBrand(line, day);
      if (brand) output.push(brand);
    }
  });
  try {
    console.log(`starting csv fetch for ${day}`);
    const csv = await fetchCSV(date);
    parser.write(csv);
    parser.end();
    return new Promise((resolve, reject) => {
      parser.on("error", err => {
        errors.push(err);
        reject(err);
        console.log(err.message);
      });

      parser.on("end", () => {
        console.log(`ending csv fetch for ${day}`);
        resolve(output);
      });
    });
  } catch (err) {
    throw err;
  }
};

export default fetchDate;
