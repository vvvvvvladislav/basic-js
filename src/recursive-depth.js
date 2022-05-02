const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    constructor(depth, kostyl){
        this.depth = 0;
		this.kostyl = []
    }
	getDepth()
	{
		return this.depth;
	}
	incDepth()
	{
		this.depth++;
	}
	setZero()
	{
		this.depth = 0;
	}
	calculateDepth(arr) {
		let count = JSON.stringify(arr);
		count = count.replace(/[^[\]]/g, "");
		if (count != "")
		{
			let i = 0;
			while (count != "") {
				count = count.replace(/\[\]/g, "");
				this.incDepth();
				i++;
			}
			this.kostyl.push(i)
		    this.calculateDepth(count);
			this.calculateDepth(count);
		}
		const result = this.getDepth();
		return this.kostyl[this.kostyl.length-1];
	}
	//у меня проблемы с обнулением переменной, поэтому я переписал всё так ужасно, сорри (плюс ещё время в обрез).
	//изначально рекурсия была более рекурсивна, но увы я не смог совладать с обнулением depth, поэтому.. вышло как вышло, да
}

module.exports = {
  DepthCalculator
};
