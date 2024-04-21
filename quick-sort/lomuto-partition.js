const arr = [1, 33, 21, 17, 91, 6, 15];

function lomutoPartititon(arr, low, high) {
	let i = low - 1;
	for (let j = low; j < high; j++) {
		if (arr[j] < arr[high]) {
			const temp = arr[++i];
			arr[i]     = arr[j]; 
			arr[j]     = temp;
		}
	}

	/* swapping the first element from the '>= pivot' group with pivot */ 
	const temp = arr[high];
	arr[high]  = arr[i + 1];
	arr[i + 1] = temp;
}

function lomutoPartititonWithPivotIndexInput(arr, low, high, pivotIndex) {
	/* lumoto partition assumes the pivot index
	 * to be the last index in the array
	 *
	 * swapping arr[high] with arr[pivot]
	 * so that lumuto partition algo can work
	 */
	const temp      = arr[pivotIndex];
	arr[pivotIndex] = arr[high];
	arr[high]       = temp;

	lomutoPartititon(arr, low, high);
}

(function main() {
	/* saving a copy so that we are able to
	 * use the same array in both the functions */
	const copied_array = [...arr];

	console.log('----------------------------------------');
	console.log('Without pivot index input:');
	console.log('actual array     : ', arr.toString());
	console.log('pivot(last index): ', arr[arr.length - 1]);
	lomutoPartititon(arr, 0, arr.length - 1);
	console.log('partitioned array: ', arr.toString());

	console.log('----------------------------------------');

	console.log('With pivot index input:');
	const pivotIndex = Math.floor((Math.random() * 10) % arr.length);
	console.log('actual array     : ', copied_array.toString());
	console.log('pivot(random)    : ', copied_array[pivotIndex]);
	lomutoPartititonWithPivotIndexInput(copied_array, 0, copied_array.length - 1, pivotIndex);
	console.log('partitioned array: ', copied_array.toString());
	console.log('----------------------------------------');
})();
