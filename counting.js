const arr = [5, 4, 5, 3, 2, 5, 0, 1, 0, 0, 3, 8, 4, 3, 3, 2, 1, 1, 5];

console.log('unsorted:', arr.toString());

/* find larges element */
let largest = arr[0];
for (let i = 1; i < arr.length; i++) {
	if (arr[i] > largest) {
		largest = arr[i];
	}
}

/* create counts array with index 0, 1, ..., largest */
const counts = Array(largest + 1).fill(0);
for (let i = 0; i < arr.length; i++) {
	counts[arr[i]]++;
}

/* create sorted arrray */
const sorted = [];
for (let i = 0; i < counts.length; i++) {
	for (let j = 1; j <= counts[i]; j++) {
		sorted.push(i);
	}
}

console.log('sorted  :', sorted.toString());
