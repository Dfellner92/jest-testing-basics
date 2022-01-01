const functions = require("./functions");

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Expect answer to not be 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as truth
// toBeFalsy matches anything that an if statement treats as false

test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("should be falsy", () => {
  expect(functions.checkValue(0)).toBeFalsy();
});

// toBe wont work. only for primitives. nonprims, use toEqual

test("User Obj should be Dan Fellner", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Dan",
    lastName: "Fellner",
  });
});
