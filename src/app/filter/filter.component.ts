import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fet-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent {
  @Input('yvela') all: number = 0
  @Input() low: number = 0
  @Input() avg: number = 0
  @Input() high: number = 0

  selectedCategory : string = 'all';

  @Output()
  onSelect: EventEmitter<string> = new EventEmitter<string>()

  filterCategories(){
    this.onSelect.emit(this.selectedCategory)
  }

  testSvc(){
    console.log('you will receive an email')
  }
  
}
