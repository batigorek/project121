import { Component, OnInit, Input, Output } from '@angular/core';
import { MyWorker, MyWorkerType } from 'src/app/shared/worker.model';
import { EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


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
  phone: string;
  workerForm: FormGroup;
  flag = true;
  mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/,'-', /\d/, /\d/];

  myWType = MyWorkerType;
  constructor() { }

  ngOnInit(): void {
    this.workerForm = new FormGroup({
      name: new FormControl({ value: '', disabled: false }, [Validators.required]),
      surname: new FormControl({ value: '', disabled: false }, [Validators.required]),
      phone: new FormControl({ value: '', disabled: false }, [Validators.required])
    });
  }

  onDeleteWorker(id: number) {
    this.deleteWorker.emit(id);
  }

  onChangeName() {
    this.flag=false;
  }

  onConfirmName(id: number) {
    this.workers[this.workers.findIndex((worker) => worker.id === id)].name = this.name;
    this.workers[this.workers.findIndex((worker) => worker.id === id)].surname = this.surname;
    this.workers[this.workers.findIndex((worker) => worker.id === id)].phone = `+7${this.phone}`;
    this.changeWorker.emit(this.surname);
    this.flag=true;
  }
}
