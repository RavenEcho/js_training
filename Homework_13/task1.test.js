const { sum } = require("./main.js");

test("adds 0.1 + 0.2 to equal 0.3", () => {
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3, 5);
});
