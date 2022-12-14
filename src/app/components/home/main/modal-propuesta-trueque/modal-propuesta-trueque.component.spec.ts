import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPropuestaTruequeComponent } from './modal-propuesta-trueque.component';

describe('ModalPropuestaTruequeComponent', () => {
  let component: ModalPropuestaTruequeComponent;
  let fixture: ComponentFixture<ModalPropuestaTruequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPropuestaTruequeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPropuestaTruequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
