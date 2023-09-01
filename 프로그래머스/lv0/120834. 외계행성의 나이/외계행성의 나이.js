function solution(age) {
    return [...String(age)].map(v=>String.fromCharCode(+v+97)).join('');
}