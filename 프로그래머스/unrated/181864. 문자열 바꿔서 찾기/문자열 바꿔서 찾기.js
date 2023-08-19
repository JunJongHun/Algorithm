function solution(myString, pat) {
    const stack = [];
    
    [...myString].forEach(s=>s==='A' ? stack.push('B') : stack.push('A'));
        
    return +stack.join('').includes(pat);
}