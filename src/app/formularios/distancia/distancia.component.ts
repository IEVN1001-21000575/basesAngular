import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class DistanciaComponent implements OnInit {
  formulario!: FormGroup;
  distancia: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      x1: new FormControl('', Validators.required),
      y1: new FormControl('', Validators.required),
      x2: new FormControl('', Validators.required),
      y2: new FormControl('', Validators.required),
    });
  }

  calcularDistancia(): void {
    const x1 = this.formulario.get('x1')?.value;
    const y1 = this.formulario.get('y1')?.value;
    const x2 = this.formulario.get('x2')?.value;
    const y2 = this.formulario.get('y2')?.value;

    this.distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }
}
