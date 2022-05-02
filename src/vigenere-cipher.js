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
		constructor(value) {
	        
            this.inverted = -1;
			if ((value == null) || (value == true))
			{
				this.inverted = 0;
			} else 
			{
				this.inverted = 1;
			}
		}
  encrypt(a,b) {
	if ((a === null) || (b === null) || (a === undefined) || (b === undefined) || (a === '') || (b === ''))
	{
		throw new Error('Incorrect arguments!');
	}
    let c = 0;
	let ans = '';
	let i_special = 0;
	a = a.toUpperCase();
	b = b.toUpperCase();
	for (let i = 0; i < a.length; i++)
		{   
			console.log(i_special)
			if (((a.charCodeAt(i)-65) > -1) && ((a.charCodeAt(i)-65) < 26)) 
			{ 
				c = (((a.charCodeAt(i)-65) + (b.charCodeAt((i_special)%(b.length))-65))%26+65);
				i_special++;
			}
			else
			{
				c = a.charCodeAt(i)
			}
			ans += String.fromCharCode(c);
		}
	
	if (this.inverted == 1) {
		let ans_r = ans.split("").reverse().join("");
		return ans_r;
	} else {
		return ans;
	}
  }
  decrypt(a,b) {
	if ((a === null) || (b === null) || (a === undefined) || (b === undefined) || (a === '') || (b === ''))
	{
		throw new Error('Incorrect arguments!');
	}
	let c = 0;
	let ans = '';
	let i_special = 0;
	a = a.toUpperCase();
	b = b.toUpperCase();
	for (let i = 0; i < a.length; i++)
	{   
		if (((a.charCodeAt(i)-65) > -1) && ((a.charCodeAt(i)-65) < 26)) 
		{ 
			console.log((a.charCodeAt(i)-65));
			console.log(b.charCodeAt((i_special)%(b.length))-65);
			if (((a.charCodeAt(i)-65)-(b.charCodeAt((i_special)%(b.length))-65))<0) {
			c = ((a.charCodeAt(i)-65)-(b.charCodeAt((i_special)%(b.length))-65))+91; }
			else
			{
				c = ((a.charCodeAt(i)-65)-(b.charCodeAt((i_special)%(b.length))-65))+65;
			}
			i_special++;
		}
		else
		{
			c = a.charCodeAt(i)
		}
		ans += String.fromCharCode(c);
	}
	if (this.inverted == 1) {
		let ans_r = ans.split("").reverse().join("");
		return ans_r;
	} else {
			return ans;
		}
	}
}

module.exports = {
  VigenereCipheringMachine
};
