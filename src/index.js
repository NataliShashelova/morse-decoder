const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode(expr) {
	// write your solution here
	let arrWords = [];
	for (let i = 0; i < expr.length; i += 10) {
		arrWords.push(expr.slice(i, i + 10));
	}

	let arrDots = arrWords.map(function (str) {
		return str.replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '');
	});

	let arrMorse = arrDots.map(function (str) {
		if (str == '**********') {
			return ' ';
		} else {
			return MORSE_TABLE[str];
		}
	});

	return arrMorse.join('');

}

module.exports = {
	decode
}