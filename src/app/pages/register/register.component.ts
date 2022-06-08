import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/interfaces/cliente.model';
import { debounceTime } from 'rxjs';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';


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

  constructor(
    private readonly clientService : ClientService,
    private readonly authService : AuthService,
    private router: Router) {

    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),

      surname: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),

      email: new FormControl('', [
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        Validators.required
      ]),

      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),

      repeatPassword: new FormControl('', [Validators.required]),

      session: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {

    const emailControl = this.form.controls?.['email'];
    emailControl.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      console.log(value);
    });
  }



  async onSubmit() {
    const response =await this.clientService.addClient(this.form.value);
    console.log(response);
    this.authService.register(this.form.value)
    .then(response => {
      console.log(response);
      this.router.navigate(['/login']);
    })
    .catch(error => console.log(error));
  }
}
