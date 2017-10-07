import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  todos = [];
  checkedTodos=[];
  constructor() {

  }
getTaskList(){
  return this.todos;
}
getTaskCompleted(){
  return this.checkedTodos;
}
  createTask(text) {
  this.todos.push(text);
  console.log('serviceeeee',text)
}

sendTodo(todo){
  this.checkedTodos.push(todo)
}


}
