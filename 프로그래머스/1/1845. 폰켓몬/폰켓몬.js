function solution(nums) {
    let answer = 0;
    let s = new Set(nums);
    let max = parseInt(nums.length/2);
    
    answer = s.size>=max ? max : s.size;
    
    return answer;
}