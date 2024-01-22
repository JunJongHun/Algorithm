function solution(n, computers) {
    let answer = 0;
    let check = new Array(n).fill(false);

    
    for(let i=0; i<n; i++){
        if(check[i]===false){
            dfs(n,computers,i,check);
            answer++;
        }
    }
    
    return answer;
}

function dfs(n,computers,i,check){
    check[i]=true;
    
    for(let k=0; k<n; k++){
        if(i!==k && computers[i][k]===1 && check[k]===false) dfs(n,computers,k,check);
    }
}