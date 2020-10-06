import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.scss']
})
export class ListaDestinosComponent implements OnInit {

  destinos: DestinoViaje [];
  @Output() onItemAdded: EventEmitter<DestinoViaje>;

  constructor(private destinosApiClient:DestinosApiClient) {
    this.destinos = [];
    this.onItemAdded = EventEmitter();
   }

  ngOnInit(): void {
  }

  //Retorna false para que no se refresque (no entendí del todo)
  agregado(d:DestinoViaje):boolean{
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
    console.log(this.destinos);
    return false;
  }

/** Esta funcion marca todos como selected false y el que le pasan que es d lo pone en true */
  elegido(d:DestinoViaje){
    this.destinos.forEach(function(x){x.setSelected(false); })
    d.setSelected(true);
  }
}
