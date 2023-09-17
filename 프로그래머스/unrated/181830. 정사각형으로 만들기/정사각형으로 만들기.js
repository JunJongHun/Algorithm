function solution(arr) {
    const row = arr.length;
    const col = arr[0].length;
    
    if(row > col) return arr.map(v=>v.concat(new Array(row-col).fill(0)));
    else if(row < col) return arr.concat(new Array(col-row).fill(new Array(col).fill(0)));
    
    return arr;
}