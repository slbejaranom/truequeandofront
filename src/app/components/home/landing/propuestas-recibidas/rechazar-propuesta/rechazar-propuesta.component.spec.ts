import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechazarPropuestaComponent } from './rechazar-propuesta.component';

describe('RechazarPropuestaComponent', () => {
  let component: RechazarPropuestaComponent;
  let fixture: ComponentFixture<RechazarPropuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechazarPropuestaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechazarPropuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
