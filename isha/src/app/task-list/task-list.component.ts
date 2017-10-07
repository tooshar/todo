import { Component, OnInit,AfterViewInit } from '@angular/core';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit,AfterViewInit {
  todos=[];

  constructor(private TodoService: TodoService) { 
    //console.log(">>>>>>>>>>>>>>>>>>>>>>>");
    this.todos=TodoService.getTaskList();
  }

  ngOnInit() {
  }
  ngAfterViewInit(){
    console.log(">>>>>>>>>>>>>>>>>>>>>>>");
  }

  onCheck(todo,index){
  this.TodoService.sendTodo(todo);
  this.todos.splice(index,1)
  }

}
