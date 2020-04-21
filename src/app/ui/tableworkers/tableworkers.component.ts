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
  type = 0;
  myWType = MyWorkerType;
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteWorker(id: number) {
    this.deleteWorker.emit(id);
  }
}
