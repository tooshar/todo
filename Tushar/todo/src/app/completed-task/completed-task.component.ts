import { TodoService } from '../todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.css']
})
export class CompletedTaskComponent implements OnInit {
t = [];
  constructor(private todo: TodoService) {
    this.t = this.todo.getCompletedTask();
   }

  ngOnInit() {
  }


}
