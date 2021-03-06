import { Component, ViewChild } from '@angular/core';
import { IonSearchbar, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {

  public lista;

   // Executa o construtor "inicializar".
  constructor() {
    this.inicializar();
  }

  // O constructor "inicializar" chama o objeto "lista" onde inserimos os dados de cada pessoas.
  inicializar(){

    this.lista = [
      {nome: 'Pedro da silva', cidade: 'pelotas', foto: 'assets/images/img1.jpg'},
      {nome: 'Victor Antoniazzi', cidade: 'Turuçu', foto: 'assets/images/img2.png'},
      {nome: 'Eduardo Magalhães', cidade: 'Cristal', foto: 'assets/images/img3.png'},
      {nome: 'Igor Cunha', cidade: 'Arroio Grande', foto: 'assets/images/img4.png'},
      {nome: 'Roberto Carlos dos Santos', cidade: 'Camaquã', foto: 'assets/images/img5.png'}
    ];
  }

  // Em cada evento (no caso digitacao) na página home é chamado o constructor "buscar".
  buscar(ev: any)  {
    this.inicializar();

    const val = ev.target.value;

    if (val && val.trim() !== '') {
      this.lista = this.lista.filter((item) => (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1));
    }
  }

}




