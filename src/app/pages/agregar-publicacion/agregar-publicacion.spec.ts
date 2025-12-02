import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPublicacion } from './agregar-publicacion';

describe('AgregarPublicacion', () => {
  let component: AgregarPublicacion;
  let fixture: ComponentFixture<AgregarPublicacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarPublicacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarPublicacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
