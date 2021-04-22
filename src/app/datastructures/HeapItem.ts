export class HeapItem {

    private item: any;
    private priority: any;
    
    constructor(item, priority = item) {
        this.item = item;
        this.priority = priority;
    }
}