function solution(emergency) {
    
    const mapObj = new Map();
    
    [...emergency].sort((a,b)=>b-a).forEach((v,i)=> mapObj.set(v,i+1)        
    )
    
    return emergency.map((v)=>mapObj.get(v));
}