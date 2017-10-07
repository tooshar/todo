import { Injectable } from '@angular/core';

@Injectable()
export class CommonTodoService {
  public newTasks = [];public completedTasks = [];
  constructor() { }
  addTask(newTask)
  {
    this.newTasks.push(newTask);
    console.log(this.newTasks);
  }
  completedTaskFunc(completeTask){
    this.completedTasks.push(completeTask);
  }
  
}
