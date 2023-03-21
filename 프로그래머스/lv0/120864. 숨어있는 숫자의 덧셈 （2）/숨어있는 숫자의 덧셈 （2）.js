function solution(my_string) {
    
    return my_string.split(/[a-zA-Z]/).reduce((pre,cur)=>Number(pre)+Number(cur),0);
}