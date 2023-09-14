function solution(str_list) {
    
    for(const s of str_list){
        if(s==='l') return str_list.slice(0,str_list.indexOf('l'))
        if(s==='r') return str_list.slice(str_list.indexOf('r')+1);
    }
    
    return [];
    
}