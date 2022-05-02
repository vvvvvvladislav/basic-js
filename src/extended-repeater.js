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
function repeater(str, options = {
		repeatTimes : 1,
		separator : '+',
		addition : '+',
		additionRepeatTimes : 1,
		additionSeparator: '|'
	}) {
	ans = '';
	if (typeof options.addition == 'null')
	{
	    options.addition = "null"
	}
	if (typeof options.addition == 'undefined')
	{
	    options.addition = ""
	}
	if (options.separator == undefined)
	{
	    options.separator = "+"
	}
	if (options.additionSeparator == undefined)
	{
	    options.additionSeparator = "|"
	}
	if (options.repeatTimes == undefined)
	{
	    options.repeatTimes = 1
	}
	if (options.additionRepeatTimes == undefined)
	{
	    options.additionRepeatTimes = 1
	}
	ans += str;
	ans += options.addition;
	for (let i = 1; i < options.repeatTimes; i++) {
		for (let j = 1; j < options.additionRepeatTimes; j++) {
			ans += options.additionSeparator;
			ans += options.addition;
		}
		ans += options.separator;
		ans += str;
		ans += options.addition;
	}
	for (let j = 1; j < options.additionRepeatTimes; j++) {
		    ans += options.additionSeparator;
			ans += options.addition;
	}
	return ans;
}

module.exports = {
  repeater
};
