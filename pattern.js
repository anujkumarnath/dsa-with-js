/*
------------------------
* * * * *
* * * *
* * *
* *
*
------------------------
*/

/*
const n = 15;

for (let i = 1; i <= n; i++) {
	let line = '';
	for (let j = 1; j <= n - i + 1; j++) {
		line += '* ';
	}
	console.log(line);
}

for (let i = n; i >= 1; i--) {
	let line = '';
	for (let j = 1; j <= i; j++) {
		line += '* ';
	}
	console.log(line);
}
*/

/*
------------------------
*
* *
* * *
* * * *
* * * * *
------------------------
*/

/*
const n = 15;

for (let i = 1; i <= n; i++) {
	let line = '';
	for (let j = 1; j <= i; j++) {
		line += '* ';
	}
	console.log(line);
}
*/

/*
------------------------
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
------------------------
*/

/*
const n = 5;

for (let i = 1; i <= n; i++) {
	let line = '';
	for (let j = 1; j <= i; j++) {
		line += `${j} `;
	}
	console.log(line);
}
*/

/*
------------------------
1
2 3
4 5 6
7 8 9 10
------------------------
*/

const lines = 4;

let num = 0;
for (let i = 1; i <= lines; i++) {
	let line = '';
	console.log({ i, num });
	for (let j = 1; j <= i; j++) {
		line += `${++num} `; 
		console.log('		', { j, num, line });
	}
	console.log('---------------------------------------------------------');
}
