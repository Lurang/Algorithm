const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const length = +inputs.shift();
const [range, dps]  = inputs.shift().split(' ').map(Number);
let ammo = +inputs.shift();
const zombies = inputs.map(Number);
const damages = new Array(3 * 10**6 + 1).fill(0);

for (let i = 0; i < length; i++) {
    const now = damages[i] - damages[Math.max(0, i + 1 - range)];

    if (zombies[i] <= now + dps) {
        damages[i + 1] = damages[i] + dps;
        continue;
    } else {
        if (ammo) {
            damages[i + 1] = damages[i];
            ammo--;
        } else {
            console.log('NO');
            return 0;
        }
    }
}

console.log('YES');
