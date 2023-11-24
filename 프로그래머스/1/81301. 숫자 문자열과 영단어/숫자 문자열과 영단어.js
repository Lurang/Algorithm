function solution(s) {
    const sheets = [
        ['0', 'zero'],
        ['1', 'one'],
        ['2', 'two'],
        ['3', 'three'],
        ['4', 'four'],
        ['5', 'five'],
        ['6', 'six'],
        ['7', 'seven'],
        ['8', 'eight'],
        ['9', 'nine'],
    ];
    
    for (const sheet of sheets) {
        if (!Number.isNaN(+s)) {
            break;
        }
        
        s = s.replaceAll(sheet[1], sheet[0]);
    }
    
    
    const answer = +s;
    return answer;
}