const arr = [34, 56, 16, 97, 26, 74, 99, 12, 56, 45, 67, 92];

function mergeSort(arr, low, high) {
	if (low >= high)
		return;

	const mid = Math.floor( low + (high - low)/2 );
	mergeSort(arr, low, mid);
	mergeSort(arr, mid + 1, high);
	merge(arr, low, high);
}

function merge(arr, low, high) {
	const temp = [];
	const mid  = Math.floor( low + (high - low)/2 );

	let left  = low;
	let right = mid + 1;
	let i     = 0;

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

(function main() {
	console.log('unsorted: ', arr.toString());
	mergeSort(arr, 0, arr.length - 1);
	console.log('sorted  : ', arr.toString());
})();
