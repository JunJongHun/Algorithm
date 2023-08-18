function solution(num_list, n) {
    return num_list.findIndex(num=>num===n) === -1 ? 0 : 1;
}