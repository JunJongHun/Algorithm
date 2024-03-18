function solution(n) {
    
    let answer = 0
    const nCount = n.toString(2).split('1').length-1
    
    for(let i =n+1; n<=1000000; i++){
        const binCount = i.toString(2).split('1').length-1
        
        if(nCount === binCount){
            answer = i
            break;
        }
    }
    
    
    return answer;
}