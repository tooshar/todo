import { Component, OnInit } from '@angular/core';
import { TodoService} from '../services/todo.service';

@Component({
  selector: 'app-completed-list',
  templateUrl: './completed-list.component.html',
  styleUrls: ['./completed-list.component.css']
})
export class CompletedListComponent implements OnInit {
  todos=[];

  constructor(private TodoService: TodoService) { 
    this.todos=this.TodoService.checkedTodos;
  }

  ngOnInit() {
  }

}
