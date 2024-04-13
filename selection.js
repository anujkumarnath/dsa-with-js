const arr = [45, 1, 83, 13, 16, 9, 25, 76];

console.log('input:', arr.toString());

for (let i = 1; i < arr.length; i++) {
	let min_index = i - 1;
	for (let j = i; j < arr.length; j++) {
		if (arr[j] < arr[min_index]) {
			min_index = j;
		}
	}
	const temp = arr[i - 1];
	arr[i - 1] = arr[min_index];
	arr[min_index] = temp; 
}

console.log('output:', arr.toString());
