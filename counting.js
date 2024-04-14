const arr = [5, 4, 5, 3, 2, 5, 0, 1, 0, 0, 3, 8, 4, 3, 3, 2, 1, 1, 5];

console.log('unsorted       :', arr.toString());

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
console.log('counts         :', counts.toString());

/* update the counts at each index(starting from 1) by summing up the value from prev index:
 * if element at 0th index is 3, then 3 0's will be there from index 0 through 2
 * if element at 1st index is 4, then 4 1's will be there from index 3 through 6
 *		=> update count to 3 + 4 = 7 i.e, 6 - 1
 */
for (let i = 1; i < counts.length; i++) {
	counts[i] += counts[i - 1];
}

console.log('counts updated :', counts.toString());

/* create a new array of size equal to that of input array */
const b = Array(arr.length);

/* 1. take the ith element from the Array
 * 2. find the value at arr[i]th index of counts array
 * 3. subtract 1 from counts[arr[i]] (--counts[arr[i]])
 * 4. put arr[i] at the updated counts[arr[i]] index of b
 * NOTE: going reverse to make the sorting stable:
 * stable: the order of repeated elements remain the
 * same as they appear in the input array.
 * e.g., if three 5's - 5a, 5b, 5c appear consecutively in input array,
 * they should come as 5a, 5b, 5c in result array.
 */
for (let i = arr.length - 1; i >= 0; i--) {
	b[--counts[arr[i]]] = arr[i];
	//console.log(`arr[${i}] = ${arr[i]}, counts[${arr[i]}] = ${counts[arr[i]]}`);
}

/* copy elements of b to arr */
for (let i = 0; i < arr.length; i++) {
	arr[i] = b[i];
}

console.log('sorted         :', arr.toString());
