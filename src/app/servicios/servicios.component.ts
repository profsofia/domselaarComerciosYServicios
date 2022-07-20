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
        { name: 'javier', tel: '12212', dire: 'una direccion' }
      ],
    },
    {
      nombre: 'Electricista',
      datos: [
        { name: 'Matías Pereyra (Moroco)', tel: 'https://wa.me/549112224463920' }
      ],
    },
    {
      nombre: 'Pocero',
      datos: [
        { name: 'javier5', tel: '12212', dire: 'una direccion' },
      ],
    },
    { nombre: 'Jardinero', telefono: 'https//' },
    { nombre: 'Gasista', telefono: 'https//' },
    { nombre: 'Mecánico', datos: [
      { name: 'Cristian Corigliano (Muy Recomendado)',img:"https://res.cloudinary.com/sofiaschenone/image/upload/v1658280763/Domselaar/WhatsApp_Image_2022-07-19_at_3.46.05_PM_1_njhecx.jpg",dire:"La plata 462", tel: 'https://wa.me/5491140492204' }
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
      { name: 'Del Sol', tel: '', dire: 'Manuel Belgrano y Teniente Origone', direServicioEnGoogle:"https://goo.gl/maps/AqxzFqVcNyHh8cgv6"}
    ]},
    { nombre: 'Abogado', datos: [
      { name: 'Estudio Jurídico Cabral y Asociados', tel: 'https://wa.me/54911642684300', dire:'Storni 123', direServicioEnGoogle:"https://goo.gl/maps/AqxzFqVcNyHh8cgv6"}
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
