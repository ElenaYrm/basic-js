const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';

  const repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  const separator = options.separator ? options.separator : '+';
  // const addition = options.addition ? options.addition: '';
  let addition = '';
  if (typeof options.addition === 'boolean' || options.addition === null) {
    addition = `${options.addition}`;
  } else if (options.addition) {
    addition = options.addition;
  }

  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  const additionSeparator = options.additionSeparator ? options.additionSeparator : '|';

  for (let i = 1; i <= repeatTimes; i++) {
    let addStr = '';
    if (addition) {
      addStr = addition;
      for (let i = 2; i <= additionRepeatTimes; i++) {
        addStr = addStr + additionSeparator + addition;
      }
    }
    if (i !== repeatTimes) {
      result = result + str + addStr + separator;
    } else {
      result = result + str + addStr;
    }
  }

  return result;
}

module.exports = {
  repeater
};
