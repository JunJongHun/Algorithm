function solution(spell, dic) {
    
    const sortedSpell = [...spell].sort().join('');

    return dic.some(d => sortedSpell === [...d].sort().join('')) ? 1:2;
}

