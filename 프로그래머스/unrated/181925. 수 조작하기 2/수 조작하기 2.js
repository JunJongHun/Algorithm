function solution(numLog) {
    const control = {
        'w' : v=>v+1,
        's' : v=>v-1,
        'd' : v=>v+10,
        'a' : v=>v-10,
    }
    let answer="";
    
    for(let i=0; i<numLog.length-1; i++){
        const s = numLog[i];
        const n = numLog[i+1];
        
        if(control['w'](s)===n) answer+='w';
        else if(control['s'](s)===n) answer+='s';
        else if(control['d'](s)===n) answer+='d';
        else if(control['a'](s)===n) answer+='a';
        
    }
    
    
    return answer;
}