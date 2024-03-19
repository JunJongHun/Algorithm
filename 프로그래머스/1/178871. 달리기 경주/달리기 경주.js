function solution(players, callings) {
    const answer = [];
    
    const hashP = new Map()
    const hashC = new Map()
    
    players.forEach((v,i)=>{
        hashP.set(v,i)
        hashC.set(i,v)
    })
    
   
    
    for(const v of callings){
       const backPlayerRank = hashP.get(v)
       const backPlayerName = v
       
       const frontPlayerRank = backPlayerRank-1
       const frontPlayerName = hashC.get(frontPlayerRank)
       
       hashP.set(backPlayerName,backPlayerRank-1)
       hashP.set(frontPlayerName,frontPlayerRank+1)
        
       hashC.set(frontPlayerRank,backPlayerName)
       hashC.set(backPlayerRank,frontPlayerName)
        
    }
    
    for(const v of hashC.values()){
        answer.push(v)
    }
    
    return answer;
}