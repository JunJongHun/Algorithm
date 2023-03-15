function solution(X, Y) {
    let answer = '';
    
    const x = [...X].sort((a,b)=>a-b);
    const y = [...Y].sort((a,b)=>a-b);
    
    let cntX =0;
    let cntY =0;
    let stack = [];
    
    while(cntX < x.length && cntY < y.length){

        if(x[cntX] === y[cntY]){
            stack.push(x[cntX]);
            cntX++;
            cntY++;
        } 
        else if(x[cntX] > y[cntY]){
            cntY++;
        }
        else{
            cntX++;
        }
    
        
    }
    
    
    if(stack.length === 0) return '-1';
    if(Number(stack.join(""))===0) return '0';
    
    
    
   
    return stack.sort((a,b)=>b-a).join("");
}