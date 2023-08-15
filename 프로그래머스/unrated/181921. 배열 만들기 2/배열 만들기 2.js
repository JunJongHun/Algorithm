// 0과 5를 모두 제거한다.
// 제거하고 길이기 0이면 0과 5로만 이루어진 것이다. 

function solution(l, r) {
    const zeroAndFive = [];
    
    for(let = l; l<=r; l++){
        String(l).replace(/[05]/g,'').length===0 && zeroAndFive.push(l)
    }
    
    return zeroAndFive.length === 0 ? [-1] : zeroAndFive;
}