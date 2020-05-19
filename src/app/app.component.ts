import { Component, OnInit } from '@angular/core';
import { MyWorker, MyWorkerType } from './shared/worker.model';
import { WorkService } from './shared/services/work.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Список cотрудников';
  workers: MyWorker[];
  myWorkerType = MyWorkerType;

  constructor(
    private workService: WorkService
  ) {

  }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    try {
      this.workers = await this.workService.getWorkers();
    } catch (err) {
      console.log(err);
    }
  }

  getByType(type: number) {
    return this.workers.filter(worker =>
      worker.type === type);
  }

  async onDeleteWorker(id: number) {
    try {
      await this.workService.deleteWorkers(id);
    } catch (err) {
      console.log(err)
    } finally {
      this.getData();
    }
    // let index = this.workers.findIndex((worker) =>
    //   worker.id === id)
    // if (index !== -1) {
    //   this.workers.splice(index, 1);
    // }
  }

  async onChangeName(worker: MyWorker) {
    try {
      await this.workService.patchWorkers(worker);
    } catch (err) {
      console.log(err)
    } finally {
      this.getData();
    }
    // console.log(worker);
    // for (let item of this.workers) {
    //   if (item.id === worker.id) {
    //     item.name = worker.name;
    //     item.surname = worker.surname;
    //     item.phone = worker.phone;
    //   }
    // }
  }

  async onAddWorker(event: MyWorker) {
    try {
      await this.workService.postWorkers(event);
    } catch (err) {
      console.log(err);
    } finally {
      this.getData();
    }

    // let id = this.workers.length > 0 ? this.workers[this.workers.length - 1].id + 1 : 0;
    // worker.id = id;
    // this.workers.push(worker);
    // console.log(worker);
  }

}
