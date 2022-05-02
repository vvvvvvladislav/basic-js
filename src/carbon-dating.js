const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
	if (typeof sampleActivity === 'string')
	{} else { return false; }
  let t = 0;
  var SAMPLE_ACTIVITY = parseFloat(sampleActivity);
  if (isNaN(SAMPLE_ACTIVITY))
  {
	  return false;
  } else
	  {
		  if (SAMPLE_ACTIVITY<=0 || SAMPLE_ACTIVITY>15)
		{
		  return false;
		}
	  }
  t = Math.ceil(Math.log(MODERN_ACTIVITY/SAMPLE_ACTIVITY)*HALF_LIFE_PERIOD/0.693);
  return t;
}

module.exports = {
  dateSample
};
