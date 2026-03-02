function sum(number1, number2) {
  if (typeof number1 !== "number") {
    return "Error";
  }
  return number1 + number2;
}

exports.sum = sum;
