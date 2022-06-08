import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
    ) {

    this.form = new FormGroup({

      email: new FormControl('', [
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        Validators.required
      ]),

      password: new FormControl('', [Validators.required]),

    });
  }


  ngOnInit(): void {
  }

  onSubmit() {

    this.authService.login(this.form.value)
    .then(response => {console.log(response), console.log('Estas logeado');})
    .catch(error => console.log(error));

  }

  onClick() {

    this.authService.loginWithGoogle()
    .then(response => {
      console.log(response),
      console.log('Estas logeado con Google'),
      this.router.navigate(['/landing']);})
    .catch(error => console.log(error));
  }

}
