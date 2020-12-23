import { Node } from "./Node";

export class LinkedList {
  // head always points to first node
  // last node's next is always null
  head: Node | null;
  constructor() {
    this.head = null;
  }

  /*
    construct a node with data
    its next should be what is head as we are inserting in beginning
    head points to this node as it is at beginning
  */
  insertAtBeginning(data: number) {
    const node = new Node(data);
    node._next = this.head;
    this.head = node;
  }

  /*
    construct a node with data
    its next should be null as it is to be at end
    traverse till end to get last node
    last node's next should point to new node
  */
  insertAtEnd(data: number) {
    const node = new Node(data);
    node._next = null;
    const lastNode = this.traverseAndReturnLastNode();
    if(lastNode){ // LL is not empty
      lastNode._next = node;       
    } else {
      this.head = node;
    }
  }

  // as first value is always head
  returnFirstValue() {
    return this.head?._data;
  }

  isQueueEmpty() {
    return this.head===null;
  }

  /*
    initialise the node
    get needed node by traversing till it
    newNode next to be neededNode.next
    neededNode.next to be newNode
  */
  insertAfterNode(after: number, data: number) {
    const newNode = new Node(data);
    const neededNode = this.traverseTillNode(after);
    newNode._next = neededNode._next;
    neededNode._next = newNode;
  }

  /*
    head should point directly to head.next as head points to first node
    thus, we bypass the head(first) node
  */
  deleteFirstNode () {
    this.head = this.head?._next as Node;
  }

  /*
    traverse till lastNode
    also, get penultimateNode
    penultimateNode.next = null
  */
  deleteLastNode () {
    const penultimateNode = this.traverseAndReturnPenultimateNode(); // T=O(n)
    penultimateNode._next = null; // T=O(n)+O(1)=O(n)
    // O(n) + O(n)=O(n)
  }

  deleteSpecificNode (data: number) {
    const prevNode = this.traverseTillPrevNode(data);
    const nodeWithData = prevNode._next as Node;
    prevNode._next = nodeWithData._next;
  }

  deleteList(){
    let currentNode = this.head as Node;
    let prevNode: Node | null = null;
    while (currentNode.next !== null) {
      prevNode && (prevNode._next = null); 
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    this.head = null
  }

  /*
    iterate over currentNode starting from head
    last node's next is null
    print each node meanwhile
  */
  traverseAndPrintNode() {
    let currentNode = this.head as Node;
    if(currentNode){
      while (currentNode.next !== null) { 
        console.log(currentNode._data);   
        currentNode = currentNode.next;
      }
      console.log(currentNode._data);
    }
  }


  /* helper methods */

  /*
    iterate over currentNode starting from head
    last node's next is null
  */
 traverseAndReturnLastNode(): Node {
  let currentNode = this.head as Node;
  while (currentNode && currentNode.next !== null) {    
    currentNode = currentNode.next;
  }
  return currentNode;
}

  /*
    iterate over currentNode starting from head
    needed node's _data is currentNode.data
  */
  traverseTillNode(data: number): Node {
    let currentNode = this.head as Node;
    while (currentNode.data !== data) {
      currentNode = currentNode.next as Node;
    }
    return currentNode;
  }

  /*
    iterate over currentNode starting from head
    last node's next is null
  */
  traverseAndReturnPenultimateNode(): Node {
    let currentNode = this.head as Node;
    let penultimateNode: Node | null = null;
    while (currentNode.next !== null) {
      penultimateNode = currentNode;
      currentNode = currentNode.next;
    }
    return penultimateNode as Node;
  }

  /*
    iterate over currentNode starting from head
    keep prevNode in memory
    needed node's _data is prevNode.data
  */
  traverseTillPrevNode(data: number): Node {
    let currentNode = this.head as Node;
    let prevNode: Node | null = null;
    while (currentNode.data !== data) {
      prevNode = currentNode;
      currentNode = currentNode.next as Node;
    }
    return prevNode as Node;
  }


}
