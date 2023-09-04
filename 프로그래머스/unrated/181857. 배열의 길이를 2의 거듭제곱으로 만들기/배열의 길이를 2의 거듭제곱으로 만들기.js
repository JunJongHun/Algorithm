function solution(arr) {
    let e = 1;
    
    while(e<arr.length){
        e*=2;
    }
    return [...arr, ...new Array(e-arr.length).fill(0)];
}