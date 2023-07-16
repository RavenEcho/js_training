const { getCircleLength, getCircleArea } = require("./calcCircle");

test("getCircleLength with radius 22 should return 138.2", () => {
  expect(getCircleLength(22)).toBeCloseTo(138.2, 1);
});

test("getCircleArea with radius 9 should return 254.47", () => {
  expect(getCircleArea(9)).toBeCloseTo(254.47, 2);
});

test("getCircleLength with no argument should return NaN", () => {
  expect(getCircleLength()).toBeNaN();
});

test("getCircleArea with no argument should return NaN", () => {
  expect(getCircleArea()).toBeNaN();
});
