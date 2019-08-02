import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todos = [];
  todo: string;
  todoCount: number;
  updatedTodoVal: string;
  updatedIndex: string;
  modalData = {
    isOpen: false,
    value: '',
    index: null
  };

  constructor(private _todoService: TodoService) {}

  ngOnInit() {
    this._todoService.data.subscribe(todos => this.todos = todos);
    this.todoCount = this.todos.length;
    this.updateTodoCount();
  }

  addTodo(todo){
    if(todo.length){
      this.todos.push(todo);
      this.clearInput();
      this.updateTodoCount();
    }
  }

  editTodo(todo, index){
    this.updateTodo();
    this.modalData.value = this.updatedIndex === index ? this.updatedTodoVal : todo;
    this.modalData.isOpen = true;
    this.modalData.index = index;
  }

  updateTodo(){
    this.todos[this.modalData.index] = this.modalData.value;
  }

  removeTodo(index){
    this.todos.splice(index, 1);
    this.clearInput();
    this.updateTodoCount();
  }

  updateTodoCount(){
    this.todoCount = this.todos.length;
  }

  update(data){
    this.updatedTodoVal = data.value;
    this.updatedIndex = data.index;
    this.updateTodo();
  }

  clearInput(){
    this.todo = '';
  }


}
