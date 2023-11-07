const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const queue = [];
const commandMap = {
    push: (e) => queue.push(e),
    pop: () => queue.shift() ?? -1,
    size: () => queue.length,
    empty: () => queue.length > 0 ? 0 : 1,
    front: () => queue[0] ?? -1,
    back: () => queue[queue.length -1] ?? -1,
};

inputs.shift();
const results = [];
for (const input of inputs) {
    const command = input.trim().split(' ');
    const result = commandMap[command[0]](command[1]);
    command[0] !== 'push' && results.push(result);
}

console.log(results.join('\n'));
