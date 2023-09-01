function solution(str1, str2) {
    return [...str1].map((s1,i)=>s1+str2[i]).join('');
}