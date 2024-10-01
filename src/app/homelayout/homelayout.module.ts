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


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    PermisosindexComponent,
    PermisoscreateComponent
  ],
  imports: [
    CommonModule,
    HomelayoutRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class HomelayoutModule { }
