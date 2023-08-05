function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    const queue = [];
    let sum = 0;
    
    while(truck_weights.length>0){
        
       if(sum + truck_weights[0] <= weight){
           let data =truck_weights.shift();
           queue.push(data);
           sum+=data;
       }
        
        
    }
    
    return answer;
}