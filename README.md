# Priority Queue / Heap Breakdown
Purpose of this project was to create a heap / priority queue from scratch in TypeScript. Javascript and TypeScript have no native heap data type similiar to some of the more popular programming languages. There are several APIs available for the heap data type for JavaScript but understanding how the core principles work for a heap can be very beneficial for designing algorithms.

#### What is a priority queue?
A priority queue is an abstract data type while a heap is the concrete data structure we use to implement a priority queue. Their main operations being:
* insert: insert an item with key
* delete min/max: remove the item with the smallest/largest key and return it

#### What is a heap?
There are two kinds of heaps: min heap and max heap. A min heap is a tree that has two properties:
1. Almost complete, e.g. every level is filled except possibly the last (deepest) level. The filled items in the last level are left-justified.
2. For any node, its key (priority) is greater than its parent's key (Min Heap)
A max heap has the same the property as 1 and the opposite of 2.

#### Important notes with heaps:
* the number in each node is the key, not value (remember a tree node has a value). Keys are used to sort the nodes/construct the tree, and values are the data we want to heap to store.
* Unlike a binary search tree, there is no comparable relationship between children. I rephrase this in two other ways, there is NO inherent ordering between the left and right element but you'll need to take the smaller one in order to maintain the min-heap ordering. One more time, there is no comparable relationship across a level of a heap at all!

#### What are some use cases?
I've actually implemented a more complex version of this priority queue for a manufacturing company. The client had a series of constraints that set a limit on the priority level of an order, for example, set a higher priority based off of different leadership approval and continue down comparing other constraints prior to setting the order in the queue.

Other use cases:
* K closest pointers to origin
* Kth largest element
* Kth largest element in a stream
* Median of a data stream

I've thew together quite quickly a simple UI in the Angular framework just to offer some interaction with the heap and allow a user to step through the process of adding a new item to the queue and if you're familiar with chrome dev tools you can step through the code.

If you use the UI, first off, the 'MinHeap.ts' data structure I have created can both be utilized as a min heap and a queue. If a priority isn't specified upon initializing the HeapItem then it'll assign the 'item' to the 'priority', essentially making it its key to be sorted by. I haven't included any time of validation in this UI, do not mix and match heap items or you will get funky results. For example, don't add an item with just quantity then add a new item with a priority level and quantity. Refresh the page to start over, all results are console logged. It should either be just a quantity and or quantity and priority level.

Get it locally? clone repo, npm install, and ng serve! Access your browser with localhost:4200

