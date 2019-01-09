import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAdditionalComponent } from './table-additional.component';

describe('TableAdditionalComponent', () => {
  let component: TableAdditionalComponent;
  let fixture: ComponentFixture<TableAdditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAdditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAdditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
