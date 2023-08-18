function solution(num_list) {
    let oddSum = '';
    let evenSum = '';
    
    num_list.forEach(num => num%2 === 0  ? evenSum+=String(num) : oddSum+=String(num))
    
    return Number(oddSum)+Number(evenSum);
}