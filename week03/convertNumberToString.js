let convertNumberToString = (number, x = 10) => {
  let integer = Math.floor(number);
  let fraction = number - integer;
  let string = '';

  while (integer > 0) {
    string = integer % x + string;
    integer = Math.floor(integer / x);
  }

  if (fraction > 0) {
    string += '.';
  }
  while (fraction > 0) {
    let integer = Math.floor(fraction * x);
    string += integer;
    fraction = fraction * x - integer;
  }

  return string;
};
console.log(convertNumberToString('1.5e10', 10));
console.log(convertNumberToString('1.5', 10));
console.log(convertNumberToString('1.5', 2));