function solution(n, control) {
    let answer = n;
    
    const controlObj = {
        'w' : (v)=>v+1,
        's' : (v)=>v-1,
        'd' : (v)=>v+10,
        'a' : (v)=>v-10
    }
    
    for(const v of control){
        answer = controlObj[v](answer);
    }
    
    return answer;
}