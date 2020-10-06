import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-form-destino-viaje',
  templateUrl: './form-destino-viaje.component.html',
  styleUrls: ['./form-destino-viaje.component.scss']
})
export class FormDestinoViajeComponent implements OnInit {

  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  fg:FormGroup;

  constructor(fb:FormBuilder) { 
    this.onItemAdded = EventEmitter();
    this.fg = fb.group({
      nombre: [''],  //forms controls
      url: ['']
    });
  }

  ngOnInit(): void {}

  guardar(nombre:String,url:String):boolean{
    const d = new DestinoViaje(nombre,url);
    this.onItemAdded.emit(d);
    return false;
  }

}
