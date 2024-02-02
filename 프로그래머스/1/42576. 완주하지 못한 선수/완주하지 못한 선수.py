from collections import Counter

def solution(participant, completion):
    partCounter = Counter(participant)
    comCounter = Counter(completion)
    
    result = list((partCounter-comCounter).keys())
    
    return result[0]
    

    