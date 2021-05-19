import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {Todo} from '../Todo';
import {TodoService} from '../todo.service';
import {DatePipe} from '@angular/common';
import {CustomDatePipe} from '../../_pipes/custom-date.pipe';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  date = new Date();

  todos: Todo[] = [];

  constructor(private todoService: TodoService,
              private datePipe: DatePipe,
              private customDatePipe: CustomDatePipe,
              @Inject(LOCALE_ID) private locale: string) {
  }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(data => {
      this.todos = data;
    });
  }

  isDone(todo: Todo): void {
    todo.done = !todo.done;
    this.updateTodo(todo);
  }

  updateTodo(todo: Todo): void {
    this.todoService.updateTodo(todo).subscribe(data => {
      this.todos = data;
    });
  }

  deleteItem(id: number): void {
    this.deleteTodo(id);
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe(data => {
      this.todos = data;
    });
  }
}
