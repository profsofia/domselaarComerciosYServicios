import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComerciosComponent } from './comercios/comercios.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { InicioComponent } from './inicio/inicio.component';
///////ng prime
import {SplitButtonModule} from 'primeng/splitbutton';
import {TabMenuModule} from 'primeng/tabmenu';
import { InfoutilComponent } from './infoutil/infoutil.component';


@NgModule({
  declarations: [
    AppComponent,
    ComerciosComponent,
    ServiciosComponent,
    InicioComponent,
    InfoutilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SplitButtonModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
