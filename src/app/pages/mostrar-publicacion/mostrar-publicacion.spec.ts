import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPublicacion } from './mostrar-publicacion';

describe('MostrarPublicacion', () => {
  let component: MostrarPublicacion;
  let fixture: ComponentFixture<MostrarPublicacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarPublicacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarPublicacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
