import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TodoService} from './todos/todo.service';
import {HttpClientModule} from '@angular/common/http';
import {CustomDatePipe} from './_pipes/custom-date.pipe';
import {DatePipe} from '@angular/common';
import {LoginComponent} from './authentication/login/login.component';
import {TodoListComponent} from './todos/todo-list/todo-list.component';
import {NewTodoComponent} from './todos/new-todo/new-todo.component';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './authentication/register/register.component';
import {PageNotFoundComponent} from './_components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: PageNotFoundComponent}
  ]
;

@NgModule({
  declarations: [
    AppComponent,
    CustomDatePipe,
    LoginComponent,
    TodoListComponent,
    NewTodoComponent,
    RegisterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [TodoService, DatePipe, CustomDatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
