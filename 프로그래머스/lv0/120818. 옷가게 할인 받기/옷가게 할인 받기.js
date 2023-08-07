function solution(price) {
    let percent = 0;
    
    if(price >= 500000) percent = 0.2;
    else if(price >= 300000) percent = 0.1;
    else if(price >= 100000) percent = 0.05;
    
    return Math.floor(price - (price * percent));
}