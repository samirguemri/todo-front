import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from './Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {
  }

  public getTodoByUser(user: string): void {
    this.http.get(`${this.url}/todo/${user}`).subscribe(data => {
      console.log(data);
    });
  }

  public getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.url}/todo/${id}`);
  }

  public getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.url}/todo/all`);
  }

  public addTodo(todo: Todo): Observable<Todo[]> {
    return this.http.post<Todo[]>(`${this.url}/todo/add`, todo);
  }

  public updateTodo(todo: Todo): Observable<Todo[]> {
    return this.http.put<Todo[]>(`${this.url}/todo/update`, todo);
  }

  public deleteTodo(id: number): Observable<Todo[]> {
    return this.http.delete<Todo[]>(`${this.url}/todo/delete/${id}`);
  }

}
