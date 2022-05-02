const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
	if (!(Array.isArray(arr))) {
		throw new Error("'arr' parameter must be an instance of the Array!")
	}
	let output = [];
	let ignore = false;
	let ignore_prev = false
	for (let i = 0; i < arr.length; i++) {
			if (arr[i] == "--discard-next")
			{
				ignore = true;
			}
			else if (arr[i] == "--discard-prev")
			{
				if ((typeof arr[i-1] == 'undefined') || (ignore_prev == true)){
					
				} else
				{output.pop();}
				ignore_prev = false;
			}
			else if (arr[i] == "--double-next")
			{
				if (typeof arr[i+1] == 'undefined') {
					
				} else
				{output.push(arr[i+1]);}
			}
			else if (arr[i] == "--double-prev")
			{
				if ((typeof arr[i-1] == 'undefined') || (ignore_prev == true)) {
					
				} else
				{output.push(arr[i-1]);}
				ignore_prev = false;
			}
			else if (ignore == true)
			{
				ignore = false;
				ignore_prev = true;
			}
			else {
				output.push(arr[i]);
			}
	}
	return output;
}

module.exports = {
  transform
};
