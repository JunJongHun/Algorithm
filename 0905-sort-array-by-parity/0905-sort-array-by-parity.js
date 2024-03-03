/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    const even = []
    const odd = []

    for(const i of nums){
        if(i%2 === 0) even.push(i)
        else odd.push(i)
    }

    return [...even,...odd]
};