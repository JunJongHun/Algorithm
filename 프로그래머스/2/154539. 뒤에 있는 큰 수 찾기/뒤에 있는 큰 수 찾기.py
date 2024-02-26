def solution(numbers):
    answer = [0] * len(numbers)
    
    stack = []
    
    for i in range(len(numbers)):
        while stack and stack[-1][0] < numbers[i]:
            val,index = stack.pop()
            answer[index] = numbers[i]
            
        stack.append((numbers[i],i))
    
    for _,i in stack:
        answer[i] = -1
    
    return answer