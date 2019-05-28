import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  content: string = '';

  constructor(private toDoService: TodoService) { }

  ngOnInit() { }

  addElement = () => {
    this.toDoService.addItem(this.content)
    this.content = '';
  }
}