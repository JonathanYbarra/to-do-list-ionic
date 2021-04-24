import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = [
    {
      itemName: 'Coding',
      itemDueDate: '01-13-21',
      itemPriority: 'high',
      itemCategory: 'Word'
    },
    {
      itemName: 'Design',
      itemDueDate: '02-17-21',
      itemPriority: 'low',
      itemCategory: 'Work'
    },
    {
      itemName: 'Shopping',
      itemDueDate: '01-02-21',
      itemPriority: 'middle',
      itemCategory: 'Personal'
    },
    {
      itemName: 'Workout',
      itemDueDate: '01-22-21',
      itemPriority: 'high',
      itemCategory: 'Personal'
    }
  ]

  today: number = Date.now();
  
  constructor() { }

}
