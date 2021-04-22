import { Component } from '@angular/core';
import { HeapItem } from './datastructures/HeapItem';
import { MinHeap } from './datastructures/MinHeap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'priority-queue';
  minHeap = new MinHeap();

  public add(e) {
    console.log("Added: Quantity " + e.item + " , Priority : " + e.priority);
    this.minHeap.push(new HeapItem(e.item, e.priority));
  }

  public display() {
    this.minHeap.printInLineConsole();
  }
}
