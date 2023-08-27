function solution(num_list) {
    const last = num_list.at(-1);
    const preLast = num_list.at(-2);
    
    return last > preLast ? [...num_list,last-preLast] : [...num_list,last*2];
}