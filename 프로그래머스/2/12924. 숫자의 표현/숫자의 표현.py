def solution(n):
    answer = 0
    
    arr = [i for i in range(1,n+1)]
    
    l = 0
    r = 0
    sum = arr[0]
    
    while l <= r and r < n:
        
        if sum == n:
            answer+=1
            sum-=arr[l]
            l+=1
        elif sum > n:
            sum-=arr[l]
            l+=1
        else:
            r+=1
            sum+=arr[r]
    
    return answer