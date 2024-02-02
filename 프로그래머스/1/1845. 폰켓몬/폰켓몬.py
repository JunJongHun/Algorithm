def solution(nums):
    s = set(nums)
    return len(nums)//2 if len(nums)//2 < len(s) else len(s)