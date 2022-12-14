import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOperadorLogisticoComponent } from './main-operador-logistico.component';

describe('MainOperadorLogisticoComponent', () => {
  let component: MainOperadorLogisticoComponent;
  let fixture: ComponentFixture<MainOperadorLogisticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainOperadorLogisticoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainOperadorLogisticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
