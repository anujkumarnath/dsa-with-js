const arr = [1, 2, 3, 7, 4, 2, 1, 2, 3, 1];

console.log(arr.toString());
insertionSort(arr);
console.log(arr.toString());

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		const target = arr[i];
		console.log(`i = ${i}, target = arr[${i}] = ${target}`);
		let j;
		for (j = i - 1; j >= 0; j--) {
			console.log(' ', `j = ${j}, arr[${j}] = ${arr[j]}`);
			if (target >= arr[j])
				break;

			console.log('	', `target(${target}) < arr[${j}](${arr[j]})`);
			console.log('	', `arr[${j + 1}](${arr[j + 1]}) <=> arr[${j}](${arr[j]})`);
			arr[j + 1] = arr[j];
			console.log('	', arr.toString());
		}
		console.log('	', `arr[${j + 1}](${arr[j + 1]}) <=> target(${target})`);
		arr[j + 1] = target;
		console.log('	', arr.toString());
		console.log('------------------------------------------');
	}
}
