## ARRAYS

- An ordered list of data that we access with a numerical index. An array is allocated upfront as a single block of memory based on the number of elements and type of data we want the array to hold. 
- This allows us to read and write elements into array efficiently, since our program knows exactly where each element is stored in memory

- **dynamic arrays**: guarantee amortized performance by only performing costly operations when necessary

### When To use Arrays in an Interview 

When you need data in an ordered list with fast indexing or compact memory footprint. DO NOT use for unsorted items or insert/remove items frequently.



## LINKED LISTS

- values are not stored in adjacent blocks of memory but in nodes that are connected via memory pointers 
- *singly linked lists* consist of nodes that store references to next node on the list
- *doubly linked lists* has nodes to both next and previous nodes
- allows us to insert and remove arbitrary elements from the list without re-allocating or moving elements, preventing the worst performance case of an array 

### When to use in an interview

When yo need to efficiently insert or delete items from a list, and when you need the size of the list to be flexible

- They are not good for indexing as arrays or as good for searching as hash tables and trees

### Calculating Memory Usage

- A bit more complicated than array because of the data we store in each node and also storing pointers between nodes. a memory pointer is an 8 byte memory address

## STACKS AND QUEUES

- **Queues** : FIFO
- **Stacks**: LIFO(like pancake stack)
- Usually implemented with an underlying linked list or array and fundamental among common concepts in cs(call stack, network queues, etc)

### Calculating Memory Usage 

- Arrays are used to build fixed-size stacks and queues,linked lists are for variable sized stacks and queues

