function solution(order) {
    const coffee = {
        'americano' : 4500,
        'cafelatte' : 5000,
        'anything' : 4500,
    }
    
    return order.map(v=>v.split(/ice|hot/g)).flatMap(v=>v).filter(v=>v).map(v=>coffee[v]).reduce((a,b)=>a+b);
}