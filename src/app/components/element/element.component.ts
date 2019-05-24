import { Component, OnInit, Input } from '@angular/core';
import { ToDoElement } from 'src/app/models/ToDoElement';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {
  @Input() toDoElement: ToDoElement;

  constructor(private toDoService: TodoService) { }

  ngOnInit() {
  }

  deleteItem = () => {
    this.toDoService.deleteItem(this.toDoElement.id);
  }
}
