import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-userindex',
  templateUrl: './userindex.component.html',
  styleUrl: './userindex.component.scss'
})
export class UserindexComponent implements OnInit {
  usuarios: any;
  constructor(private _apiService: ApiService){}
  ngOnInit(): void {
    this._apiService.users()
    .subscribe({
      next:res=>{
        this.usuarios = res;
        console.log(res)
      }
    })
  }

  
}
