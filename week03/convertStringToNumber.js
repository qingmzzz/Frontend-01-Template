const convertStringToNumber = (string, x = 10) => {
  const chars = string.split('');
  let number = 0;

  let i = 0;
  while (i < chars.length && chars[i] !== '.') {

    number = number * x;
    number += chars[i].codePointAt(0) - '0'.codePointAt(0);
    i++;
  }

  if (chars[i] === '.') {
    i++;
  }

  let fraction = 1;
  while (i < chars.length) {
    fraction = fraction / x;
    number += (chars[i].codePointAt(0) - '0'.codePointAt(0)) * fraction;
    i++;
  }
  return number;
};

// console.log(convertStringToNumber('1.5e10', 10)); //ERROR
console.log(convertStringToNumber('1.5', 10));
// console.log(convertStringToNumber('1.5', 2));  //ERROR