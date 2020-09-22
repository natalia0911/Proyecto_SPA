import { unescape } from 'querystring';

//Un poquito de sintax sugar
export class DestinoViaje{
    private selected:boolean;
    public servicios:String[];
    constructor(public nombre:String,public imagenURL:String){
        this.servicios = ['almuerzo','desayuno'];
    }

    getSelected(): boolean{
        return this.selected;
    }
    setSelected(s:boolean) {
        this.selected = s;
    }
}