const numbers = [23, 45, 11, 48, 67, 90, 12, 45];

function getSorted(numbers) {
	for (let i = 1; i < numbers.length; i++) {
		console.log(`Pass ${i}: ${getStringFromArray(numbers, i)}`);
		console.log(`	------------------------------`);
		for (let j = 0; j < numbers.length - i; j++) {
			if (numbers[j] > numbers[j + 1]) {
				console.log(`	${numbers[j]} > ${numbers[j + 1]}`);
				console.log(`	swapping: ${numbers[j]} and ${numbers[j + 1]}`);
				console.log(`	${getStringFromArray(numbers, i)}`);
				const temp = numbers[j];
				numbers[j] = numbers[j + 1];
				numbers[j + 1] = temp;
			}
			else {
				console.log(`	${numbers[j]} <= ${numbers[j + 1]} (no swapping required)`);
				console.log(`	${getStringFromArray(numbers, i)}`);
			}
			console.log(`	------------------------------`);
		}
		console.log(`	${getStringFromArray(numbers, i)}`);
		console.log(`--------------------------------------`);
	}
	return numbers;	
}

function getStringFromArray(array, i) {
	return array.reduce((previous, current, index) => {
		return previous ? `${previous}, ${current}` : current;	
	}, '');
}

getSorted(numbers);
console.log(`
	PLEASE MAKE A REACT APP
	TO
	VISUALIZE THIS
`);
