const arr = [12, 34, 55, 87, 123, 1, 35, 2, 39, 56, 58, 61];

console.log('unsorted: ', arr.toString());
mergeSort(arr, 0, arr.length - 1);
console.log('sorted  : ', arr.toString());

function mergeSort(arr, low, high) {
	if (low >= high)
		return;

	const mid = low + Math.floor((high - low)/2);

	mergeSort(arr, low, mid);
	mergeSort(arr, mid + 1, high);
	merge(arr, low, high);
}

function merge(arr, low, high) {
	const mid = low + Math.floor((high - low)/2);

	const temp = [];
	let left = low;
	let right = mid + 1;
	let i = 0;

	while (left <= mid && right <= high) {
		if (arr[left] <= arr[right])
			temp[i++] = arr[left++];
		else
			temp[i++] = arr[right++];
	}

	while (left <= mid) {
		temp[i++] = arr[left++];
	}

	while (right <= high) {
		temp[i++] = arr[right++];
	}

	for (let k = low; k <= high; k++) {
		arr[k] = temp[k - low];
	}
}
