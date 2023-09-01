function solution(my_string, m, c) {
    
    let index = c-1;
    let answer = '';
    
    for(let i=0; i<my_string.length; i++){
        if(i===index){
            answer+=my_string[i];
            index+=m; 
        }
        
    }
    
    
    return answer;
}