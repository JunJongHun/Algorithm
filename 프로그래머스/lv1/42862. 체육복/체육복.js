function solution(n, lost, reserve) {
    let answer = 0;
    const arr = Array(n+2).fill(1);
    
    for(let i of reserve){
        arr[i]=2;
    }
    
    for(let i of lost){
        arr[i]===2 ? arr[i]=1:arr[i]=0;
    }
    

    
    for(let i=1;i<arr.length-1;i++){
        if(arr[i]===2){
            if(arr[i-1]===0){
                arr[i-1]=1;
                arr[i]=1;
            }
            else if(arr[i+1]===0){
                arr[i+1]=1;
                arr[i]=1;
            }
        }
        
    }
    

  
    
    return arr.filter(x=>x===1||x===2).length-2;
}