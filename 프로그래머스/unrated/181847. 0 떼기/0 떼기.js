function solution(n_str) {
    if(n_str[0]!=='0') return n_str;
    else return n_str.slice([...n_str].findIndex(v=>v!=='0'))
}