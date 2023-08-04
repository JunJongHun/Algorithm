
function solution(s){
    let answer = true;
    let v = 0;

    for (i = 0; i <= s.length-1; i++) {
        if (s.substr(i,1) === '('){
            answer = false
            v++
        }else {
            if (!answer) {
                v--
                if (v === 0) answer = true
            } else {
                answer = false
                break;
            }
        }
    }
    return answer;
}