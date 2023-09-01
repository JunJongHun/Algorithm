function solution(date1, date2) {
    return cal(date1)<cal(date2) ? 1 : 0;    
}

function cal(date){
    const yearDay = date[0]*365;
    let monthDay = 0;
    const day = date[2];
    
    for(let i=1; i<=date[1]; i++){
        if(i===4 || i=== 6 || i===9 || i===11) monthDay+=30;
        else if(i==2) monthDay +=28;
        else monthDay +=31;
    }
    
    return yearDay+monthDay+day;
}