// 앞에서부터 숫자를 스택에 push
// push 하려는 값이 스택 마지막 값보다 큰지 비교한다.
// 넣으려는 값이 크면 스택에서 pop을 한다.
// 위 과정 반복

function solution(number, k) {
    const stack = [];
    let cnt = k;
    
    for(const n of number){
        while(cnt > 0 && stack[stack.length-1] < n){
            stack.pop();
            cnt-=1;
        }
        stack.push(n);
    }
    
    for(let i=0; i<cnt; i++) stack.pop();
    
    return stack.join('');

}