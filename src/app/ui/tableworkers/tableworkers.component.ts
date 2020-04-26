import { Component, OnInit, Input, Output } from '@angular/core';
import { MyWorker, MyWorkerType } from 'src/app/shared/worker.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tableworkers',
  templateUrl: './tableworkers.component.html',
  styleUrls: ['./tableworkers.component.css']
})
export class TableworkersComponent implements OnInit {
  @Input() title: string;
  @Input() workers: MyWorker[] = [];
  @Output() deleteWorker =
    new EventEmitter<number>();
  @Output() changeWorker =
    new EventEmitter<string>();

  name: string;
  surname: string;

  flag: boolean = true;
  myWType = MyWorkerType;
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteWorker(id: number) {
    this.deleteWorker.emit(id);
  }

  onChangeName() {
    switch (this.flag) {
      case true:
        this.flag = false;
        break;
      case false:
        this.flag = true;
        break;
    }
  }

  onConfirmName(id: number) {
    console.log(this.name);
    this.workers[this.workers.findIndex((worker) => worker.id === id)].name = this.name;
    this.workers[this.workers.findIndex((worker) => worker.id === id)].surname = this.surname;
    console.log(this.name);
    this.changeWorker.emit(this.surname);
    if (((this.name != '')&& (this.name != undefined)) &&((this.surname != '')&& (this.surname != undefined)))  {
      switch (this.flag) {
        case true:
          this.flag = false;
          break;
        case false:
          this.flag = true;
          break;
      }
    } 
     
  }
}
