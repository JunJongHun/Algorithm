function solution(rsp) {
    let answer = '';
    const win = {'2':'0','0':'5','5':'2'};
    
    answer = rsp.split('').map(i=>win[i]);
    
    
    return answer.join('');
}