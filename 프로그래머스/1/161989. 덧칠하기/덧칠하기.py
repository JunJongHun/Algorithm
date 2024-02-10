def solution(n, m, section):
    answer = 0
    
    arr = [1]*n
    
    for i in section:
        arr[i-1] = 0
        
    for i in range(n):
        if arr[i] == 0:
            for j in range(i,i+m):
                if j < len(arr):
                    arr[j]=1
            answer+=1
            
    return answer