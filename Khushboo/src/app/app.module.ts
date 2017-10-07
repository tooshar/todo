import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CompletedTaskComponent } from './completed-task/completed-task.component';

import { CommonTodoService } from './services/common-todo.service';
@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    TaskListComponent,
    CompletedTaskComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [CommonTodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
