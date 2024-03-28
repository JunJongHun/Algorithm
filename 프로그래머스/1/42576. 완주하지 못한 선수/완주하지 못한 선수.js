function solution(participant, completion) {
    let answer = '';
    participant.sort();
    completion.sort();
    answer=participant.pop();
    for(let i=0;i<completion.length;i++){
        if(participant[i]!==completion[i]){
            answer=participant[i];
            break;
        } 
    }
    
    return answer;
}