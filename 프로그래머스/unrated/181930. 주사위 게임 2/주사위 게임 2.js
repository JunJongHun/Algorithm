function solution(a, b, c) {
    const SIZE = new Set([a,b,c]).size;
    
    if(SIZE===3) return a+b+c;
    else if(SIZE===2) return (a+b+c) * (Math.pow(a,2)+Math.pow(b,2)+Math.pow(c,2));
    else return (a+b+c) * (Math.pow(a,2)+Math.pow(b,2)+Math.pow(c,2)) * (Math.pow(a,3)+Math.pow(b,3)+Math.pow(c,3))
    
}