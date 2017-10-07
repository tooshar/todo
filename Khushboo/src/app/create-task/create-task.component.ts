import { Component, OnInit } from '@angular/core';
import { CommonTodoService } from '../services/common-todo.service';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  createNewTask: string;
  constructor(private commonService: CommonTodoService) {
    this.createNewTask = '';
   }

  ngOnInit() {
  }
  addNewTask(){
    this.commonService.addTask(this.createNewTask);
    console.log("in create task",this.createNewTask);
  }
  addTodo(event){
    console.log(">>>>>>>>>>>>>>>>>>>>");
  }
}
