function solution(numbers, n) {
    return numbers.reduce((a,b)=> a>n ? a : a+b , 0);
}