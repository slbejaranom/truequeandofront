import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceptarPropuestaComponent } from './aceptar-propuesta.component';

describe('AceptarPropuestaComponent', () => {
  let component: AceptarPropuestaComponent;
  let fixture: ComponentFixture<AceptarPropuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AceptarPropuestaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AceptarPropuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
