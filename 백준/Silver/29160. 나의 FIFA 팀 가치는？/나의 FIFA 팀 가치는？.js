const top = 0;
const parent = i => ((i + 1) >>> 1) - 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;

class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
        this._heap = [];
        this._comparator = comparator;
    }
    size() {
        return this._heap.length;
    }
    isEmpty() {
        return this.size() == 0;
    }
    peek() {
        return this._heap[top];
    }
    push(...values) {
        values.forEach(value => {
            this._heap.push(value);
            this._siftUp();
        });
        return this.size();
    }
    pop() {
        const poppedValue = this.peek();
        const bottom = this.size() - 1;
        if (bottom > top) {
            this._swap(top, bottom);
        }
        this._heap.pop();
        this._siftDown();
        return poppedValue;
    }
    replace(value) {
        const replacedValue = this.peek();
        this._heap[top] = value;
        this._siftDown();
        return replacedValue;
    }
    _greater(i, j) {
        return this._comparator(this._heap[i], this._heap[j]);
    }
    _swap(i, j) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }
    _siftUp() {
        let node = this.size() - 1;
        while (node > top && this._greater(node, parent(node))) {
            this._swap(node, parent(node));
            node = parent(node);
        }
    }
    _siftDown() {
        let node = top;
        while (
            (left(node) < this.size() && this._greater(left(node), node)) ||
            (right(node) < this.size() && this._greater(right(node), node))
        ) {
            let maxChild = (right(node) < this.size() && this._greater(right(node), left(node))) ? right(node) : left(node);
            this._swap(node, maxChild);
            node = maxChild;
        }
    }
}

/// main
const readFrom = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const inputs = require('fs').readFileSync(readFrom).toString().trim().split('\n');
const [N, K] = inputs.shift().split(' ').map(Number);

const member = [
    [],
    new PriorityQueue(),
    new PriorityQueue(),
    new PriorityQueue(),
    new PriorityQueue(),
    new PriorityQueue(),
    new PriorityQueue(),
    new PriorityQueue(),
    new PriorityQueue(),
    new PriorityQueue(),
    new PriorityQueue(),
    new PriorityQueue(),
];

for (let i = 0; i < N; i++) {
    const [position, value] = inputs[i].split(' ');
    member[position].push(+value);
}

let value = 0;
for (let i = 0; i < K; i++) {
    value = 0;
    for (let j = 1; j < member.length; j++) {
        if (member[j].isEmpty()) {
            continue;
        }
        member[j].push(member[j].pop() - 1);
    }


    for (let j = 1; j < member.length; j++) {
        if (member[j].isEmpty()) {
            continue;
        }
        value += member[j].peek();
    }
}

console.log(value);
