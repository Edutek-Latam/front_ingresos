import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Login } from '../../interfaces/login.interfaces';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  frmLogin: FormGroup;
  isSubmitted: boolean = false

  constructor(
    private _authService: AuthService,
    private _router: Router
  ){
    this.frmLogin = new FormGroup({
      user: new FormControl('',[Validators.required]),
      pwd: new FormControl('',[Validators.required])
    })
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  submit(){
    if(this.isSubmitted) return;
    this.isSubmitted = true;
    Loading.dots();
    if(this.frmLogin.valid){
      const  {user,pwd} = this.frmLogin.value;
      const datos : Login = {
        username: user,
        password: pwd
      }
      this._authService.login(datos)
      .subscribe({
        next: result=>{
          ///console.log(result)
          if(result.temp_token){
            this._authService.totp = result.temp_token
            this._router.navigate(['otp'])
          }
          this.isSubmitted =false
          Loading.remove()
        },
        error: errors =>{
          //console.log(errors.error.message)
         // console.error(Object.keys(errors))
          Notify.failure(`${errors.error.message}`)
          Loading.remove()
          this.isSubmitted = false
          this.frmLogin.reset()
        }
      })
      }
      
    }

  }

