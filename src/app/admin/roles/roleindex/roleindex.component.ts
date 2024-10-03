import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { Role } from '../../../interfaces/role.interfaces';

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
      this._apiService.roles()
      .subscribe({
        next:resp=>{
          if(resp){
            this.roles = resp;
            console.log(this.roles)
          }
          
        },
        error:error=>{}
      })
  }

  nuevo(){
    this._router.navigate(['/admin/role/nuevo'])
  }
}
