import { Component, OnInit } from '@angular/core';
import { TodoService} from '../services/todo.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  text: string;
  todos = [];

  constructor(private TodoService: TodoService) {
    this.text = "";
  }

 createTask(){
 this.TodoService.createTask(this.text);
 this.text='';
 }


  ngOnInit() {
  }

}
