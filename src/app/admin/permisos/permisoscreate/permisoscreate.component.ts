import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Permiso } from '../../../interfaces/permisos.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-permisoscreate',
  templateUrl: './permisoscreate.component.html',
  styleUrl: './permisoscreate.component.scss'
})
export class PermisoscreateComponent {
  frmPermiso: FormGroup
  isSubmited: boolean =false

  constructor(private _apiService: ApiService,
    private _router: Router

  ){
    this.frmPermiso = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(3)]),
      description: new FormControl('',[Validators.required, Validators.minLength(3)])
    })
  }

  nuevo(){
    if(this.isSubmited) return;
    this.isSubmited = true;
    if(this.frmPermiso.valid){
        const data : Permiso = this.frmPermiso.value
        this._apiService.createPermiso(data)
        .subscribe({
          next:result=>{
            this._router.navigate(['/admin/permisos/'])
            this.isSubmited = false
            //console.log(result)

          },
          error: error=>{
            console.error(error)
            this.isSubmited = false
          }
        })
      this.isSubmited = false
    }

    this.isSubmited =false
  }
}
