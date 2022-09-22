import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // store value of input
  todoItem: string = '';

  // store the list of todo item
  todoList: string[] = [];
  addTodoList = () =>{
    // Pushing todo item to list
    this.todoList.push(this.todoItem)
    // clear the value of todoItem
    this.todoItem = ''
  }
}
