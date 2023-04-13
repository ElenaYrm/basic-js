const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return chainMaker;
  },
  removeLink(position) {
    let max = this.chain.length;
    if (typeof position !== 'number' || position > max || position <= 0 || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain = this.chain.filter((item, index) => index !== (position - 1));
    return chainMaker;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return chainMaker;
  },
  finishChain() {
    const resArr = this.chain.map((item, index) => {
      if (index === 0) {
        return `( ${item} )`;
      } else {
        return `~~( ${item} )`;
      }
    });
    const resStr = resArr.join('');
    this.chain = [];
    return resStr;
  }
};

module.exports = {
  chainMaker
};
