import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent implements OnInit {
  activeState: boolean[] = [true, false, false];

  listaServ: any[] = [
    {
      nombre: 'Construcciones en general',
      datos: [
        { name: 'Albañilería Javier',recomendacion:"(Muy Recomendado)", numero: '+54 9 2224 53-0472', tel:"https://wa.me/5492224530472"},
        { name: 'Albañilería Domselaar',parrafo:"(Julio Ponce)",img:"https://res.cloudinary.com/sofiaschenone/image/upload/v1658440347/Domselaar/bob_ozh1wy.jpg",dire:"Echeverría 250",numero:"11-26825874", tel: 'https://wa.me/5491126825874',direServicioEnGoogle:"https://goo.gl/maps/q8nytekz1Ps8cmwo6" },
        { name: 'Albañilería Gustavo',numero:"11-5978 3051", tel: 'https://wa.me/5491159783051' },
        { name: 'Tu Sueño Construcciones',numero:"11-3826 2843", tel: 'https://wa.me/5491138262843' },
        { name: 'Perforaciones Ramos',numero:"1166471477", tel: 'https://wa.me/5491166471477' },
        { name: 'Tierra Domselaar (Ricardo)',dire:'Chaco 485',numero:"+54 9 11 3560-4259", tel: 'https://wa.me/5491135604259', img:"https://res.cloudinary.com/sofiaschenone/image/upload/v1659473979/Domselaar/tierrasdomse_jokws9.jpg" }
      ],
    },
    {
      nombre: 'Electricista',
      datos: [
        { name: 'Matías Pereyra (Moroco)',numero:"0222-4463920", tel: 'https://wa.me/5492224463920' }
      ],
    },

    //{ nombre: 'Jardinero', telefono: 'https//' },
    { nombre: 'Gasista', datos: [
      { name: 'Domselaar Gas',numero: "11 6512 8478", tel: 'https://wa.me/5491165128478'}]},



    { nombre: 'Mecánico', datos: [
      { name: 'Cristian Corigliano',recomendacion:"(Muy Recomendado)",img:"https://res.cloudinary.com/sofiaschenone/image/upload/v1658280763/Domselaar/WhatsApp_Image_2022-07-19_at_3.46.05_PM_1_njhecx.jpg",dire:"La plata 462", tel: 'https://wa.me/5491140492204',direServicioEnGoogle:"https://goo.gl/maps/zcFPJAbDkcMWPdv96" },
      { name: "Reparación de frenos y embragues Domselaar",dire:"Ruta 210 Km 56.200",numero:"011 4960-6170" }
    ]},
    //{ nombre: 'Bicicletero', telefono: 'https//' },
    { nombre: 'Refrigeración', datos: [
      { name: 'Refrigeración Daniel G', tel: 'https://wa.me/5491128422070', numero:"11 2842 2070" },
      { name: 'Refrigeración Moreyra', tel: 'https://wa.me/5491161985915', numero:"11 6198 5915" },
      { name: 'Refrigeración Bajo Cero', tel: 'https://wa.me/5491124418553', numero:"11 2441 8553", dire:"Av San Martín y Origone" },
      { name: 'Tango Refrigeración', tel: 'https://wa.me/5491126508631', numero:"11 2650 8631", dire:"Entre Ríos 75" }
    ]},
    //{ nombre: 'Carpintero', telefono: 'https//' },


    { nombre: 'Herrero',  datos: [
      { name: 'Herrería Moncho',dire:"Ruta 210km 55", numero:"1154155785",tel: 'https://wa.me/5491154155785' },
    {name:"Fabian Ponzo", numero:"1138807867", tel:"https://wa.me/5491138807867"},
    {name:"Herrería Gustavo", numero:"222 3429 781", tel:"https://wa.me/5492223429781"}
    ]},



    //{ nombre: 'Plomero', telefono: 'https//' },
    //{ nombre: 'Ceramísta', telefono: 'https//' },
    //{ nombre: 'Pintor', telefono: 'https//' },


    { nombre: 'Profesor particular',   datos: [
      { name: 'Alejandro De Luccas',dire:"Entr Ríos s/n", numero:"1166111507",tel: 'https://wa.me/5491166111507', parrafo:"Matemática, Química y Física"},
      { name: 'Fernanda',parrafo:"Instituto de inglés",dire:"Rivadavia 118", numero:"11 2185 9882",tel: 'https://wa.me/5491121859882'}
    ]},
    // { nombre: 'Masajista', telefono: 'https//' },
    //{ nombre: 'Empleada doméstica', telefono: 'https//' },
    //{ nombre: 'Niñera', telefono: 'https//' },


    { nombre: 'Veterinario',datos: [
      {name:"Joel", numero:" 11 6670 5067", tel:"https://wa.me/5491166705067"}
    ]},

    //cerrajería
    { nombre: 'Cerrajería',datos: [
      {name:"Cerrajería Pablo", numero:"011 48701803", tel:"https://wa.me/5491148701803"}
    ]},


    { nombre: 'Estudio Jurídico y Aseguradora', datos: [
      { name: 'Marcela Liliana Ramírez', parrafo:"Abogada especialista en cuestiones de Familia.", numero:"11-57956492",tel:"https://wa.me/5491157956492", dire:'Calle Córdoba 225', direServicioEnGoogle:"https://goo.gl/maps/LHnC5ryAZ2tW3dAU6"},
      { name: 'Estudio Jurídico Cabral y Asociados', numero:"11-6426-84300",tel:"https://wa.me/54911642684300", dire:'Storni 123', direServicioEnGoogle:"https://goo.gl/maps/AqxzFqVcNyHh8cgv6"},
      { name: 'Estudio Jurídico Curas, Antoniszyn & Asociados', numero:"11-5751 9164",tel:"https://wa.me/5491157519164"},
      { name: 'Estudio Integral Mozotegui y Palome', numero:"11 4031 2593",tel:"https://wa.me/5491140312593"},
      { name: 'Seguros Protego',parrafo:"Luciano Alfonzo Garro", numero:"11 3330 4659",tel:"https://wa.me/5491133304659", dire:"Teniente Origone 245", img:"https://res.cloudinary.com/sofiaschenone/image/upload/v1659549426/Domselaar/seguro_kalv7g.jpg"}
    ]},


    { nombre: 'Reparaciones de PC', datos: [
      { name: 'Servicio Técnico', parrafo:"Domselaar net", numero:"11 5052 4885",tel:"https://wa.me/5491150524885", dire:'Av San Martín'}
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
  toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
}
}
