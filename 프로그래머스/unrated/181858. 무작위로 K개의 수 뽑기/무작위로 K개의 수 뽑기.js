function solution(arr, k) {
    const stack = [...new Set(arr)];
    const count = k-stack.length;
    
    if(count>0) return stack.concat(new Array(count).fill(-1));
    else if(count<0) return stack.slice(0,count);
    
    return stack;
}