import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComerciosComponent } from './comercios/comercios.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { InicioComponent } from './inicio/inicio.component';
///////ng prime
import {SplitButtonModule} from 'primeng/splitbutton';
import {AccordionModule} from 'primeng/accordion';
import {TabViewModule} from 'primeng/tabview';

import {CardModule} from 'primeng/card';
import {TabMenuModule} from 'primeng/tabmenu';
import { InfoutilComponent } from './infoutil/infoutil.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CardServiciosComponent } from './card-servicios/card-servicios.component';
import { CardComerciosComponent } from './card-comercios/card-comercios.component';


@NgModule({
  declarations: [
    AppComponent,
    ComerciosComponent,
    ServiciosComponent,
    InicioComponent,
    InfoutilComponent,
    NotfoundComponent,
    CardServiciosComponent,
    CardComerciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SplitButtonModule,
    TabMenuModule,
    CardModule,
    TabViewModule,
    AccordionModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
