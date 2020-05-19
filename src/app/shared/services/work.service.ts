import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyWorker } from '../worker.model';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  routeApi = 'http://localhost:3000/workers';
  constructor(
    private http: HttpClient
  ) { }

  getWorkers(): Promise<any> {
    return this.http.get(this.routeApi).toPromise();
  }

  postWorkers(data: MyWorker) {
    return this.http.post(this.routeApi, data).toPromise();
  }

  deleteWorkers(id: number) {
    let file = `${this.routeApi}/${id}`;
    return this.http.delete(file).toPromise();
  }

  patchWorkers (data: MyWorker) {
    let file = `${this.routeApi}/${data.id}`;
    return this.http.patch(file, data).toPromise();
  }
}
