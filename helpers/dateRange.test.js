const esmImport = require("esm")(module);
const dateRange = esmImport("./dateRange");

test("Date Range Helper Test", () => {
  const someDate = new Date("10/1/2015");
  const someOtherDate = new Date("10/5/2015");
  const result = [
    new Date(Date.UTC(2015, 9, 1, 0, 0, 0, 0)), // test looks weird because months start at 0
    new Date(Date.UTC(2015, 9, 2, 0, 0, 0, 0)),
    new Date(Date.UTC(2015, 9, 3, 0, 0, 0, 0)),
    new Date(Date.UTC(2015, 9, 4, 0, 0, 0, 0)),
    new Date(Date.UTC(2015, 9, 5, 0, 0, 0, 0))
  ];

  expect(dateRange(someDate, someOtherDate)).toEqual(result);
  expect(dateRange(someOtherDate, someDate)).toEqual(result);
});
