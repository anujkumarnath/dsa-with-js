const arr = [12, 4, 71, 8, 8, 123, 9, 1, 0, 4, 71, 81880, 12];

console.log('unsorted: ', arr.toString());
radixSort(arr);
console.log('sorted  : ', arr.toString());

function radixSort(arr) {
	const max = Math.max(...arr);

	for (let placeValue = 1; Math.floor(max/placeValue) > 0; placeValue *= 10) {
		countingSort(arr, placeValue);
	}
}

function countingSort(arr, placeValue) {
	const count = Array(10).fill(0);

	for (let i = 0; i < arr.length; i++) {
		const digit = (Math.floor(arr[i] / placeValue)) % 10;
		count[digit]++;
	}

	for (let i = 1; i < count.length; i++) {
		count[i] += count[i - 1];
	}

	const b = Array(arr.length);

	for (let i = arr.length - 1; i >= 0; i--) {
		const digit = (Math.floor(arr[i] / placeValue)) % 10;
		b[--count[digit]] = arr[i];
	}

	for (let i = 0; i < arr.length; i++) {
		arr[i] = b[i];
	}
}
