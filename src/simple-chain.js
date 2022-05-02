const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	data: [],
	data_str: "",
	getLength() {
		return this.data.length;
	},
	addLink(value) {
		this.data.push(value);
		return this;
	},
	removeLink(position) {
		if ((Number.isInteger(position)) && (position > 0) && (position <= (this.getLength()))){
			this.data.splice((position-1),1);
			return this;
		} else
		{
			this.data = [];
			throw new Error ("You can't remove incorrect link!");
		}
	},
	reverseChain() {
		this.data = this.data.reverse();
		return this;
	},
	finishChain() {
		let chain_string = "";
		for (let i = 0; i < this.data.length; i++) {
			chain_string += '( ';
			chain_string += this.data[i];
			chain_string += ' )~~'
		}
		chain_string = chain_string.slice(0, -2);
		this.data = [];
		return chain_string;
	}
};

module.exports = {
  chainMaker
};
