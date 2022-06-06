import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/interfaces/cliente.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  /**
   *  valid <--> invalid
   *  pristine <--> dirty
   *  untouched <--> toueched
   */

  constructor(private readonly clientService : ClientService) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),

      surname: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),

      email: new FormControl('', [
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
      ]),

      password: new FormControl(''),

      repeatPassword: new FormControl(''),

      session: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  onSubmit() {

    this.clientService.save(this.form.value as Client);

  }
}
