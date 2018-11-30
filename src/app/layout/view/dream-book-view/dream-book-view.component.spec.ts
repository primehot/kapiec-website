import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamBookViewComponent } from './dream-book-view.component';

describe('DreamBookViewComponent', () => {
  let component: DreamBookViewComponent;
  let fixture: ComponentFixture<DreamBookViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamBookViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamBookViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
