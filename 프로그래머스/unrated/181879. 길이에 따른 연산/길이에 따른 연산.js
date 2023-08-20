function solution(num_list) {
    return num_list.length>10 ? sum(num_list) : multiply(num_list);
}

function sum(num_list){
    return num_list.reduce((a,b)=>a+b);
}

function multiply(num_list){
    return num_list.reduce((a,b)=>a*b);
}