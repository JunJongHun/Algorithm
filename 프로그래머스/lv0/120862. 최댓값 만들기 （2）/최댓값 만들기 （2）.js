function solution(numbers) {
    let answer = 0;
    const len = numbers.length;
    
    numbers.sort((a,b)=>a-b);

    answer = Math.max(numbers[0]*numbers[1],numbers[len-1]*numbers[len-2]);
    
    
    return answer;
}