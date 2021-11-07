import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeineComponent } from './seine.component';

describe('SeineComponent', () => {
  let component: SeineComponent;
  let fixture: ComponentFixture<SeineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
