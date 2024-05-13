const arr = [15, 5, 28, 3, 21, 9, 57, 72, 16, 24];

console.log('before partition:', arr.toString());

/* With cusotm pivot */
// const pivot_index = Math.floor((Math.random() * 10)) % arr.length;
// console.log('pivot', arr[pivot_index]);
// lomutoPartitionWithPivotInput(arr, 0, arr.length - 1, pivot_index);

/* With default pivot (last element) */
lomutoPartition(arr, 0, arr.length - 1);

console.log('after partition :', arr.toString());

function lomutoPartition(arr, low, high) {
	const pivot = arr[high];

	let i = low - 1;
	for (let j = low; j < high; j++) {
		if (arr[j] < pivot) {
			i++;
			const temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}

	const temp = pivot;
	arr[high] = arr[i + 1];
	arr[i + 1] = temp;
}

function lomutoPartitionWithPivotInput(arr, low, high, pivot_index) {

	const temp = arr[pivot_index];
	arr[pivot_index] = arr[high];
	arr[high] = temp;

	const pivot = arr[high];

	let i = low - 1;
	for (let j = low; j < high; j++) {
		if (arr[j] < pivot) {
			i++;
			const temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}

	const _temp = pivot;
	arr[high] = arr[i + 1];
	arr[i + 1] = _temp;
}
