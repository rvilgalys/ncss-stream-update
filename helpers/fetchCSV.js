import axios from "axios";

const fetchCSV = async date => {
  // set up our request header
  const day = new Date(date);

  const cookie = `ReportDate=${day.getMonth() +
    1}/${day.getDate()}/${day.getFullYear()}`;

  const axiosOptions = {
    url: "https://abc.nc.gov/Boards/ExportData",
    method: "post",
    headers: {
      Cookie: cookie
    }
  };

  try {
    const response = await axios(axiosOptions);
    if (response.status !== 200) {
      throw new Error(
        `Expected status code 200, instead got ${response.status}`
      );
    }
    if (response.data.length <= 95) {
      // this means our CSV is empty!
      throw new Error(`empty csv returned for ${date}`);
    }
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export default fetchCSV;
