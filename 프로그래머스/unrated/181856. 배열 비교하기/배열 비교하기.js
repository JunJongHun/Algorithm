function solution(arr1, arr2) {
    
    if(arr1.length > arr2.length) return 1;
    else if(arr1.length < arr2.length) return -1;
    else{
        if(sum(arr1) > sum(arr2)) return 1;
        else if(sum(arr1)<sum(arr2)) return -1;
        else return 0;
    }
    
    
}

function sum(arr){
    return arr.reduce((a,b)=>a+b,0);
}