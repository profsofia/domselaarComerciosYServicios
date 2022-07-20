import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infoutil',
  templateUrl: './infoutil.component.html',
  styleUrls: ['./infoutil.component.css']
})
export class InfoutilComponent implements OnInit {
  infoUtil: any[]=[
    {nombre:"Capilla Santa Clara de Asis" , telefono:"https://wa.me/549112225423346", dire:"Alfonsina Storni", direGoogle:"https://goo.gl/maps/9K2htXVrNGnbmVJR9"},
    {nombre:"Iglesia Evangélica Asamblea de Dios" , telefono:"https://wa.me/549112224539432", dire:"Juan B. Justo y Manuel Belgrano", direGoogle:"https://goo.gl/maps/J1ggS751Lc55ZWX7A"},
    {nombre: "Delegación Municipal", },
    {nombre:"Farmacia" , telefono:"https://wa.me/549112225491104", dire:"Av. San Martín 152", direGoogle:"https://goo.gl/maps/RrxYu7VKszmpNzYh8"},
    {nombre:"Comisaría"},
    {nombre:"Centro de atención primaria"},
    {nombre:"Biblioteca"},
    {nombre:"Escuela Primaria E.P. N° 4",telefono: "https://wa.me/549112225491156", dire:"Belgrano y Mitre", direGoogle:"https://goo.gl/maps/NforTgyt5BkATCqy5"},
    {nombre:"Escuela Secundaria"},
    {nombre:"Escuela Rural"},
    {nombre:"Bomberos"},
    {nombre:"Refugio de animales"},
    {nombre:"Centro de Jubilados Esfuerzo y Voluntad", dire:"Ameghino 33"},
    {nombre:"El fortín"},
    {nombre:"Club Defensores de Domselaar",telefono: "", dire:"Sgto. Cabral y Libertad", direGoogle:"https://goo.gl/maps/9r7o7SLVBHd5C2AeA"},
    {nombre:"Cajero Automático"},
    {nombre:"Rapipago", telefono: "", dire:"Lavalle 592", direGoogle:"https://goo.gl/maps/NforTgyt5BkATCqy5"},
    {nombre:"ANSES", telefono: "", dire:"9 de Julio 283", direGoogle:"https://goo.gl/maps/jbbNuZLpEeRkLBiB8"},
    {nombre:"Jardín de Infantes N° 903", telefono: "https://wa.me/549112225491265", dire:"Bartolomé Mitre 162", direGoogle:"https://goo.gl/maps/jbbNuZLpEeRkLBiB8"},
    {nombre:"Santa Ines Fabrica de Alfajores", telefono:"https://wa.me/5492223513949", direGoogle:"https://maps.app.goo.gl/Ht21jPceWkaU9AEx7", dire:"Matienzo 1055"}
  ];
  infoUtilOrdenada: any[]=[];

  constructor() { }

  ngOnInit(): void {
    this.infoUtilOrdenada = this.infoUtil.sort((a, b) => {
      if (a.nombreComercio < b.nombreComercio) {
        return -1;
      } else if (a.nombreComercio > b.nombreComercio) {
        return 1;
      } else {
        return 0;
      }
    });
    this.infoUtilOrdenada;
  }

}
