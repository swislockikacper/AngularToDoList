import { Component, OnInit } from '@angular/core';
import { ToDoElement } from 'src/app/models/ToDoElement';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'elements-list',
  templateUrl: './elements-list.component.html',
  styleUrls: ['./elements-list.component.scss']
})
export class ElementsListComponent implements OnInit {
  elements: ToDoElement[];

  constructor(private todoService: TodoService) {
  }

  getElements(): ToDoElement[] {
    return this.todoService.getToDoItems();
  }

  ngOnInit() {
  }

}