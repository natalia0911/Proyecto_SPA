import { Component, OnInit,Input, HostBinding} from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.scss']
})
export class DestinoViajeComponent implements OnInit {

  //Variables
  
  @Input() lugar:DestinoViaje; //lugar es una variable de este objeto 
  @HostBinding('attr.class') cssClass = 'col-md-4';
  // Este hostbinding lo que hace es que al componente le pone ese valor 
  // en el css cuando se renderiza
  // aqui se hizo porque si no la tarjetita  no se acomodaba bien
  constructor() {
 
  }

  ngOnInit(): void {
    
  }

}
