function solution(n) {
   
    const num = {};
    let count =1;
    for(let i=1; i<=100;i++){
        let check = true;
        
        while(check){
            if(count%3===0) count++;
            else if(String(count).split('').includes('3')) count++;
            else check=false;
        }
        
        
        num[i]=count++;
        
    }
    
  
    return num[n];
}