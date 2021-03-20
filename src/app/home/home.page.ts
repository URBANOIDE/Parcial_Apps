import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  pantalla_resultado = 0;
  memoria = 0;
  estado = 'number';
  operacion = '+';
  decimal = false;
  decimales = 0;

  constructor() {}

  numero(n: number) {
    switch (this.estado) {
      case 'number':
        if (this.decimal) {
          this.decimales++;
          this.pantalla_resultado = this.pantalla_resultado + n * Math.pow(10, -this.decimales);
        } else {
          this.pantalla_resultado = this.pantalla_resultado + n;
        }
        break;
      case 'operacion':
        this.pantalla_resultado = n;
        this.estado = 'number';
        break;
      case 'result':
        this.memoria = 0;
        this.pantalla_resultado = n;
        this.estado = 'number';
    }
  }

  Operador(o: string) {
    this.calcular();
    this.operacion = o;
    //this.memoria = this.pantalla_resultado;
    this.estado = 'operacion';
  }
  //calcular = mostrar en el pantalla_resultado
  calcular() {
    this.pantalla_resultado = eval('' + this.memoria + this.operacion + '(' + this.pantalla_resultado + ')');
    this.memoria = 0;
    this.estado = 'result';
    this.operacion = '+';
    this.decimal = false;
    this.decimales = 0;
  }
  // borrar pantalla AC
  borrarPantalla() {
    this.pantalla_resultado = 0;
    this.memoria = 0;
    this.estado = 'number';
    this.operacion = '+';
    this.decimal = false;
    this.decimales = 0;
  }

  Decimal() {
    this.decimal = true;
  }


}