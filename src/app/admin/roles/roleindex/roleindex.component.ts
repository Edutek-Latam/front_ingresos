import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { Role } from '../../../interfaces/role.interfaces';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

@Component({
  selector: 'app-roleindex',
  templateUrl: './roleindex.component.html',
  styleUrl: './roleindex.component.scss'
})
export class RoleindexComponent implements OnInit {
  roles: Role[] = []
  constructor(
    private _apiService: ApiService,
    private _router: Router
   ){}

  ngOnInit(): void {
    Loading.dots()
      this._apiService.roles()
      .subscribe({
        next:resp=>{
          if(resp){
            this.roles = resp;
            Loading.remove()
          }
          
        },
        error:error=>{}
      })
  }

  nuevo(){
    this._router.navigate(['/admin/role/nuevo'])
  }
}
