import { Component, OnInit } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.scss']
})
export class ListaDestinosComponent implements OnInit {

  destinos: DestinoViaje [];
  constructor() {
    this.destinos = [];
   }

  ngOnInit(): void {
  }

  //Retorna false para que no se refresque (no entendí del todo)
  guardar(nombre:String,url:String):boolean{
    this.destinos.push(new DestinoViaje(nombre,url));
    console.log(this.destinos);
    return false;
  }
/** Esta funcion marca todos como selected false y el que le pasan que es d lo pone en true */
  elegido(d:DestinoViaje){
    this.destinos.forEach(function(x){x.setSelected(false); })
    d.setSelected(true);
  }
}
