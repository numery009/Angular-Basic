import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  todosUrl:string= 'https://jsonplaceholder.typicode.com/todos'
  todoslimit= '?_limit=5';
  
  // get Todos
  getTodos(): Observable<Todo[]> {
    // return [
    //  {
    //  id:1,
    //   title: 'Todo One',
    //   completed: false
    // },
    // {
    //   id:2,
    //   title: 'Todo Two',
    //    completed: false
    //  },
    //  {
    //    id:3,
    //   title: 'Todo Three',
    //  completed: true
    // }
    //]

    return this.http.get<Todo[]>(`${this.todosUrl}${this.todoslimit}`);

  }

// Delete Todo
deleteTodo(todo:Todo):Observable<Todo>{
  const url= `${this.todosUrl}/${todo.id}`;
  return this.http.delete<Todo>(url, httpOptions);
}

//Add Todo
addTodo(todo:Todo):Observable<Todo>{
  return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
}

// Toggle Completed

toggleCompleted(todo: Todo):Observable<any>{
  const url= `${this.todosUrl}/${todo.id}`;
  return this.http.put(url, todo, httpOptions);
}

}
