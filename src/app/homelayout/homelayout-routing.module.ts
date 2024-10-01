import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PermisosindexComponent } from '../admin/permisos/permisosindex/permisosindex.component';
import { PermisoscreateComponent } from '../admin/permisos/permisoscreate/permisoscreate.component';

const routes: Routes = [{
  path:'',component:HomeComponent,
  children:[
    {path:'admin/permisos',component: PermisosindexComponent},
    {path:'admin/permisos/nuevo',component:PermisoscreateComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomelayoutRoutingModule { }
