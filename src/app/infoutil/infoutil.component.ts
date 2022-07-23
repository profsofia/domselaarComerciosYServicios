import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infoutil',
  templateUrl: './infoutil.component.html',
  styleUrls: ['./infoutil.component.css']
})
export class InfoutilComponent implements OnInit {
  infoUtil: any[]=[
    {nombre:"Comisaría", imagenes:"https://res.cloudinary.com/sofiaschenone/image/upload/v1658530903/Domselaar/IMG-20220721-WA0017_qiporr.jpg",telver:"02225491237",telefono:"https://wa.me/5492225491237", dire:"Manuel Belgrano", direGoogle:"https://goo.gl/maps/1wZq1CuqQEJbw1uQ9"},

    {nombre:"Sala de Primeros Auxilios Santa Clara",imagenes:"https://res.cloudinary.com/sofiaschenone/image/upload/v1658530909/Domselaar/IMG-20220721-WA0000_zrv7lt.jpg",telver:"02225491196",telefono:"https://wa.me/5492225491196", dire:"9 de Julio", direGoogle:"https://goo.gl/maps/SVRwEmz14FmHUYLE7"},

    {nombre:"Capilla Santa Clara de Asis" ,imagenes:"https://res.cloudinary.com/sofiaschenone/image/upload/v1658530500/Domselaar/IMG-20220721-WA0014_mz9tea.jpg", telver:"02225423346",telefono:"https://wa.me/549112225423346", dire:"Alfonsina Storni", direGoogle:"https://goo.gl/maps/9K2htXVrNGnbmVJR9"},

    {nombre: "Delegación Municipal", imagenes:"https://res.cloudinary.com/sofiaschenone/image/upload/v1658530899/Domselaar/IMG-20220721-WA0018_mwfb1h.jpg" , dire:"9 de Julio 201", direGoogle:"https://goo.gl/maps/y3giToZo8eF11V4P9"},

    {nombre:"Club Defensores de Domselaar",imagenes:"https://res.cloudinary.com/sofiaschenone/image/upload/v1658540572/Domselaar/domseclub_slzxqs.png",telefono: "02223 43-2455", dire:"Sgto. Cabral y Libertad", direGoogle:"https://goo.gl/maps/nsfLqiyV5NQPABQP9"},

    {nombre:"Farmacia Pesenti" , telefono:"https://wa.me/549112225491104", dire:"Av. San Martín 152", direGoogle:"https://goo.gl/maps/RrxYu7VKszmpNzYh8", imagenes:"https://res.cloudinary.com/sofiaschenone/image/upload/v1658535916/Domselaar/farmacia_nc8h9q.jpg"},

    {nombre:"Biblioteca Popular Francisco L. Laguzzi", imagenes:"https://res.cloudinary.com/sofiaschenone/image/upload/v1658539170/Domselaar/biblio_inkqve.jpg", dire:"Av. San Martín", direGoogle:"https://goo.gl/maps/e6ATGgXUVCyyc51e9"},


    {nombre:"Escuela Primaria E.P. N° 4",telefono: "https://wa.me/5492225491156", dire:"Belgrano y Mitre", direGoogle:"https://goo.gl/maps/NforTgyt5BkATCqy5", telver:"02225491156",imagenes:"https://res.cloudinary.com/sofiaschenone/image/upload/v1658539030/Domselaar/escuela_yzceqt.jpg"},
    {nombre:"Iglesia Evangélica Asamblea de Dios" , telefono:"https://wa.me/5492224539432", dire:"Juan B. Justo y Manuel Belgrano", direGoogle:"https://goo.gl/maps/J1ggS751Lc55ZWX7A",telver:"02224539432", imagenes:"https://res.cloudinary.com/sofiaschenone/image/upload/v1658540785/Domselaar/iglesiaevange_dxep39.jpg"},
    {nombre:"E.E.S. N°6", direGoogle:"https://goo.gl/maps/C4NdMRCrfwtH9g8ZA",dire:"Antártida Aregentina y Sargento Cabral", imagenes:"https://res.cloudinary.com/sofiaschenone/image/upload/v1658541191/Domselaar/secun_xuqksf.png"},
    {nombre:"Escuela Rural N° 10 Biocca", imagenes:"https://res.cloudinary.com/sofiaschenone/image/upload/v1658541374/Domselaar/rural_xupmib.png", direGoogle:"https://goo.gl/maps/w9bGjTe5ETY21mYb8", dire:"Profesor De Luccas"},

    {nombre:"Bomberos Voluntarios San Vicente Destacamento No. 2 Domselaar", dire:"Teniente Origone 130", direGoogle:"https://goo.gl/maps/ZSxdSvwCUCjrAdpJ6" },
    {nombre:"Refugio de animales"},
    {nombre:"Centro de Jubilados Esfuerzo y Voluntad", dire:"Ameghino 33"},
    {nombre:"El fortín"},
    {nombre:"Cajero Automático" , dire:"9 de Julio", direGoogle:"https://goo.gl/maps/nH3w3tp3jBEb3ZWR6"},
    {nombre:"Rapipago", dire:"Lavalle 592", direGoogle:"https://goo.gl/maps/NforTgyt5BkATCqy5", imagenes:"https://res.cloudinary.com/sofiaschenone/image/upload/v1658542439/Domselaar/rapi_c40sl2.jpg"},
    {nombre:"ANSES", telefono: "", dire:"9 de Julio 283", direGoogle:"https://goo.gl/maps/jbbNuZLpEeRkLBiB8"},
    {nombre:"Jardín de Infantes N° 903", telefono: "https://wa.me/549112225491265", dire:"Bartolomé Mitre 162", direGoogle:"https://goo.gl/maps/vy8BSK9vAeeuG9jw6", imagenes:"https://res.cloudinary.com/sofiaschenone/image/upload/v1658542286/Domselaar/jardin_eed9sm.png"},
    {nombre:"Santa Ines Fabrica de Alfajores", telefono:"https://wa.me/5492223513949", direGoogle:"https://maps.app.goo.gl/Ht21jPceWkaU9AEx7", dire:"Matienzo 1055", imagenes:"https://res.cloudinary.com/sofiaschenone/image/upload/v1658541908/Domselaar/alfajores_l9pnp4.jpg"}
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