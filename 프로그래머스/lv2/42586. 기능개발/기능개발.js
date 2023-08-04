// 수정 전 코드
function solution(p, s) {
	let answer = [];
	let arr = [];
	
	for (i=0; i < p.length; i++ ) arr.push(Math.ceil((100 - p[i])/s[i]))

	let max = arr[0];
	let data = 0;

	for (t = 0; t<arr.length; t++) {
		if (max < arr[t]) {
			max = arr[t]
			answer.push(data)
			data = 1
		} else {
			data++
		}

		if(t === arr.length-1) answer.push(data)
	}
	return answer;
}