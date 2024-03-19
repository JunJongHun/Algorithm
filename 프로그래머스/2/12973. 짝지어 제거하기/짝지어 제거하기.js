function solution(s)
{
    var answer = 0;

    const stack = []
    
    for(const v of s){
        
        if(stack.length === 0){
            stack.push(v)
            continue
        }
        
        if(stack[stack.length-1] === v){
            stack.pop()
            continue
        }
        
        stack.push(v)
    }

    if(stack.length === 0) answer = 1
    
    return answer;
}