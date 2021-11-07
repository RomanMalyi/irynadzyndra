import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerravitaComponent } from './terravita.component';

describe('TerravitaComponent', () => {
  let component: TerravitaComponent;
  let fixture: ComponentFixture<TerravitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerravitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerravitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
