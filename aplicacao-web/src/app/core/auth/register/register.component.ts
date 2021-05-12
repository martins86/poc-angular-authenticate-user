import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formRegister = this.fb.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['', [Validators.required]],
    passwordone: ['', [Validators.required, Validators.minLength(6)]],
    passwordtwo: ['', [Validators.required, Validators.minLength(6)]],
    phone: ['', [Validators.required]],
    mobilephone: ['', [Validators.required]],
    address: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
  }, { Validator: this.matchingPassword });

  states: string[] = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
  'DF'
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.formRegister.value);
  }

  private matchingPassword(group: FormGroup): any {
    if (group) {
      const passwordone = group.controls['passwordone'].value;
      const passwordtwo = group.controls['passwordtwo'].value;
      if (passwordone === passwordtwo) {
        return null;
      }
    }
    return { matching: false };
  }

}
