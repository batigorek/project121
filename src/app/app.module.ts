import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TextMaskModule } from 'angular2-text-mask';

import { AppComponent } from './app.component';
import { TableworkersComponent } from './ui/tableworkers/tableworkers.component';
import { AddformWorkerComponent } from './ui/addform-worker/addform-worker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SearchpipePipe } from './shared/searchpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableworkersComponent,
    AddformWorkerComponent,
    SearchpipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    TextMaskModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
