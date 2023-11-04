const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const size = inputs[0];
inputs.shift();
inputs.pop();

let low = 0;
let high = 0;

const router = [];

inputs.forEach((packet) => {
    if (packet > 0 && high - low < size) {
        router.push(packet);
        high++;
    } else if (packet === 0) {
        low++;
    }
});

const result = router.slice(low, high).join(' ');
console.log(result || 'empty');
