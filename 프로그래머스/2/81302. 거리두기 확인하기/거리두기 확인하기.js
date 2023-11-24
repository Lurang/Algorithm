function solution(places) {
    const answer = [];
    
    for (const place of places) {
        let fin = false;
        for (let i = 0; i < 5; i++) {
            if (fin) break;
            for(let j = 0; j < 5; j++) {
                if (fin) break;
                
                // case P
                if (
                    place[i][j] === "P"
                    && (
                        (j < 4 && place[i][j + 1] === 'P')
                        ||
                        (i < 4 && place[i + 1][j] === 'P')
                    )
                ) {  
                    fin = true;
                }

                // case O
                if (
                    place[i][j] === "O"
                ) {
                    let count = 0;
                    if (i > 1 && place[i - 1][j] === 'P') count++;
                    if (i < 4 && place[i + 1][j] === 'P') count++;
                    if (j > 1 && place[i][j - 1] === 'P') count++;
                    if (j < 4 && place[i][j + 1] === 'P') count++;
                    if (count > 1) {
                        fin = true;
                    }
                }
            }
        }
        
        answer.push(fin ? 0 : 1);
    }
    
    return answer;
}