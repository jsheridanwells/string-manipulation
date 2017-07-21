let input;
const button = document.getElementById('submit');
const reversed = document.getElementById('reversed');
const alphabetized = document.getElementById('alphabetized');
const yes = document.getElementById('yes');
const no = document.getElementById('no');

const checkForLetters = () => {
	input = document.getElementById('input').value;
	let letters = /^[A-Za-z]+$/;
	if (input.match(letters)) {
		return input;
	} else {
		alert('You can only enter letters');
	}
}

function reverse (str) {
	if (str !== undefined) {
		let newStr = '';
		for (let i = str.length - 1; i >= 0; i--) {
		   newStr += str[i];
		}
		reversed.innerText = newStr;
		return newStr;
	}
}

function alphabetize (str) {
	let newStr = '';
	if (str !== undefined) {
		newStr = str.split('').sort().join('');
	}
	alphabetized.innerText = newStr;
}

function checkPalindrome() {
	input = document.getElementById('input').value;
	for(let i = 0; i < input.length; i++) {
		if (input[i] !== input[input.length - 1 - i]) {
			return false
		}
	}
	return true;
}

function changePalindrome(x) {
	if (x) {
		yes.classList.add('highlight');
		no.classList.add('no-highlight');
	} else {
		yes.classList.add('no-highlight');
		no.classList.add('highlight');
	}
}

button.addEventListener('click', function() {
	alphabetize(reverse(checkForLetters()));
	changePalindrome(checkPalindrome());
});