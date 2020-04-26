import { Component, OnInit, Output } from '@angular/core';
import { MyWorker, MyWorkerType} from 'src/app/shared/worker.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css']
})
export class AddformWorkerComponent implements OnInit {
name:string;
surname: string;
type = 0;
myWorkerType = MyWorkerType;

@Output() addWorker = 
new EventEmitter<MyWorker>()

  constructor() { }

  ngOnInit(): void {
  }

  onAddWorker() {
    let worker: MyWorker = {
      name: this.name,
      surname: this.surname,
      type: this.type,
      id: 0,
      phone: null
    };
    this.addWorker.emit(worker);
  }
}
