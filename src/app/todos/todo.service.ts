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

  public getTodoById(id: number): void {
    this.http.get(`${this.url}/todo/${id}`).subscribe(data => {
      console.log(data);
    });
  }

  public getTodoByUser(user: string): void {
    this.http.get(`${this.url}/todo/${user}`).subscribe(data => {
      console.log(data);
    });
  }

  public getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.url}/todo/all`,
                                {observe: 'body', responseType: 'json'});
  }

  public addTodo(todo: Todo): Observable<Todo[]> {
    return this.http.post<Todo[]>(`${this.url}/todo/add`,
                                  todo,
                                  {observe: 'body', responseType: 'json'});
  }

  public updateTodo(todo: Todo): Observable<Todo[]> {
    return this.http.put<Todo[]>(`${this.url}/todo/update`,
                                  todo,
                                  {observe: 'body', responseType: 'json'});
  }

  public deleteTodo(id: number): Observable<Todo[]> {
    return this.http.delete<Todo[]>(`${this.url}/todo/delete/${id}`,
                                  {observe: 'body', responseType: 'json'});
  }

}
