import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropuestasRecibidasComponent } from './propuestas-recibidas.component';

describe('PropuestasRecibidasComponent', () => {
  let component: PropuestasRecibidasComponent;
  let fixture: ComponentFixture<PropuestasRecibidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropuestasRecibidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropuestasRecibidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
