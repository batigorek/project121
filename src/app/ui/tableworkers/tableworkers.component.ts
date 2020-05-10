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
    new EventEmitter<MyWorker>();

  name: string;
  surname: string;
  phone: string;
  workerForm: FormGroup;
  flag = true;
  mask = ['8', '(', /[1-9]/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/,'-', /\d/, /\d/];

  selId: number;
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

  onChangeName(id: number) {
    this.selId = id;
    this.name = this.workers[this.workers.findIndex((worker) => worker.id === id)].name;
    this.surname = this.workers[this.workers.findIndex((worker) => worker.id === id)].surname;
    this.phone = this.workers[this.workers.findIndex((worker) => worker.id === id)].phone;
    
    this.workerForm.value.name = this.name;
    this.workerForm.value.surname = this.surname;
    this.workerForm.value.phone = `${this.phone}`;
  }
  
  onConfirmName(_worker, id) {
    this.selId = undefined;
    this.workerForm.reset();
    this.changeWorker.emit({id: id, name: _worker.name, type: _worker.type, surname: _worker.surname, phone: _worker.phone })
    console.log(_worker);
  }
}
