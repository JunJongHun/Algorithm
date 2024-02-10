# def solution(n, lost, reserve):
#     answer = 0
#     student = [1]*n
    
#     for j in reserve:
#         student[j-1]+=1
    
#     for i in lost:
#         student[i-1]-=1
    
#     student.insert(0,-1)
#     student.append(-1)
    
#     for i in range(n):
        
#         if student[i] == 2:
#             if student[i-1] == 0:
#                 student[i-1]+=1
#                 student[i]-=1
#                 continue
#             if student[i+1] == 0:
#                 student[i+1]+=1
#                 student[i]-=1
#                 continue   
   
#     for i in student:
#         if i==1 or i==2:
#             answer+=1
    
#     return answer

def solution(n, lost, reserve):
    # 체육복을 잃어버린 학생들 중 여분의 체육복을 가져온 학생 처리
    _reserve = [r for r in reserve if r not in lost]
    _lost = [l for l in lost if l not in reserve]

    # 모든 학생에게 1벌의 체육복이 있다고 가정
    student = [1] * n

    # 여분의 체육복을 가져온 학생 업데이트
    for j in _reserve:
        student[j - 1] += 1

    # 체육복을 잃어버린 학생 업데이트
    for i in _lost:
        student[i - 1] -= 1

    # 여분의 체육복을 가진 학생이 앞 또는 뒤 번호 학생에게 체육복 빌려주기
    for i in range(n):
        if student[i] == 2:
            if i > 0 and student[i - 1] == 0:
                student[i - 1] += 1
                student[i] -= 1
            elif i < n - 1 and student[i + 1] == 0:
                student[i + 1] += 1
                student[i] -= 1

    # 체육 수업에 참여할 수 있는 학생 수 계산
    answer = sum(1 for i in student if i > 0)

    return answer
