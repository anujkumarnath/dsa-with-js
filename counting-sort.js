const arr = [2, 4, 1, 8, 4, 5, 12, 9, 1, 3, 1];

console.log('unsorted: ', arr.toString());
countingSort(arr);
console.log('sorted  : ', arr.toString());

function countingSort(arr) {
	const max = Math.max(...arr)

	const count = Array(max + 1).fill(0);
	for (let i = 0; i < arr.length; i++) {
		count[arr[i]]++;
	}

	for (let i = 1; i < count.length; i++) {
		count[i] += count[i - 1];
	}

	const b = Array(arr.length);
	for (let i = arr.length - 1; i >= 0; i--) {
		b[--count[arr[i]]] = arr[i];
	}

	for (let i = 0; i < arr.length; i++) {
		arr[i] = b[i];
	}
}
