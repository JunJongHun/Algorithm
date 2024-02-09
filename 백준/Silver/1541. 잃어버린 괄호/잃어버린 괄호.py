
data = input().split('-')
answer = 0

for i in range(len(data)):
  a = data[i].split('+')

  for j in a:
    j = int(j)

    if i == 0:
      answer+=j
    else:
      answer -= j
  
print(answer)
