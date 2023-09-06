function solution(strArr) {
    const mapObj = new Map();
    
    for(const s of strArr){
        let len = s.length;
        mapObj.set(len, mapObj.get(len) ? mapObj.get(len)+1 : 1)
    }
    
    return Math.max(...mapObj.values()); 
}