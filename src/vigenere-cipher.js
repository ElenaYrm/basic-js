const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.isReverse = !type;
  }

  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  encrypt(text, key) {
    if (!text || !key) throw new Error('Incorrect arguments!');
    let code = '';
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (!this.alphabet.includes(text[i].toUpperCase())) {
        code += text[i];
        count ++;
      } else {
        const charText = this.alphabet.indexOf(text[i].toUpperCase());
        const charKey = this.alphabet.indexOf(key[(i - count) % key.length].toUpperCase());
        code += this.alphabet[(charText + charKey) % this.alphabet.length];
      }
    }
    return this.isReverse ? code.split('').reverse().join('') : code;
  }

  decrypt(text, key) {
    if (!text || !key) throw new Error('Incorrect arguments!');
    let code = '';
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (!this.alphabet.includes(text[i].toUpperCase())) {
        code += text[i];
        count ++;
      } else {
        const charText = this.alphabet.indexOf(text[i].toUpperCase());
        const charKey = this.alphabet.indexOf(key[(i - count) % key.length].toUpperCase());
        code += this.alphabet[(charText - charKey + this.alphabet.length) % this.alphabet.length];
      }
    }
    return this.isReverse ? code.split('').reverse().join('') : code;
  }
}

module.exports = {
  VigenereCipheringMachine
};
