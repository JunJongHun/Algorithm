data = input().upper()
word_unicode = list(set(data))

cnt_list = []
for i in word_unicode:
    count = data.count((i))
    cnt_list.append((count))


if cnt_list.count(max(cnt_list))>1:
    print("?")
else:
    print(word_unicode[cnt_list.index(max(cnt_list))])