export class MinHeap {
    private heap: Array<any>;

    constructor() {
        this.heap = [];
    }

    private get size() {
        return this.heap.length;
    }

    public push(node) {
        // insert the new node at the end of the heap array
        this.heap.push(node);
        // find the correct position for the new node
        this.bubbleUp();
    }

    public pop(node) {
        const min = this.heap[0];
        this.heap[0] = this.heap[this.size - 1];
        this.heap.pop();
        this.bubbleDown();
        return min;
    }

    public peek() {
        return this.heap[0];
    }

    private bubbleUp() {
        let index = this.size - 1;

        while (index > 0) {
            const element = this.heap[index];
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];

            if (parent.priority <= element.priority) break;

            // if parent is larger than child swap them, destructuring syntax used below
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    private bubbleDown() {
        let index = 0;
        let min = index;
        const n = this.size;

        while (index < n) {
            const left = 2 * index + 1;
            const right = left + 1;

            // check if left or right child is smaller than parent
            if ((left < n && this.heap[left].priority < this.heap[min].priority) ||
            (right < n && this.heap[right].priority < this.heap[min].priority)) {
                // take the smaller child if both child is present
                if (right < n) {
                    min = this.heap[left].priority < this.heap[right].priority ? left : right;
                } else {
                    min = left;
                }
            }

            // loops done we are at the top already
            if (min === index) break;

            // swap
            [this.heap[min], this.heap[index]] = [this.heap[index], this.heap[min]];
            index = min;
        }
    }

    public printInLineConsole(): void {
        let nodes = '';
        this.heap.forEach(node => nodes += node.item + ", ");
        console.log(nodes);
    }

    public printByNodes(): void {
        for (let i = 0; i < Math.floor(this.heap.length / 2); i++) {
            console.log(
                " PARENT: " + this.heap[i].item + ", "
                + " LEFT CHILD: " + this.heap[2 * i + 1].item  + ", "
                + " RIGHT CHILD:" + this.heap[2 * i + 2].item);
            console.log();
        }
    }
}