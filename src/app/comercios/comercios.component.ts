import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comercios',
  templateUrl: './comercios.component.html',
  styleUrls: ['./comercios.component.css']
})
export class ComerciosComponent implements OnInit {
  comercios: any[] =[
    {nombreComercio:"Remís",
    datosComercio:[
    { nameComer: 'Remís Domselaar', tel:"112224442977", telComer: 'https://wa.me/5492224442977', direComercio: "https://goo.gl/maps/PaXZ8mKTKJA21VCy5" }]},

    {nombreComercio:"Almacenes y Supermercados", datosComercio:
    [{nameComer:"El Diluvio",direComercio:"San Martín y Teniente Origone",direComercioGoogle:"https://maps.app.goo.gl/uf7GsHJCUZsatSzq5"},
    {nameComer:"Supermercado Wang",direComercio:"Av San Martín y Mitre",direComercioGoogle:"https://maps.app.goo.gl/WbXE3tbdeGRtnXtv9"},
    {nameComer:"Las Nenas",direComercio:"Benjamín Matienzo",telComer:"https://wa.me/5491132891559", tel:"011 3289-1559",direComercioGoogle:"https://maps.app.goo.gl/dFJ1t96TdUawKs9AA"}
  ]},

    {nombreComercio:"Parrilla", datosComercio:
    [{nameComer:"La Parri Ya",direComercio:"F. Ameghino",direComercioGoogle:"https://goo.gl/maps/r1g16MJwuPHorAPi9", telComer:"https://wa.me/5491158764301"},
    {nameComer:"La Ponderosa",direComercio:"RP210 km 58",direComercioGoogle:"https://goo.gl/maps/Rf83WjDXsi1mEdXg7", telComer:"https://wa.me/5491132655251"}
  ]},

    {nombreComercio:"Mercado mayorista", datosComercio:
    [{nameComer:"San Gerónimo",direComercio:"Ruta 210 y Pratts",telComer:"https://wa.me/5491133151845", tel:"11 3315 1845",direComercioGoogle:"https://maps.app.goo.gl/xaodGiwcpj5VkLJ98"}
  ]},


    {nombreComercio:"Forrajeria y Mascotas", datosComercio:
    [{nameComer:"Forrajería Méndez",tel:"2224496248",direComercio:"Artigas y ",text:"Teniente Origone",direComercioGoogle:"https://maps.app.goo.gl/xNmtrLhnqTST4AES6", telComer:"https://wa.me/5492224496248"},
    {nameComer:"Forrajería La Huella",direComercio:"Av San Martín 119",direComercioGoogle:"https://maps.app.goo.gl/eeMXPgesz5dPY4hY9"},
    {nameComer:"Guardería Canina Brisa",direComercio:"Echeverría 70",tel:"1168137111", telComer:"https://wa.me/5491168137111"}
  ]},


    {nombreComercio:"Farmacia",
    datosComercio:
    [{nameComer:"Pesenti",direComercio:"Av. San Martín 152",direComercioGoogle:"https://goo.gl/maps/RrxYu7VKszmpNzYh8",  tel:"2225491104"}]
  },

    {nombreComercio:"Lubricentro",  datosComercio:
    [{nameComer:"Lubricentro Sele",tel:"2223460135",direComercio:"Bartolomé Mitre",direComercioGoogle:"https://maps.app.goo.gl/L1yCUctx1pDqFS2c8", telComer:"https://wa.me/5492223460135"}] },


    {nombreComercio:"Internet y Cable",datosComercio:
    [{nameComer:"Video Cable Domselaar",direComercio:"Laprida 135",direComercioGoogle:"https://maps.app.goo.gl/NWKtJsdSLYMfpSx6A", telComer:"https://wa.me/5492225491360", tel:"02225 49-1360"}] },


    {nombreComercio:"Granja" , datosComercio:
    [{nameComer:"Vikingo Granja Natural",parrafo:"(Recomendado)",direComercio:"Nicaragua 1503",direComercioGoogle:"https://maps.app.goo.gl/MQ4GEWzrFFZiTjhg6", telComer:"https://wa.me/5491122159631", tel:"1122159631"}]},


    {nombreComercio:"Verdulería",datosComercio:
    [{nameComer:"Verdulería Domselaar 1",direComercio:"Lavalle 373",direComercioGoogle:"https://g.page/Verduleriasdomselaar?share", telComer:"https://wa.me/5491138157189", tel:"1138157189"}]},

    {nombreComercio:"Carnicería",datosComercio:
    [{nameComer:"Alan",direComercio:"Avenida San Martín y Mitre",direComercioGoogle:"https://goo.gl/maps/j7S3UDrMPH6k7y6h7", telComer:"https://wa.me/5491158784335", tel:"1158784335"},
    {nameComer:"Carniceria Domselaar",direComercio:"Belgrano 53",direComercioGoogle:"https://goo.gl/maps/VpGuncnJ6wPb8NXr9"}

  ]},


    {nombreComercio:"Bicicletería"},

    {nombreComercio:"Perfumería y Artículos de limpieza",datosComercio:[{nameComer:"Las Lajas",direComercio:"Bartolomé Mitre 428",direComercioGoogle:"https://maps.app.goo.gl/fuRc5Uvz86LdiodN9", telComer:"https://wa.me/5492225402138", tel:"02225 40-2138"}] },


    {nombreComercio:"Calzado e Indumentaria",datosComercio:[{nameComer:"Peperina Indumentaria Unisex",direComercio:"Av San Martín 332",direComercioGoogle:"https://maps.app.goo.gl/MDvpAd27PNmL9G9XA", telComer:"https://wa.me/5491150233396", tel:"01150233396"}]},


    {nombreComercio:"Vivero", datosComercio:[{nameComer:"Vivero Bell Giardino",direComercio:"Alfonsina Storni y Prats",direComercioGoogle:"https://goo.gl/maps/Lv5n3eNWp4FKqQfe9", telComer:"https://wa.me/5491150133254", tel:"1150133254"},

    {nameComer:"Macetas Villalba Domselaar",direComercio:"Chacabuco 846",direComercioGoogle:"https://goo.gl/maps/gY7P8a9YH9Ygbwcw8", telComer:"https://wa.me/5491150368315", tel:"11 5036 8315"},

    {nameComer:"Vivero El Tano Bondiola",direComercio:"Lavalle",direComercioGoogle:"https://goo.gl/maps/SSqLPwEYNcSNepAE9", telComer:"https://wa.me/5491127433116", tel:"1127433116"}
  ]},


    {nombreComercio:"Librería y Regalería",  datosComercio:[{nameComer:"Regalería Alan",direComercio:"9 de Julio 112",direComercioGoogle:"https://maps.app.goo.gl/Gu8Lz1JdrAvKpktW9", telComer:"https://wa.me/5492223461628", tel:"02223 46-1628"}]},


    {nombreComercio:"Bazar", datosComercio:[{nameComer:"Regalería Alan",direComercio:"9 de Julio 112",direComercioGoogle:"https://maps.app.goo.gl/Gu8Lz1JdrAvKpktW9", telComer:"https://wa.me/5492223461628", tel:"02223 46-1628"}]},



    {nombreComercio:"Ferretería", datosComercio:[{nameComer:"La Plaza",direComercio:"Manuel Belgrano y Teniente Origone",direComercioGoogle:"https://goo.gl/maps/bQrGf8mFhTnyNy968", telComer:"https://wa.me/5492224536419", tel:"2224536419"},{
      nameComer:"La Barrera",direComercio:"Teniente Origone y 9 de Julio",direComercioGoogle:"https://goo.gl/maps/rAcRHtLAeNmPMaqF7"
    },
    {nameComer:"Electricidad Domselaar.",parrafo:" Mercado de Materiales(Recomendado)",direComercio:"Juan B Justo 134",direComercioGoogle:"https://maps.app.goo.gl/xdYy5TXy1MJLxyyf8", telComer:"https://wa.me/5492223671709", tel:"2223671709"},

    {nameComer:"Reparaciones MV",parrafo:"(Máquinas dos tiempos)",direComercio:"Laprida 160",direComercioGoogle:"https://goo.gl/maps/YqqZJ2wuNNbYzK4w7", telComer:"https://wa.me/5492225519312", tel:"02225519312"}

  ]},
    {nombreComercio:"Cerámica",datosComercio:[{nameComer:"DOMcerámicos",direComercio:"Belgrano Entre Mitre y Sarmiento",direComercioGoogle:"https://goo.gl/maps/RZ5HwkjAuc9JMq2A6", telComer:"https://wa.me/5491132710310", tel:"1132710310"}] },


    {nombreComercio:"Pollería"},

    {nombreComercio:"Garrafero"},
    {nombreComercio:"Matafuegos"},
    {nombreComercio:"Repuestos de automotor"},


    {nombreComercio:"Casa de Pezca", datosComercio:[{nameComer:"Lo de Bigote JD",direComercio:"RUTA 210, Pedro Peralta, 9 de Julio",direComercioGoogle:"https://g.page/LODEBIGOTEJDDOMSELAAR?share", telComer:"https://wa.me/5492223422203", tel:"2223422203"}]},


    {nombreComercio:"Maderera", datosComercio:[{nameComer:"Maderas Domselaar",direComercio:"RP210",direComercioGoogle:"https://goo.gl/maps/YFZEfxaxTUJtaLKE6", telComer:"https://wa.me/5491124477819", tel:"1124477819"}

  ] },
    {nombreComercio:"Leña y Carbón", datosComercio:[{nameComer:"Leñera El pipi",direComercio:"Alem 250",direComercioGoogle:"https://goo.gl/maps/8k1NbUW39K823FaG8", telComer:"https://wa.me/5492224551175", tel:"+54 9 2224 55 1175", imagenes:"https://res.cloudinary.com/sofiaschenone/image/upload/v1658528206/Domselaar/lena_kwf0ux.png"},
    {nameComer:"Leña Kiko",direComercio:"Laprida 55",direComercioGoogle:"https://goo.gl/maps/72CAbvDJfShbZxL87", tel:"02224 15534815"}
  ]},


    {nombreComercio:"Gomería"},
    {nombreComercio:"Lavadero de autos"},


    {nombreComercio:"Lavadero de ropa", datosComercio:[
      {nameComer:"Domselaar", direComercio:"Antártida Argentina 132",
      direComercioGoogle:"https://goo.gl/maps/cKYwuxzFfus2szbg7", telComer:"https://wa.me/5491157385346", tel:"11 5738 5346"
    }
    ]},


    {nombreComercio:"Peluquería",datosComercio:[{nameComer:"Peluquería Unisex",direComercio:"Chacabuco 113",direComercioGoogle:"https://goo.gl/maps/AMythynP1CTqv7bd6", telComer:"https://wa.me/5491122796775", tel:"1122796775"}]},

    {nombreComercio:"Corralón",datosComercio:[{nameComer:"Moreno",direComercio:"AV. San Martín",direComercioGoogle:"https://goo.gl/maps/5Amj4LXaDNW2Yhev9", telComer:"https://wa.me/5491156463428", tel:"1156463428"},
    {nameComer:"Domselaar", telComer:"https://wa.me/5492223461455", tel:"02223461455"}

  ]},


    {nombreComercio:"Aseguradora"},

    {nombreComercio:"Heladería",datosComercio:[{nameComer:"Un Lujo",direComercio:"Bernardino Rivadavia 12",direComercioGoogle:"https://goo.gl/maps/WKNjDSpHqJFEttAa7", telComer:"https://wa.me/5491159920871", tel:"1159920871"}]},

    {nombreComercio:"Panadería"},

    ///unir categorias de pizza y parrilla por comidas!!!!!!!/////
    {nombreComercio:"Pizzería", datosComercio:[
      {nameComer:"El Tata",direComercio:"Madrid 326",direComercioGoogle:"https://goo.gl/maps/PYikD8D8srmiRcYQ8", telComer:"https://wa.me/5491123643634 ", tel:"11-2364-3634"},
      {nameComer:"Mi Pueblo",direComercio:"Bartolomé Mitre 252",direComercioGoogle:"https://goo.gl/maps/2FDJMoNAEuqrwKho7", telComer:"https://wa.me/5491133317549", tel:"1133317549"},
    {nameComer:"El rey de la pizza", direComercio:"Teniente Origone",direComercioGoogle:"https://maps.app.goo.gl/NFVJhGcza1ESxobu8", telComer:"https://wa.me/5492223509280", tel:"2223509280"}
  ]},

    {nombreComercio:"Cervecería ",datosComercio:[{nameComer:"Sherlock",direComercio:"Bernardino Rivadavia",direComercioGoogle:"https://goo.gl/maps/dcGWimu5k6LwYNV69", telComer:"https://wa.me/5491126620781", tel:"1126620781"}]},


    {nombreComercio:"Sodero ",datosComercio:[{nameComer:"Las 4 M (Esteban)",imagenes:"https://res.cloudinary.com/sofiaschenone/image/upload/v1658529694/Domselaar/agua_nuemzg.png",direComercio:"Florencio Sánchez 14",direComercioGoogle:"https://goo.gl/maps/Xmrn6pU5xB1BwLmP9", telComer:"https://wa.me/549115491161492507", tel:"54 9 11 6149-2507"}]}
  ];
  comerciosOrdenados: any[]=[];

  constructor() { }

  ngOnInit(): void {
    this.comerciosOrdenados = this.comercios.sort((a, b) => {
      if (a.nombreComercio < b.nombreComercio) {
        return -1;
      } else if (a.nombreComercio > b.nombreComercio) {
        return 1;
      } else {
        return 0;
      }
    });
    this.comerciosOrdenados;
  }

}
