// 학생들의 체육복 상태를 업데이트한다. (여유 옷 가져온사람, 도난당한 사람 포함)
// 여유 옷을 가진 학생은 앞에 먼저 물어보고 뒤에 물어봐서 빌려준다

function solution(n, lost, reserve) {
    let answer = 0;
    // 0 없음, 1 하나, 2 두개
    const studentState = new Array(n+2).fill(1);  
    
    for(const n of reserve) studentState[n] += 1;
    
    for(const n of lost) studentState[n] -= 1;
    
    for(let i=1; i<=n; i++){
        if(studentState[i]===2){
            if(studentState[i-1]===0){
                studentState[i] -=1;
                studentState[i-1] +=1;
                continue;
            }
            if(studentState[i+1]===0){
                studentState[i] -=1;
                studentState[i+1] +=1;
                continue;
            }
        }
    }
    
    return studentState.filter(state => state >= 1).length-2;
}