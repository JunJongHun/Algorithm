/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let answer = ''

    for(const word of words){
        if(word === word.split('').reverse().join('')){
            answer = word
            break;
        }
    }

    return answer
};