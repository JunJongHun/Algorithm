function solution(num_list, n) {
    const answer = [];
    const num_list_copy = [...num_list];
    
    while(num_list_copy.length){
        answer.push(num_list_copy.splice(0,n));
    }
    
    return answer;
}