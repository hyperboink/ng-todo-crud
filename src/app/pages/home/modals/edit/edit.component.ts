import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  updateData = {
    value: '',
    index: null
  };

  @Input() edit: any;

  @Output() updateValues = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  update(){
    if(this.edit.value){

      this.edit.isOpen = false;

      this.updateData.value = this.edit.value;
      this.updateData.index = this.edit.index;
      this.updateValues.emit(this.updateData);

    }
  }

  close(){
    this.edit.isOpen = false;
  }

}
