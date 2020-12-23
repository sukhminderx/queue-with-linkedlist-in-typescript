import React from "react";
import logo from "./logo.png";
import "./App.css";
import { Queue } from "./Queue";

function App() {

  const queue = new Queue();

  console.log('---starting ADT---')
  queue.print();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  console.log('---post enqueue---')
  queue.print();

  queue.dequeue();
  console.log('---post dequeue---')
  queue.print();

  queue.dequeue();
  console.log('---post dequeue---')
  queue.print();
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{
          color: 'black',
          marginTop: '100px'
        }}>Check your console for Queue ADTS with LinkedList in TypeScript... visit <a href="https://www.gabruism.com">Gabruism</a></h1>
      </header>
    </div>
  );
}

export default App;
