import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { DisplayTaskComponent } from './display-task/display-task.component';
import { CompletedTaskComponent } from './completed-task/completed-task.component';
import {TodoService} from './todo.service';
@NgModule({
  declarations: [
    AppComponent,
    CreateNewComponent,
    DisplayTaskComponent,
    CompletedTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
