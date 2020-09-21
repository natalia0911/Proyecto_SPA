import { unescape } from 'querystring';

export class DestinoViaje{
    nombre:String;
    imagenURL:String;

    constructor(n:String,u:String){
        this.nombre = n;
        this.imagenURL = u;
    }
}