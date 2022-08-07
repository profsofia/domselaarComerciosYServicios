import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComerciosComponent } from './card-comercios/card-comercios.component';
import { CardServiciosComponent } from './card-servicios/card-servicios.component';
import { ComerciosComponent } from './comercios/comercios.component';
import { InfoutilComponent } from './infoutil/infoutil.component';
import { InicioComponent } from './inicio/inicio.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  {path: '', component:InicioComponent},
  {path:'comercios', component:ComerciosComponent},
  {path:'servicios', component:ServiciosComponent},
  {path:'infoutil', component:InfoutilComponent},
  {path:'dataserv', component:CardServiciosComponent},
  {path:'datacomer', component:CardComerciosComponent},
  {path:"**", component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
