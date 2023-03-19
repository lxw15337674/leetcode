const a = [3, 1, 2, 3, 7, 4, 6, 8, 3];

let count = 0;

function logWithIndent(count, ...args) {
	let indent = "";
	for (let i = 0; i < count; i++) {
		indent += "    ";
	}
	console.log(indent, ...args);
}
const quciksort = (list, start = 0, end = list.length - 1) => {
	if (end - start <= 1) {
		logWithIndent(count--, start, end);
		return;
	}
	logWithIndent(count++, start, end);
	const mid = Math.floor((start + end) / 2);
	const cursor = list[mid];
	let l = start;
	let r = end;
	while (l < r) {
		while (list[l] < cursor) {
			l++;
		}
		while (list[r] > cursor) {
			r--;
		}
		if (l < r) {
			[list[l], list[r]] = [list[r], list[l]];
			l++;
			r--;
		}
	}
	quciksort(list, start, r);
	quciksort(list, l, end);
};

quciksort(a);
