import { Component, OnInit } from '@angular/core';
import{TodoService} from '../todo.service';
@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit {

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }
  task="";
  addNew(){
    this.todoService.newTask(this.task);
    this.task="";
  }

}
