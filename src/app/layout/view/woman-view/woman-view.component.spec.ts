import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanViewComponent } from './woman-view.component';

describe('WomanViewComponent', () => {
  let component: WomanViewComponent;
  let fixture: ComponentFixture<WomanViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomanViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
