import validatePhone from '../js/validatePhone.js';

test('testing phone validate  func with phone 1', () => {
  const testPhoneOne = '8 (927) 000-00-00';
  const result = validatePhone(testPhoneOne);
  expect(result).toBe('+79270000000');
});
test('testing phone validate  func with phone 2', () => {
  const testPhoneTwo = '+7 960 000 00 00';
  const result = validatePhone(testPhoneTwo);
  expect(result).toBe('+79600000000');
});
test('testing phone validate  func with phone 3', () => {
  const testPhoneThree = '+86 000 000 0000';
  const result = validatePhone(testPhoneThree);
  expect(result).toBe('+860000000000');
});
