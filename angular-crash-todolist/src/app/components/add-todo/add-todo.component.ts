import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { flatten } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> =new EventEmitter();

  title: string;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    const todo={
      title: this.title,
      component:false
    }
    this.addTodo.emit(todo);
  }
}
