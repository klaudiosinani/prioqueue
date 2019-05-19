import {Queue, Item} from '../../types/prioqueue';

// Create a max priority queue
const maxQueue = new Queue<string>((x, y) => x.priority - y.priority);
//=> Queue { queue: [] }

maxQueue.enqueue(15, 'A');
//=> Queue { queue: [Item { priority: 15, value: 'A' }] }

maxQueue.peek();
//=> Item { priority: 15, value: 'A' }

const item = new Item(15, 'A');

maxQueue.peek().toPair();
//=> [15, 'A']

maxQueue.peekPriority() === item.priority;
//=> true

maxQueue.peekValue() === item.value;
//=> true

maxQueue.enqueue(10, 'B').enqueue(5, 'C');
//=> Queue { queue: [
// Item { priority: 15, value: 'A' },
// Item { priority: 10, value: 'B' },
// Item { priority: 5, value: 'C' } ] }

maxQueue.includes('A');
//=> true

maxQueue.includes('D');
//=> false

maxQueue.enqueue(7, 'D').enqueue(8, 'E').enqueue(2, 'F');
//=> Queue { queue: [
// Item { priority: 15, value: 'A' },
// Item { priority: 10, value: 'B' },
// Item { priority: 5, value: 'C' },}
// Item { priority: 7, value: 'D' },
// Item { priority: 8, value: 'E' },
// Item { priority: 2, value: 'F' } ] }

maxQueue.search('E');
//=> Item { priority: 8, value: 'E' }

maxQueue.dequeue();
//=> Item { priority: 15, value: 'A' }

maxQueue.dequeue();
//=> Item { priority: 10, value: 'B' }

maxQueue.peek();
//=> Item { priority: 8, value: 'E' },

maxQueue;
//=> Queue { queue: [
// Item { priority: 8, value: 'E' },
// Item { priority: 7, value: 'D' },
// Item { priority: 5, value: 'C' },
// Item { priority: 2, value: 'F' } ] }

maxQueue.values();
//=> [ 'E', 'D', 'C', 'F' ]

maxQueue.toPairs();
//=> [ [ 8, 'E' ], [ 7, 'D' ], [ 5, 'C' ], [ 2, 'F' ] ]
