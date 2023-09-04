function solution(myString, pat) {
    let cnt = 0;
    let index = 0;
    
    while(myString.indexOf(pat,index)!==-1){
        index=myString.indexOf(pat,index)+1;
        cnt+=1;
    } 
    
    return cnt;
}