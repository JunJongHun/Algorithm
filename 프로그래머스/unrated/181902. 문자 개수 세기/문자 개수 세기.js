function solution(my_string) {
    const answer = [...new Array(52)].map(()=>0);
    
    for(const s of my_string){
        const i = s.charCodeAt();
        
        s === s.toUpperCase() ? answer[i-65]++ : answer[i-97+26]++
       
    }
    
    return answer;
}