import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincesComponent } from './princes.component';

describe('PrincesComponent', () => {
  let component: PrincesComponent;
  let fixture: ComponentFixture<PrincesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
