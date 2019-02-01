const csvToBrand = (line, date) => {
  const regex = line[0].match(/\d+/);
  if (regex === null) return null;

  const ncid = parseInt(regex[0]);

  return {
    ncid: ncid, // regex here removes the '=' and quotes that are in there at each new line for some reason
    supplier: line[1],
    brand: line[2],
    alloc: parseInt(line[5]),
    size: line[6],
    palletSize: parseInt(line[7]),
    day: date,
    balance: parseInt(line[3]),
    comments: line[4]
  };
};

export default csvToBrand;
