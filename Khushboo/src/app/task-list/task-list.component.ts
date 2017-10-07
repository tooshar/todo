import { Component, OnInit } from '@angular/core';
import { CommonTodoService } from '../services/common-todo.service';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks = [];
  constructor(private commonService:CommonTodoService) { 
    this.tasks=this.commonService.newTasks;
  }
  
  ngOnInit() {
  }
  taskCompleted(task, index){
    console.log("completed task",task);
    this.tasks.splice(index,1);
    this.commonService.completedTaskFunc(task);
  }

}
