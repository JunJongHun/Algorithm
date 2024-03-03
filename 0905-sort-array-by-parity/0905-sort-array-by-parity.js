/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {

    let left = 0
    let right = 0

    while(left <= right && right < nums.length){

        if(nums[left] % 2 === 1 && nums[right] % 2 === 0){
            [nums[left],nums[right]]=[nums[right],nums[left]]
            left+=1
        }
        
        if(nums[left] % 2 !== 1) left+=1
        if(nums[right] % 2 !==0) right+=1
    }


    return nums
};