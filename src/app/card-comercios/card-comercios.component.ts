import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-comercios',
  templateUrl: './card-comercios.component.html',
  styleUrls: ['./card-comercios.component.css']
})
export class CardComerciosComponent implements OnInit {
  datosComercio: any[] =[
    { nameComer: 'Remís Domselaar', tel:"112224442977", telComer: 'https://wa.me/5492224442977' },
    { nameComer: 'Remís Seba Perro', tel:"+ 54 92224 54 7612", telComer: 'https://wa.me/5492224547612' },
    { nameComer: 'Remis Ds (Carlos)', tel:"+54 91167 924079", telComer: 'https://wa.me/5491167924079'},
    { nameComer: 'Marcos REMIS DOMSE', tel:"+54 9 11 4145-6515", telComer: 'https://wa.me/5491141456515' },
    { nameComer: 'Remis Luis', tel:"+54 9 11 5146-7452", telComer: 'https://wa.me/5491151467452' },
    { nameComer: 'Remis Sebastián', tel:"+54 9 11 3765-4387", telComer: 'https://wa.me/5491137654387' }

  ];
  comerciosOrdenados: any[]=[];

  constructor() { }

  ngOnInit(): void {
  }
}
