import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-totp',
  templateUrl: './totp.component.html',
  styleUrl: './totp.component.scss'
})
export class TotpComponent implements OnInit {

    frmOtp : FormGroup;
    isSubmitted:boolean = false; 
    keyOtp: string | undefined;
  constructor(
    private _authService: AuthService,
    private _router: Router
  ){
    console.log("otpComponent")
    this.frmOtp = new FormGroup({
      digit1: new FormControl('',[Validators.required]),
      digit2: new FormControl('',[Validators.required]),
      digit3: new FormControl('',[Validators.required]),
      digit4: new FormControl('',[Validators.required]),
      digit5: new FormControl('',[Validators.required]),
      digit6: new FormControl('',[Validators.required]),

    })
  }
  ngOnInit(): void {
    this.keyOtp = this._authService.totp;
   /*  if(!this.keyOtp){
      this._router.navigate(['login'])
    } */
    //throw new Error('Method not implemented.');
  }
  onInputChange(event: any, nextInput:any){
    const input = event.target;
    if(input.value.length === 1 && nextInput){
      nextInput.focus()
    }
    //console.log(input)
  }

  onKeyDown(event: KeyboardEvent, prevInput: any){
    const input = event.target as HTMLInputElement;

    if(event.key === 'Backspace' && input.value ==='' && prevInput){
      prevInput.focus()
    }
  }

  getTotpValue(){
    return Object.values(this.frmOtp.value).join('')
  }

  submit(){
    if(this.isSubmitted) return;
    this.isSubmitted = true;
    if(this.frmOtp.valid){
      const otp = this.getTotpValue();
      this._authService.validate({
        otp,
        secret: this.keyOtp as string
      }).subscribe({
        next:result=>{
          console.log(result)
        },
        error: errors=>{
          console.error(errors)
        }
        
      })
      console.log(otp)
      this.isSubmitted = false;
    }
  }
}
