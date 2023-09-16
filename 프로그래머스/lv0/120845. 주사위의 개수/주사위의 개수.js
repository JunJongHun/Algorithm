function solution(box, n) {
    const w = Math.trunc(box[0]/n)*n;
    const h = Math.trunc(box[1]/n)*n;
    const d = Math.trunc(box[2]/n)*n;
    
    return (w*h*d)/(n**3);
}