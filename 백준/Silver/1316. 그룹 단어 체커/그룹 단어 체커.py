import sys




n = int(input())
memo = {}
count = n

for i in range(n):
  s = input()
  memo = {}
  stack = []

  for j in list(s):
    
    if not stack:
      stack.append(j)
    else:
      if j in memo:
        count-=1
        break;
      else:
        if stack[-1] != j:
          memo[stack.pop()] = ""
          stack.append(j)
  
print(count)