function solution(num_list) {
    let cnt = 0;
    
    for(let num of num_list){
        while(num%2 ? num=(num-1)/2 : num/=2) cnt+=1;
    }
    
    return cnt;
}