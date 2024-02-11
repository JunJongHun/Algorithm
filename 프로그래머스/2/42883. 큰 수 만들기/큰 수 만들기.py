def solution(number, k):
    stack = []
    count = 0

    for n in number:
        
        while len(stack)!=0 and count<k and n > stack[-1]:
            stack.pop()
            count+=1
        
        stack.append(n)
    
    # count가 남았을 때! 뒤에서 제거해주기
    for i in range(k-count):
        stack.pop()
    
    return "".join(stack)