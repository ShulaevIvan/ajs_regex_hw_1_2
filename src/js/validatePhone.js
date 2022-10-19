function validatePhone(number) {
  const plus = '+';
  let tmpStr = number.replace(/(\+)|[(]|[)]|[-]/g, '');
  tmpStr = tmpStr.replace(/[7|8]\s/, '7');
  tmpStr = tmpStr.replace(/\s/g, '');
  tmpStr = plus + tmpStr;
  return tmpStr;
}

console.log(validatePhone('8 (927) 000-00-00'));
console.log(validatePhone('+7 960 000 00 00 '));
console.log(validatePhone('+46 960 000 00 00 '));
console.log(validatePhone('+5 960 000 00 00 '));
console.log(validatePhone('+86 000 000 0000'));
