import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DistanciaComponent } from './distancia.component';

describe('DistanciaComponent', () => {
  let component: DistanciaComponent;
  let fixture: ComponentFixture<DistanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistanciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate distance correctly', () => {
    component.formulario.setValue({ x1: 2, y1: 1, x2: 5, y2: 5 });
    component.calcularDistancia();
    expect(component.distancia).toEqual(5);
  });
});
