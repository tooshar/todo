import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  t = [];

  constructor(private todo: TodoService) {
    this.t = todo.getTask();
  }

  onChecked(t, i) {
    this.todo.onCheckedTask(t);
    this.t.splice(i,1);
  }

}
