import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  constructor() { }
  public pendingTask=[];
  public completedTask=[];
  public newTask(task){
    this.pendingTask.push(task);
  }
  public completeTask(i){
    var index=Number(i);
    var data=this.pendingTask[index];
    this.pendingTask.splice(index,1);
    this.completedTask.push(data);
  }

}
