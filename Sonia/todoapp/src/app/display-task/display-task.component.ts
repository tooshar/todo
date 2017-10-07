import { Component, OnInit } from '@angular/core';
import{TodoService} from '../todo.service';
@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrls: ['./display-task.component.css']
})
export class DisplayTaskComponent implements OnInit {
  tasks=[];
  constructor(private todoService:TodoService) {
    
   }

  ngOnInit() {
    this.tasks=this.todoService.pendingTask;
  }
  completed(i){
    this.todoService.completeTask(i);
  }
  
}
