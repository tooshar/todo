import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service'

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent  {
text: string;

  constructor(private todo: TodoService ) { }

  createTask(text){
  this.todo.createTask(text);
  this.text = "";
  }

}
