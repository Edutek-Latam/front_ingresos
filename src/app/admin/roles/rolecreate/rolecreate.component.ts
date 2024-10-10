import { FormStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Permiso } from '../../../interfaces/permisos.interfaces';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rolecreate',
  templateUrl: './rolecreate.component.html',
  styleUrl: './rolecreate.component.scss'
})
export class RolecreateComponent implements OnInit {
  frmRole: FormGroup
  permisos: Permiso[] = []
  isSubmited :boolean = false;

  constructor(private _apiService: ApiService, private _router: Router){
    this.frmRole = new FormGroup({
      name: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      permissionIds: new FormArray([])
    })
  }

  ngOnInit(): void {
    this._apiService.permisos()
    .subscribe({
      next: result=>{
        if(result){
          console.log(result)
          this.permisos = result
        }
      },
      error: errors=>{
        console.error(errors)
      }
    })
    //throw new Error('Method not implemented.');
  }

  onCheckBoxChange(e: any){
    const permisosArray : FormArray = this.frmRole.get('permissionIds') as FormArray;
    console.log(e.target)
    if(e.target.checked){
      permisosArray.push(new FormControl(e.target.value))
    }else{
      const index = permisosArray.controls.findIndex(x => e.value === e.target.value)
      permisosArray.removeAt(index)
    }
  }

  submit(){
    if(this.isSubmited) return;

    this.isSubmited = true;
    if(this.frmRole.valid){
     this._apiService.createRole(this.frmRole.value)
     .subscribe(
      {
        next: result=>{
          if(result){
            setTimeout(() => {
              Report.success("Roles","Registro guardado con exito","Aceptar")
              this._router.navigate(['/admin/role'])
            }, 2500);
          }
        },
        error:erros=>{}
      }
     )

      console.log(this.frmRole.value)
    }

    this.isSubmited = false
  }


}
