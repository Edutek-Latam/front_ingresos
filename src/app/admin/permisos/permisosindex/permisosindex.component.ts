import { Component,OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Permiso } from '../../../interfaces/permisos.interfaces';
import { Router } from '@angular/router';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

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
      Loading.dots()
      this._apiservices.permisos()
      .subscribe({
        next: resp=>{
          if(resp){
            this.permisos = resp
            Loading.remove()
          }
        }
      })
  }

  eliminar(id: string){
    Confirm.show(
      'Permisos',
      'Esta seguro de eliminar el registro',
      'SI',
      'NO',
      ()=>{
        this.permisos =  this.permisos.filter(e=>e.id != id)
        console.log(this.permisos)
      },
      ()=>{
        return
      }
    )

  
  }

}
