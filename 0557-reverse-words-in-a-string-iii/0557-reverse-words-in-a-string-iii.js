/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const answer = []

    const arr = s.split(' ')

    for(const word of arr){
        answer.push(word.split('').reverse().join(''))
    }

    return answer.join(' ')
};