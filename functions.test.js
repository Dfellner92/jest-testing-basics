const functions = require("./functions");

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Expect answer to not be 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});
