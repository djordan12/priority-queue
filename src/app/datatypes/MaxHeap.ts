/**
 * Max Binary Heap!
 */
export class MaxHeap {

    private _heap: Array<any>;
    private _size: number;

    constructor() {
        this._heap = [];
        this._size = 0;
    }

    private get size(): number {
        return this._heap.length - 1;
    }

    // Swap using destructuring syntax
    private swap(idx1: number, idx2: number): void {
        [this._heap[idx1], this._heap[idx2]] = [this._heap[idx2], this._heap[idx1]];
    }

    // Calculate parent idx (n - 1) / 2
    private getParentIdx(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    // Calculate left child idx (2 * n) + 1
    private getLeftChildIdx(idx: number): number {
        return (2 * idx) + 1;
    }

    // Calculate right child idx (2 * n) + 2
    private getRightChildIdx(idx: number): number {
        return (2 * idx) + 2;
    }

    public insert(node): void {
        this._heap.push(node);
        this.bubbleUp(node);
    }

    /**
     * Traverse up the tree
     * @param node the latest node inserted
     */
    private bubbleUp(node) {
        let idx = this.size;
        let currentNode = this._heap[idx];

        while(idx > 0) {
            let parentIdx = this.getParentIdx(idx);
            let parentNode = this._heap[parentIdx];

            if (parentNode <= currentNode) {
                // Swap the parent and last node added using their indexes
                this.swap(parentIdx, idx);
                // Assign the old parent's index to the new node's index
                idx = parentIdx;
            } else {
                break;
            }
        }
    }

    /**
     * Traverse down the tree
     * @param node last node off of the original heap which will now be at the top of the tree
     */
    private bubbleDown(node) {
        this._heap[0] = node;
        
        let parentIdx = 0;
        while(true) {
            let leftChildIdx = this.getLeftChildIdx(parentIdx);
            let rightChildIdx = this.getRightChildIdx(parentIdx);
            let leftChildNode, rightChildNode;
            let idxToSwap = null;

            // Check if left node is larger than parent, if so save index then check right child
            if (leftChildIdx <= this.size) {
                leftChildNode = this._heap[leftChildIdx];
                if (leftChildNode > node) {
                    idxToSwap = leftChildIdx;
                }
            }

            if (rightChildIdx <= this.size) {
                rightChildNode = this._heap[rightChildIdx];
                if (rightChildNode > node && idxToSwap === null ||
                    rightChildNode > leftChildNode && idxToSwap !== null) {
                        idxToSwap = rightChildIdx;
                    }
            }

            if (idxToSwap === null) break;

            this.swap(parentIdx, idxToSwap);
            parentIdx = idxToSwap;
        }
    }

    public extractMax(): any {
        const maxNode = this._heap[0];
        this.bubbleDown(this._heap.pop());
        return maxNode;
    }

    public printInLineConsole(): void {
        let nodes = '';
        this._heap.forEach(node => nodes += node + ", ");
        console.log(nodes);
    }

    public printByNodes(): void {
        for (let i = 0; i < Math.floor(this._heap.length / 2); i++) {
            console.log(
                " PARENT: " + this._heap[i] + ", "
                + " LEFT CHILD: " + this._heap[2 * i + 1]  + ", "
                + " RIGHT CHILD:" + this._heap[2 * i + 2]);
            console.log();
        }
    }
}