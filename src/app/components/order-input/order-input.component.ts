import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { PriorityLevel } from '../priority-queue/PriorityLevel';

@Component({
  selector: 'app-order-input',
  templateUrl: './order-input.component.html',
  styleUrls: ['./order-input.component.css']
})
export class OrderInputComponent implements OnInit {

  highestLevel: PriorityLevel;
  priorityLevels: Array<PriorityLevel>;
  hasLevel: boolean;

  quantity: number;
  hasQuantity: boolean;

  @Output() submit = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.priorityLevels = [];
    this.priorityLevels.push(PriorityLevel.CEO);
    this.priorityLevels.push(PriorityLevel.DIRECTOROFOPS);
    this.priorityLevels.push(PriorityLevel.DIRECTOROFSALES);
    this.priorityLevels.push(PriorityLevel.LOGISTICSMANAGER);
  }

  public priorityLevelName(level: PriorityLevel): string {
    switch (level) {
        case PriorityLevel.CEO:
            return 'CEO';
        case PriorityLevel.DIRECTOROFOPS:
            return 'Director Of Operations';
        case PriorityLevel.DIRECTOROFSALES:
            return 'Director of Sales';
        case PriorityLevel.LOGISTICSMANAGER:
            return 'Logistics Manager';
    }
  }

  public levelSelected(level) {
    this.hasLevel = true;
  }

  public onSubmit() {
    this.submit.emit({ item: this.quantity, priority: this.highestLevel });
  }
}
