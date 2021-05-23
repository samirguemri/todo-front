import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8080/api';
  private headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');

  constructor(private http: HttpClient) {
  }

  addNewUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/user/add`, user);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/user/${id}`);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(`${this.url}/user/${email}`);
  }
}
