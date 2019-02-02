const esmImport = require("esm")(module);
const standardizeDate = esmImport("./standardizeDate");

test("check for data standardization", () => {
  const now = new Date();
  const standard = standardizeDate(now);
  expect(standard.getUTCSeconds()).toBe(0);
  expect(standard.getUTCMinutes()).toBe(0);
  expect(standard.getUTCHours()).toBe(0);
  expect(standard.getUTCMilliseconds()).toBe(0);
});
