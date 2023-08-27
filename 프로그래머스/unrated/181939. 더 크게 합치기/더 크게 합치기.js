function solution(a, b) {
    const p = ""+a+b;
    const q = ""+b+a
    return p>q ? +p: +q ;
}