function solution(my_string, queries) {
    let copy = [...my_string];
    
    for(const [s,e] of queries){
        copy = [...copy.slice(0,s),...copy.slice(s,e+1).reverse(),...copy.slice(e+1)];
    }
    
    return copy.join('');
}