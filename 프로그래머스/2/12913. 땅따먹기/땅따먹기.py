def solution(land):

    copy_land = land[:]
    
    length = len(land)
    
    for i in range(1,length):
        for j in range(4):
            if j == 0:
                copy_land[i][0] += max(copy_land[i-1][1],copy_land[i-1][2],copy_land[i-1][3])
            elif j == 1:
                copy_land[i][1] += max(copy_land[i-1][0],copy_land[i-1][2],copy_land[i-1][3])
            elif j == 2:
                copy_land[i][2] += max(copy_land[i-1][0],copy_land[i-1][1],copy_land[i-1][3])
            else:
                copy_land[i][3] += max(copy_land[i-1][0],copy_land[i-1][1],copy_land[i-1][2])
    
    return max(copy_land[length-1])