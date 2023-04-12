const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (s1.length === 0 || s2.length === 0) return 0;

  let result = [];
  let minStr = s1.length < s2.length ? s1 : s2;
  let secStr = minStr === s1 ? s2 : s1;
  let minArr = minStr.split('');
  let subStr = [minStr];

  for (let i = 0; i <= minArr.length - 1; i++) {
    for (let p = i + 1; p <= minArr.length; p++) {
      const newStr = minStr.slice(i, p);
      if (!subStr.includes(newStr)) {
        subStr.push(newStr);
      }
    }
  }
  subStr.sort((a, b) => a.length - b.length);
  let count = 0;

  while (count < subStr.length) {
    const item = subStr[count];
    if (secStr.includes(item)) {
      result.push(item);
    }
    count++;
  }

  return result.length;
}

module.exports = {
  getCommonCharacterCount
};
