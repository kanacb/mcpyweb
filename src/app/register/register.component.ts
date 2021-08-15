import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
      email: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(100), Validators.email]),
    })
   }

  ngOnInit(): void {

  }

  get name() { return this.form.get('name');}
  get email() { return this.form.get('email');}

  submit(){
    console.log(this.form.value);
  }

}
