import { Component, OnInit } from '@angular/core';
import { CommonTodoService } from '../services/common-todo.service';
@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.css']
})
export class CompletedTaskComponent implements OnInit {
  completedTasks = [];
  constructor(private commonService: CommonTodoService) { 
    this.completedTasks = this.commonService.completedTasks;
  }

  ngOnInit() {
  }

}
