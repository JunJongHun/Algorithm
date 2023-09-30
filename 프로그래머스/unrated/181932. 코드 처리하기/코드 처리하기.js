function solution(code) {
    let answer = '';
    let mode = false;
    
    [...code].forEach((v,i)=>{
        if(mode===false && v!=='1'){
            answer += i%2===0 ? v : '';
        }
        else if(mode===true && v!=='1'){
            answer += i%2===1 ? v : '';
        }
        else if(v==='1') mode=!mode;
    })
    
    return answer ? answer : 'EMPTY';
}