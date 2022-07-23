import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent implements OnInit {
  listaServ: any[] = [
    {
      nombre: 'Albañil',
      datos: [
        { name: 'Javier',recomendacion:"(Muy Recomendado)", numero: '+54 9 2224 53-0472', tel:"https://wa.me/5492224530472"},
        { name: 'Albañilería Domselaar',recomendacion:"(Julio Ponce)",img:"https://res.cloudinary.com/sofiaschenone/image/upload/v1658440347/Domselaar/bob_ozh1wy.jpg",dire:"Echeverría 250",numero:"11-26825874", tel: 'https://wa.me/5491126825874',direServicioEnGoogle:"https://goo.gl/maps/q8nytekz1Ps8cmwo6" }
      ],
    },
    {
      nombre: 'Electricista',
      datos: [
        { name: 'Matías Pereyra (Moroco)',numero:"0222-4463920", tel: 'https://wa.me/5492224463920' }
      ],
    },
    {
      nombre: 'Pocero',
      datos: [
        { name: 'Javier',recomendacion:"(Muy Recomendado)", numero: '+54 9 2224 53-0472'},
      ],
    },
    { nombre: 'Jardinero', telefono: 'https//' },
    { nombre: 'Gasista', telefono: 'https//' },
    { nombre: 'Mecánico', datos: [
      { name: 'Cristian Corigliano',recomendacion:"(Muy Recomendado)",img:"https://res.cloudinary.com/sofiaschenone/image/upload/v1658280763/Domselaar/WhatsApp_Image_2022-07-19_at_3.46.05_PM_1_njhecx.jpg",dire:"La plata 462", tel: 'https://wa.me/5491140492204',direServicioEnGoogle:"https://goo.gl/maps/zcFPJAbDkcMWPdv96" }
    ]},
    { nombre: 'Bicicletero', telefono: 'https//' },
    { nombre: 'Refrigeración', datos: [
      { name: 'Refrigeración Daniel G', tel: 'https://wa.me/5491128422070' }
    ]},
    { nombre: 'Carpintero', telefono: 'https//' },
    { nombre: 'Herrero', telefono: 'https//' },
    { nombre: 'Plomero', telefono: 'https//' },
    { nombre: 'Ceramísta', telefono: 'https//' },
    { nombre: 'Pintor', telefono: 'https//' },
    { nombre: 'Profesor particular', telefono: 'https//' },
    { nombre: 'Masajista', telefono: 'https//' },
    { nombre: 'Empleada doméstica', telefono: 'https//' },
    { nombre: 'Niñera', telefono: 'https//' },
    { nombre: 'Veterinario',datos: [
      { name: 'Del Sol', tel: '', dire: 'Manuel Belgrano',text:"y Teniente Origone", direServicioEnGoogle:"https://goo.gl/maps/AqxzFqVcNyHh8cgv6"}
    ]},
    { nombre: 'Abogado', datos: [
      { name: 'Marcela Liliana Ramírez', recomendacion:"Abogada especialista en cuestiones de Familia.", numero:"11-57956492",tel:"https://wa.me/5491157956492", dire:'Calle Córdoba 225', direServicioEnGoogle:"https://goo.gl/maps/LHnC5ryAZ2tW3dAU6"},
      { name: 'Estudio Jurídico Cabral y Asociados', numero:"11-6426-84300",tel:"https://wa.me/54911642684300", dire:'Storni 123', direServicioEnGoogle:"https://goo.gl/maps/AqxzFqVcNyHh8cgv6"}
    ]},

  ];
  valoresOrdenados: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.valoresOrdenados = this.listaServ.sort((a, b) => {
      if (a.nombre < b.nombre) {
        return -1;
      } else if (a.nombre > b.nombre) {
        return 1;
      } else {
        return 0;
      }
    });
    this.valoresOrdenados;
  }
}
