import { Component, OnInit, Output } from '@angular/core';
import { MyWorker, MyWorkerType} from 'src/app/shared/worker.model';
import { EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WorkService } from 'src/app/shared/services/work.service';

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

  constructor(
    private workService: WorkService
  ) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl({ value: '', disabled: false }, [Validators.required]),
      surname: new FormControl({ value: '', disabled: false }, [Validators.required]),
      type: new FormControl({ value: '', disabled: false }, [Validators.required]),
      phone: new FormControl({ value: '', disabled: false }, [Validators.required])
    });
  }

  async onAddWorker(worker) {
    // try{
    //   await this.workService.postWorkers(this.addForm.value)
    // } catch (err) {
    //   console.log(err);
    // }
    //  worker.phone = `${worker.phone}`;
    this.addWorker.emit(this.addForm.value);
    // this.addForm.reset(); 
  }
}
