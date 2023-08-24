function solution(myString, pat) {
    return myString.toUpperCase().replace(pat.toUpperCase(),'').length === myString.length ? 0:1;
}