import { Component, OnInit } from '@angular/core';
import{TodoService} from '../todo.service';
@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.css']
})
export class CompletedTaskComponent implements OnInit {
  tasks=[];
  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.tasks=this.todoService.completedTask;
  }
}
