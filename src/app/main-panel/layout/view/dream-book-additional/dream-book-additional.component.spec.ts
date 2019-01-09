import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamBookAdditionalComponent } from './dream-book-additional.component';

describe('DreamBookAdditionalComponent', () => {
  let component: DreamBookAdditionalComponent;
  let fixture: ComponentFixture<DreamBookAdditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamBookAdditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamBookAdditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
