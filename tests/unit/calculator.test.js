const calculator = require("../../models/calculator");
test("should sum 2 + 2 to be 4", () => {
  const result = calculator.sum(2, 2);
  expect(result).toBe(4);
});
test("should sum 5 + 100 to be 105", () => {
  const result = calculator.sum(5, 100);
  expect(result).toBe(105);
});
test("should sum 'banana' + 100 to be 'Error'", () => {
  const result = calculator.sum("banana", 100);
  expect(result).toBe("Error");
});
