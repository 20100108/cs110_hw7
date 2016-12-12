const alphabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
const alphArr = alphabet.split("");

const CeasaerCipher = function(str, amount) {
	if (amount > 26) {
		amount -= 26 * Math.floor(amount/26);
	}

	let strArr = str.split("");

	for( let i = 0; i < strArr.length; i++ ) {
		let alphNum = alphArr.indexOf(strArr[i]);
		let newLetter = alphNum + 2*amount;
		if (newLetter > 52) {
			newLetter -= 52;
		}
		strArr[i] = alphArr[newLetter];

		if (alphNum === -1) {
			strArr[i] = " ";
		}
	}
	return strArr.join("");
};

console.log(CeasaerCipher("Hello World", 5));
console.log(CeasaerCipher("Hello World", 21));