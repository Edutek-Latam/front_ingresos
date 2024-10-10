import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PermisosindexComponent } from '../admin/permisos/permisosindex/permisosindex.component';
import { PermisoscreateComponent } from '../admin/permisos/permisoscreate/permisoscreate.component';
import { RoleindexComponent } from '../admin/roles/roleindex/roleindex.component';
import { RolecreateComponent } from '../admin/roles/rolecreate/rolecreate.component';
import { UserindexComponent } from '../admin/user/userindex/userindex.component';
import { UsercreateComponent } from '../admin/user/usercreate/usercreate.component';

const routes: Routes = [{
  path:'',component:HomeComponent,
  children:[
    {path:'admin/permisos',title:'Permisos', component: PermisosindexComponent},
    {path:'admin/permisos/nuevo',title:'Crear Permiso', component:PermisoscreateComponent},
    {path:'admin/role',title:'Roles',  component: RoleindexComponent},
    {path:'admin/role/nuevo', title:'Crear Role', component: RolecreateComponent},
    {path:'admin/user', title:'Usuarios', component: UserindexComponent},
    {path:'admin/user/nuevo', title:'Crear Usuario', component: UsercreateComponent},

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomelayoutRoutingModule { }
