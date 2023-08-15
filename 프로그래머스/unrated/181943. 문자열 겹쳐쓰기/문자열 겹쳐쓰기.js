// 인덱스 전 문자열 + overwrite 문자열 + (인덱스 값 + overwrite 길이) 후 문자열

function solution(my_string, overwrite_string, s) {
    
    return my_string.slice(0,s)+overwrite_string + my_string.slice(s+overwrite_string.length);
}