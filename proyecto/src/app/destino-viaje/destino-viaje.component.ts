import { Component, OnInit,Input, HostBinding, EventEmitter, Output} from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.scss']
})
export class DestinoViajeComponent implements OnInit {

  //Variables
  
  @Input() lugar:DestinoViaje; //lugar es una variable de este objeto 
  @Input() posicion:number;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  // Este hostbinding lo que hace es que al componente le pone ese valor 
  // en el css cuando se renderiza
  // aqui se hizo porque si no la tarjetita  no se acomodaba bien
  @Output() clicked: EventEmitter<DestinoViaje>;
  //con el; output le digo que es un valor de salida
  constructor() {
    this.clicked = new EventEmitter();
  }

  ngOnInit(): void {}

  ir(){
    // es un atrib del objeto que permite disparar objetos
    // dar a conocer al componente padre, que lugar fue clickeado
    this.clicked.emit(this.lugar);
    return false;
  }
}
