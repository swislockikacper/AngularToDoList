import { Injectable } from '@angular/core';
import { ToDoElement } from '../models/ToDoElement';
import { ELEMENTS } from '../mocks/todo-items';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private elements: ToDoElement[];

  constructor() {
    this.elements = ELEMENTS;
  }

  getToDoItems = (): ToDoElement[] => {
    return this.elements;
  }

  addItem = (content: string) : void => {
    this.elements.push(new ToDoElement(this.elements.length + 1, content));
  }

  deleteItem = (id: number) : void => {
    this.elements = this.elements.filter(e => e.id !== id);
  }
}
