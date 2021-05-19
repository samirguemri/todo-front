import {Component, OnInit} from '@angular/core';
import {Todo} from '../Todo';
import {TodoService} from '../todo.service';
import {CustomDatePipe} from '../../_pipes/custom-date.pipe';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

  date = new Date();
  todos: Todo[];
  title;
  value;
  todoBefore: Date;

  constructor(private todoService: TodoService,
              private customDatePipe: CustomDatePipe) {
    this.todos = [];
    this.title = '';
    this.value = '';
    this.todoBefore = new Date();
  }

  ngOnInit(): void {
  }

  beforeValue(): string {
    return this.customDatePipe.transform(new Date(Date.now() + (24 * 60 * 60 * 1000)));
  }

  addItem(): void {
    if (this.value !== '' || this.title !== '') {
      const newItem: Todo = {
        id: null,
        title: this.title,
        value: this.value,
        done: false,
        todoBefore: this.customDatePipe.transform(new Date(Date.now())),
        owner: 'sam@email.com'
      };
      this.addTodo(newItem);
    }
    this.title = '';
    this.value = '';
  }

  addTodo(todo: Todo): void {
    this.todoService.addTodo(todo).subscribe(data => {
      this.todos = data;
    });
  }

}
