import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableworkersComponent } from './tableworkers.component';

describe('TableworkersComponent', () => {
  let component: TableworkersComponent;
  let fixture: ComponentFixture<TableworkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableworkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableworkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
