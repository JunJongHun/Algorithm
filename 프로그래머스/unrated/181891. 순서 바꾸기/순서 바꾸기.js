function solution(num_list, n) {
    const start = n%num_list.length;
    return [...num_list.slice(start),...num_list.slice(0,start)]
}