let arr = [34, 61, 444, 11, 324958723845, 4881, 9991, 515111, 88];

console.log('unsorted : ', arr.toString());

/* find max number in the array */
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
	if (arr[i] > max) {
		max = arr[i];
	}
}

/* perform sort #digit(max) times on the array */
for (let placeValue = 1; max/placeValue > 0; placeValue *= 10) {
	arr = countingSort(arr, placeValue);
}

console.log('sorted   : ', arr.toString());

function countingSort(arr, placeValue) {
	const count = Array(10).fill(0);

	arr.forEach(elem => count[Math.floor(elem/placeValue) % 10]++);

	for (let i = 1; i < count.length; i++) {
		count[i] += count[i - 1];
	}

	const b = Array(arr.length);

	for (let i = arr.length - 1; i >= 0; i--) {
		const digit = Math.floor(arr[i]/placeValue) % 10;
		b[--count[digit]] = arr[i];
	}

	return b;
}
