def solution(nums):
    s = set(nums)
    
    answer = 0
    return len(nums)//2 if len(nums)//2 < len(s) else len(s)