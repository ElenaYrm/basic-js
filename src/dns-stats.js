const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};

  if (domains.length > 0) {
    for (let item of domains) {
      const arr = item.split('.').reverse();
      let temp = arr[0];
      for (let i = 0; i < arr.length; i++) {
        if (result[`.${temp}`]) {
          result[`.${temp}`] ++;
        } else {
          result[`.${temp}`] = 1;
        }
        temp = `${temp}.${arr[i + 1]}`;
      }
    }
  }

  return result;
}

module.exports = {
  getDNSStats
};
