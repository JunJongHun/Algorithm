function gcd(a,b){
    if(b===0) return a; 
    return gcd(b,a%b);
}

function judge(data,num){
    while(data%num===0){
        data/=num;
    }
    return data;
}


function solution(a, b) {
    let answer = 0;
    let d = gcd(a,b);
    
    b/=d;

    b=judge(b,2);
    b=judge(b,5);
 
    return b === 1 ? 1 : 2;
}



