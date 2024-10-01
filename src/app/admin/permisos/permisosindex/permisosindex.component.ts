import { Component,OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Permiso } from '../../../interfaces/permisos.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-permisosindex',
  templateUrl: './permisosindex.component.html',
  styleUrl: './permisosindex.component.scss'
})
export class PermisosindexComponent implements OnInit {
  constructor(private _apiservices: ApiService,
    private _router:Router
  ){}

  nuevo(){
    this._router.navigate(['/admin/permisos/nuevo'])
  }

  permisos: Permiso[]=[]
  ngOnInit(): void {
      this._apiservices.permisos()
      .subscribe({
        next: resp=>{
          if(resp){
            this.permisos = resp
          
          }
        }
      })
  }

}
