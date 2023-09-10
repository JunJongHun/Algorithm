function solution(numer1, denom1, numer2, denom2) {
    
    const number = numer1*denom2 + numer2*denom1;
    const denom = denom1*denom2;
    
    const gcdNumber = gcd(number,denom);
   
    
    return [number/gcdNumber,denom/gcdNumber];
}

function gcd(a,b){
    const max = Math.max(a,b);
    const min = Math.min(a,b);
    
    if(min===0) return a;
    
    return gcd(min,max%min);
}