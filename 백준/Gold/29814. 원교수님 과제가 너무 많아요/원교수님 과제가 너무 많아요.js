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

class DSU {
    constructor(n) {
        this.parent = Array.from({length: n + 1}, (_, i) => i);
        this.depth = Array.from({length: n + 1});
        this.d = Array.from({length: n + 1});
        this.sz = Array.from({length: n + 1}, () => 1);
    }

    getParent(num) {
        if (num === this.parent[num]) return num;
        const p = this.getParent(this.parent[num]);
        return this.parent[num] = p;
    }

    merge(a, b, w = 0) {
        a = this.getParent(a);
        b = this.getParent(b);
        if (a < b) {
            const tmp = a;
            a = b;
            b = tmp;
        }
        this.parent[a] = b;
    }
}

const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, C] = inputs.shift().trim().split(' ').map(Number);

const pq = new PriorityQueue((a, b) => a[1] > b[1]);

for (let i = 0; i < N; i++) {
    const info = inputs[i].trim().split(' ');
    pq.push([info[0] - info[1] + 1, +info[2]]);
}

const dsu = new DSU(N);
let count = 0;
let sum = 0;
while (!pq.isEmpty()) {
    const rhkwp = pq.pop();
    const index = dsu.getParent(rhkwp[0]);
    if (index === 0) {
        continue;
    }
    count++;
    sum += rhkwp[1];
    dsu.merge(index, index - 1);

    if (sum >= C) {
        break;
    }
}

console.log(sum >= C ? count : "I'm sorry professor Won!");
