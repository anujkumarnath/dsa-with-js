const arr = [12, 1, 45, 16, 62, 0, 92, 34, 66, 65];

console.log('unsorted: ', arr.toString());
selectionSort(arr);
console.log('sorted  : ', arr.toString());

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		const target = arr[i];
		let min_index = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min_index]) {
				min_index = j;
			}
		}

		arr[i] = arr[min_index];
		arr[min_index] = target;
	}
}
