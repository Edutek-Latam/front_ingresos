import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomelayoutRoutingModule } from './homelayout-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { PermisosindexComponent } from '../admin/permisos/permisosindex/permisosindex.component';
import { PermisoscreateComponent } from '../admin/permisos/permisoscreate/permisoscreate.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PageComponent } from './component/page/page.component';
import { RoleindexComponent } from '../admin/roles/roleindex/roleindex.component';
import { RolecreateComponent } from '../admin/roles/rolecreate/rolecreate.component';
import { UserindexComponent } from '../admin/user/userindex/userindex.component';
import { UsercreateComponent } from '../admin/user/usercreate/usercreate.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    PermisosindexComponent,
    PermisoscreateComponent,
    PageComponent,
    RoleindexComponent,
    RolecreateComponent,
    UserindexComponent,
    UsercreateComponent
  ],
  imports: [
    CommonModule,
    HomelayoutRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class HomelayoutModule { }
