function solution(quiz) {
    const answer = [];
    
    for(let q of quiz){
        const data = q.split(" ");
        
        if(data[1]==='+'){
            Number(data[0])+Number(data[2])===Number(data[4]) ? answer.push('O') : answer.push('X');
        }
        else{
            Number(data[0])-Number(data[2])===Number(data[4]) ? answer.push('O') : answer.push('X');
        }
        
    }
    
    return answer;
}