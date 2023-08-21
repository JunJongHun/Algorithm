function solution(start_num, end_num) {
    return new Array(end_num-start_num+1).fill(start_num).map((v,i)=>v+i);
}