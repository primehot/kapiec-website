import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomArticleComponent } from './custom-article.component';

describe('CustomArticleComponent', () => {
  let component: CustomArticleComponent;
  let fixture: ComponentFixture<CustomArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
