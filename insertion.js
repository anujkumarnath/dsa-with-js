const arr = [34, 12, 8, 17, 25, 8, 43, 12, 0, 23];

console.log('input:', arr.toString());
for (let i = 1, j; i < arr.length; i++) {
	const target = arr[i];
	for (j = i - 1; j >= 0; j--) {
		if (target >= arr[j])
			break;
		else {
			arr[j + 1] = arr[j];
		}
	}
	arr[j + 1] = target;
}

console.log('output:', arr.toString());
