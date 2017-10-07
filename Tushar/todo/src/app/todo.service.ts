export class TodoService {
  todo = [];
  checkedTask = [];
  createTask(text) {
    this.todo.push(text);
  }

  getTask() {
    return this.todo;
  }

  onCheckedTask(t) {
    this.checkedTask.push(t);
  }

  getCompletedTask(){
    return this.checkedTask;
  }
}
