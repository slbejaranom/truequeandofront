import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropuestasHechasComponent } from './propuestas-hechas.component';

describe('PropuestasHechasComponent', () => {
  let component: PropuestasHechasComponent;
  let fixture: ComponentFixture<PropuestasHechasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropuestasHechasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropuestasHechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
