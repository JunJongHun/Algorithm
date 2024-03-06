/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const a = nums.filter(v=>v>0)
    const b = nums.filter(v=>v<0)
    const answer = []

    for(let i=0; i<a.length;i++){
        answer.push(a[i])
        answer.push(b[i])
    }

    return answer
};