import { Component, OnInit, Output } from '@angular/core';
import { MyWorker, MyWorkerType} from 'src/app/shared/worker.model';
import { EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
phone: string;

mask = ['8', '(', /[1-9]/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/,'-', /\d/, /\d/];

@Output() addWorker = 
new EventEmitter<MyWorker>()
  addForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl({ value: '', disabled: false }, [Validators.required]),
      surname: new FormControl({ value: '', disabled: false }, [Validators.required]),
      type: new FormControl({ value: '', disabled: false }, [Validators.required]),
      phone: new FormControl({ value: '', disabled: false }, [Validators.required])
    });
  }

  onAddWorker(worker) {
     worker.phone = `${worker.phone}`;
    this.addWorker.emit(worker);
    this.addForm.reset();
  }
}
