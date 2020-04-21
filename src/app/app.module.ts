import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableworkersComponent } from './ui/tableworkers/tableworkers.component';
import { AddformWorkerComponent } from './ui/addform-worker/addform-worker.component';

@NgModule({
  declarations: [
    AppComponent,
    TableworkersComponent,
    AddformWorkerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
