// 정규식으로 spell이 모두 포함 되는지 확인한다.
// dic 원소를 spell이 포함된 문자열은 모두 빈문자열로 하고 길이를 판단

function solution(spell, dic) {
     

    for(const d of dic){
      for(let i =0; i<spell.length; i++){
          if(!d.includes(spell[i])) break;
          if(i===spell.length-1) return 1;
      }
    }
    return 2;
}