const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	if (Array.isArray(members))
	{} else { return false; };
	let name = "";
	for (let i = 0; i < members.length; i++) {
		if (typeof members[i] === 'string')
		{
			for (let j = 0; j < members[i].length; j++) {
				if (/[a-zA-Z]/.test(members[i].charAt(j))) {
					name += members[i].charAt(j);
					break;
				}
			}
		}
	}
	name = name.toUpperCase();
	name = name.split('').sort().join('');
	return name;
}

module.exports = {
  createDreamTeam
};
