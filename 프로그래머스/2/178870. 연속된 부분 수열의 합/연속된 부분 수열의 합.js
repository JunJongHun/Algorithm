function solution(sequence, k) {
    let answer = [0,sequence.length-1];
    
    let start = 0;
    let end = 0;
    let sum = sequence[end];
    
    while(start <= end && end < sequence.length){
 
        if(sum === k){
            if(answer[1]-answer[0] > end-start){
                answer = [start,end]
            }
            sum-=sequence[start]
            start+=1 
        }
        else if(sum < k){
            end+=1
            sum+=sequence[end]
        }
        else{
            sum-=sequence[start]
            start+=1
           
        }
        
    }
    
    return answer;
}