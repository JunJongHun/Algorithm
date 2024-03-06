/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    
    for(let i= 2; i<=n-2;i++){
        const data = n.toString(i)
        let left = 0
        let right = data.length-1
        while(left<right){
            if(data[left]!==data[right]) return false
            left++
            right--
        }
    }

    return true
};