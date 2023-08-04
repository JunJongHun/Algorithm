
function solution(s){

    if(s[0]===')' || s.length%2===1) return false;
    
    if(s.split('(').length-1 !== s.split(')').length-1) return false;
    
    let stack=[];
    
    for(const p of s){
       p==='(' ? stack.push(p) : stack.pop();
    }
    
    if(stack.length>0) return false;
    
    return true;
}