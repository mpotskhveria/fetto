import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fet-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  myform!: FormGroup

  ngOnInit(){

    this.myform = new FormGroup({
      firstname: new FormControl(null,Validators.required),
      lastname: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      age: new FormControl(18)
    })

  }

  test(){
    console.log(this.myform.value)
  }

}
