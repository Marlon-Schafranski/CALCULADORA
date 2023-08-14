import { Component } from '@angular/core';
import { AlertController, SelectValueAccessor } from '@ionic/angular';
import { switchAll } from 'rxjs';
import { Calculo } from 'src/app/model/entities/Calculo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public numberOne!: number
  public numberTwo!: number
  public operadores!: number
  public numerosCalculados: Calculo[] = []
  public selecionar!: string
  public resultado!: any

  constructor(private alertController: AlertController, private alertDivisao: AlertController, private alertResultado: AlertController) {
  }

  logicaOperacional() {
    
    if (this.numberOne !== null && this.numberTwo !== null) {

      if (this.numberTwo === 0 && this.selecionar === 'divisao') {
        this.Divisao('Erro ao calcular', 'Não deve dividir por zero');
      }
      let conta: Calculo = new Calculo(this.numberOne, this.numberTwo);
      conta.operadores = this.operadores
      this.numerosCalculados.push(conta)

      if (this.selecionar === '0') {

        this.resultado = this.numberOne + this.numberTwo;
      } else if (this.selecionar === '1') {

        this.resultado = this.numberOne - this.numberTwo;
      } else if (this.selecionar === '2') {

        this.resultado = this.numberOne * this.numberTwo;
      } else if (this.selecionar === '3') {

        this.resultado = this.numberOne / this.numberTwo;
      } else {

        this.resultado = 0;
      }

      this.Resultado(this.resultado)
    }

    else {
      this.Alert('Erro: ', 'Todos os campos devem ser preenchidos')
    }

  }

  async Divisao(subheader: string, message: string) {
    const alert = await this.alertDivisao.create({
      header: 'Calculadora',
      subHeader: 'Erro ao tentar calcular',
      message: 'Não deve dividir por zero',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async Alert(subheader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Calculadora',
      subHeader: 'Erro ao tentar calcular',
      message: 'Todos os campos devem ser preenchido',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async Resultado(subheader: number) {
    const alert = await this.alertResultado.create({
      header: 'Calculadora',
      message: `O resultado da operação é ${this.resultado}`,
      buttons: ['OK'],
    });

    await alert.present();
  }
}


