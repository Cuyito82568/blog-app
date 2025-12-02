import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesPorCategoria } from './publicaciones-por-categoria';

describe('PublicacionesPorCategoria', () => {
  let component: PublicacionesPorCategoria;
  let fixture: ComponentFixture<PublicacionesPorCategoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicacionesPorCategoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacionesPorCategoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
