import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComerciosComponent } from './comercios/comercios.component';
import { InfoutilComponent } from './infoutil/infoutil.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  {path: '', component:InicioComponent},
  {path:'comercios', component:ComerciosComponent},
  {path:'servicios', component:ServiciosComponent},
  {path:'infoutil', component:InfoutilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
