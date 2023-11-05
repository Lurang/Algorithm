const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = inputs.shift().split(' ').map(Number);

for (let i = 0; i < N; i++) {
    let [total, target] = inputs[i * 2].split(' ').map(Number);
    const priorities = inputs[i * 2 + 1].split(' ').map(Number);

    let count = 1;
    while (priorities.length !== 0) {
        const current = priorities.shift();
        const max = Math.max(...priorities);

        if (max > current) {
            priorities.push(current);
        } else {
            if (target === 0) {
                console.log(count);
                break;
            }
            count++;
        }

        target--;
        if (target === -1) {
            target = priorities.length - 1;
        }
    }
}
