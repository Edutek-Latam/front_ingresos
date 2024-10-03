import { FormStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rolecreate',
  templateUrl: './rolecreate.component.html',
  styleUrl: './rolecreate.component.scss'
})
export class RolecreateComponent implements OnInit {
  frmRole: FormGroup
  
  constructor(){
    this.frmRole = new FormGroup({
      name: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      isActive: new FormControl('',[Validators.required]),
      permissions: new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }


}
