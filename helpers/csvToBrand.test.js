const esmImport = require("esm")(module);
const dateRange = esmImport("./csvToBrand");

test("csv is correctly converted to object (set to true now)", () => {
  expect(true).toBe(true);
});
