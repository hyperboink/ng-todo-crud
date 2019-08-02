import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
export class OthersComponent implements OnInit {

  todos = [];
  todoCount: number;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.data.subscribe(todos => this.todos = todos);
    this.todoCount = this.todos.length;
  }
}
