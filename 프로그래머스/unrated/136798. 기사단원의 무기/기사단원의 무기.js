function solution(number, limit, power) {
    let answer = 0;
    let stack = [];
    
    
    for(let i =1; i<=number;i++){
        let count = 0;
        for(let j =1; j*j<=i; j++){
            if(j*j===i) count+=1;
            else if(i%j===0) count+=2;
        }
        stack.push(count);
    }
    
    
    
    return stack.map(x=> x>limit ? power :  x).reduce((pre,cur)=>pre+cur,0);
}