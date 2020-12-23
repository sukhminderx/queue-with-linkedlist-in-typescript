import { LinkedList } from "../SinglyLinkedList";

export class Queue {
    // can be improved through generics to define the Node's value's type
  _values: LinkedList | null = null;

  constructor() {
    this._values = new LinkedList();
  }
  
  enqueue(val: number) {
    this._values?.insertAtEnd(val);
  }

  dequeue(): number {
    if (this.underflow()) {
      return NaN;
    } else {
      const front = this._values?.returnFirstValue();
      this._values?.deleteFirstNode();
      return front as number;
    }
  }
  underflow() {
    return this._values!.isQueueEmpty();
  }
  front(): number {
    if (this.underflow()) {
      return NaN;
    } else {
      const front = this._values?.returnFirstValue();
      return front as number;
    }
  }

  print() {
    console.log(this._values);
  }
}
