import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  styleUrl: './item-output.component.scss'
})
export class ItemOutputComponent {

  @Output() newItemEvent = new EventEmitter<any>();

  addNewItem(value: string){
    this.newItemEvent.emit(value);
  }
}
