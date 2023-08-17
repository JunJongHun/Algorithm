function solution(spell, dic) {
     

    for(const d of dic){
      for(let i =0; i<spell.length; i++){
          if(!d.includes(spell[i])) break;
          if(i===spell.length-1) return 1;
      }
    }
    return 2;
}