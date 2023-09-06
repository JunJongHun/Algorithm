function solution(arr) {
    const start = arr.indexOf(2);
    let end = arr.lastIndexOf(2);
    
    if(start===-1 && end===-1) return [-1];
    if(start===-1 && end >=0) return arr.slice(end,end+1);
    if(start>=0 && end===-1) return arr.slice(start,start+1);
    
    return arr.slice(start,end+1);
}